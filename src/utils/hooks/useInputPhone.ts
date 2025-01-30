import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { allowedKeys, formatPhoneNumber, isNumber, validatePhone } from 'helpers';

export const useInputPhone = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(event.target.value);
    const validationError = validatePhone(formattedValue.replace(/\s+/g, ''));
    setPhone(formattedValue);
    setError(validationError);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (
      (!allowedKeys.includes(event.key) && !isNumber(event.key)) ||
      phone.replace(/\s+/g, '').length > 11
    ) {
      event.preventDefault();
    }
  };
  return { phone, setPhone, error, setError, handleInputChange, handleKeyPress };
};
