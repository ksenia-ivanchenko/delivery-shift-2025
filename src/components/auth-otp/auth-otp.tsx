import { AuthForm } from 'components';
import styles from './auth-otp.module.scss';
import { resetUser, signIn, useDispatch, useSelector } from 'store';
import { useEffect, useRef, useState } from 'react';
import { Button, Input, Preloader } from 'ui-kit';
import { allowedKeys, formatPhoneNumber, isNumber, validateOtp } from 'helpers';
import { createOtp } from 'api';
import { useNavigate } from 'react-router-dom';

type AuthOtpProps = {
  goToPrevStep: () => void;
};

export const AuthOtp = ({ goToPrevStep }: AuthOtpProps) => {
  const navigate = useNavigate();
  const { user, requestError, authorized, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [otp, setOtp] = useState('');
  const [seconds, setSeconds] = useState(120);
  const [error, setError] = useState('');
  const [canRequest, setCanRequest] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setCanRequest(true);
    }
  }, [seconds]);

  useEffect(() => {
    if (requestError) {
      setError(requestError);
    }
    if (authorized) {
      navigate('/');
    }
  }, [requestError, authorized]);

  const handleSubmit = () => {
    dispatch(signIn({ phone: user.phone, code: Number(otp) }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validationError = validateOtp(e.target.value);
    setError(validationError);
    setOtp(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((!allowedKeys.includes(e.key) && !isNumber(e.key)) || otp.length > 5) {
      e.preventDefault();
    }
  };

  const requestCode = () => {
    createOtp({ phone: user.phone }).then((res) => {
      setSeconds(res.data.retryDelay);
      setCanRequest(false);
    });
  };

  const handleRequestAgain = () => {
    goToPrevStep();
    dispatch(resetUser());
  };

  return (
    <div className={styles.content}>
      <AuthForm
        onSubmit={handleSubmit}
        buttonText={loading ? <Preloader /> : 'Войти'}
        title='Вход'
        description='Введите проверочный код для входа в личный кабинет'
        valid={!error && otp.length > 0}
      >
        <Input placeholder='Телефон' value={formatPhoneNumber(user.phone)} disabled id='phone' />
        <Input
          placeholder='Проверочный код'
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          error={error}
          id='otp'
          ref={inputRef}
        />
      </AuthForm>
      {canRequest ? (
        <div className={styles.again_button}>
          <Button
            onClick={requestCode}
            type='button'
            styleType={{ type: 'secondary', variant: 'text' }}
          >
            Запросить код ещё раз
          </Button>
        </div>
      ) : (
        <span className={styles.again}>Запросить код повторно можно через {seconds} секунд</span>
      )}
      <div className={styles.another_phone}>
        <Button
          type='button'
          styleType={{ type: 'tertiary', variant: 'link' }}
          onClick={handleRequestAgain}
        >
          Ввести другой номер телефона
        </Button>
      </div>
    </div>
  );
};
