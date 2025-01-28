import { AuthForm } from 'components';
import { useEffect, useRef, useState } from 'react';
import { Input, Preloader } from 'ui-kit';
import { createOtp } from 'api';
import { allowedKeys, formatPhoneNumber, isNumber, validatePhone } from 'helpers';
import { setUser, useDispatch } from 'store';

type AuthPhoneProps = {
  goToNextStep: () => void;
};

export const AuthPhone = ({ goToNextStep }: AuthPhoneProps) => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = async () => {
    const phoneRequest = phone.replace(/[\+\s]/g, '').replace(/^7/, '8');
    setLoading(true);
    try {
      await createOtp({ phone: phoneRequest });
    } finally {
      dispatch(setUser({ phone: phoneRequest }));
      setLoading(false);
      goToNextStep();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    const validationError = validatePhone(formattedValue.replace(/\s+/g, ''));
    setPhone(formattedValue);
    setError(validationError);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      (!allowedKeys.includes(e.key) && !isNumber(e.key)) ||
      phone.replace(/\s+/g, '').length > 11
    ) {
      e.preventDefault();
    }
  };

  return (
    <AuthForm
      onSubmit={handleSubmit}
      buttonText={loading ? <Preloader /> : 'Продолжить'}
      title='Вход'
      description='Введите номер телефона для входа в личный кабинет'
      valid={!error && phone.length > 0}
    >
      <Input
        placeholder='Телефон'
        type='tel'
        error={error}
        value={phone}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        id='phone'
        ref={inputRef}
      />
    </AuthForm>
  );
};
