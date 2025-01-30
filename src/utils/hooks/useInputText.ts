import { ChangeEvent, useState } from 'react';

type UseInputTextParams = {
  required?: boolean;
  numberAllowed?: boolean;
  allowedSymbols?: string[];
};

export const useInputText = (params?: UseInputTextParams) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let validationText = event.target.value.replace(/[^A-Za-zА-Яа-яЁё]/g, '');
    if (params?.numberAllowed) {
      validationText = event.target.value.replace(/[^A-Za-zА-Яа-яЁё0-9]/g, '');
    }
    if (params?.allowedSymbols) {
      const allowedSymbols = params.allowedSymbols.join('');
      const regex = new RegExp(`[^A-Za-zА-Яа-яЁё0-9${allowedSymbols}]`, 'g');
      validationText = event.target.value.replace(regex, '');
    }
    
    setText(validationText);

    if (params?.required) {
      const validationError = validationText ? '' : 'Это поле обязательно';
      setError(validationError);
    }
  };

  return { text, setText, error, setError, handleInputChange };
};
