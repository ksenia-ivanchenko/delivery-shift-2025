import { useEffect, useRef, useState } from 'react';

import { AuthForm } from 'components';
import { Input, Preloader } from 'ui-kit';
import { createOtp } from 'api';
import { setUser, useDispatch } from 'store';
import { useInputPhone } from 'hooks';

type AuthPhoneProps = {
  goToNextStep: () => void;
};

export const AuthPhone = ({ goToNextStep }: AuthPhoneProps) => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const phoneInput = useInputPhone();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = async () => {
    const phoneRequest = phoneInput.phone.replace(/[\+\s]/g, '').replace(/^7/, '8');
    setLoading(true);
    try {
      await createOtp({ phone: phoneRequest });
    } finally {
      dispatch(setUser({ phone: phoneRequest }));
      setLoading(false);
      goToNextStep();
    }
  };

  return (
    <AuthForm
      onSubmit={handleSubmit}
      buttonText={loading ? <Preloader /> : 'Продолжить'}
      title='Вход'
      description='Введите номер телефона для входа в личный кабинет'
      valid={!phoneInput.error && phoneInput.phone.length > 0}
    >
      <Input
        placeholder='Телефон'
        type='tel'
        error={phoneInput.error}
        value={phoneInput.phone}
        onChange={phoneInput.handleInputChange}
        onKeyPress={phoneInput.handleKeyPress}
        id='phone'
        ref={inputRef}
      />
    </AuthForm>
  );
};
