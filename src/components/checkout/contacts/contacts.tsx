import { FormEvent, useEffect, useRef, useState } from 'react';
import { Input } from 'ui-kit';
import { useInputPhone, useInputText } from 'hooks';
import { setReceiver, setSender, useDispatch } from 'store';
import { CheckoutButtons } from '../buttons';
import styles from './contacts.module.scss';

type ContactsProps = {
  prev: () => void;
  next: () => void;
  type: 'receiver' | 'sender';
  defaultValues: any;
  editing?: boolean;
  backToCheckPage: () => void;
};

export const Contacts = ({
  prev,
  next,
  type,
  defaultValues,
  editing,
  backToCheckPage
}: ContactsProps) => {
  const [isFormValid, setFormValid] = useState(false);
  const dispatch = useDispatch();
  const formRef = useRef<HTMLFormElement>(null);

  const phoneInput = useInputPhone();
  const firstNameInput = useInputText({ required: true });
  const middleNameInput = useInputText();
  const lastNameInput = useInputText({ required: true });

  useEffect(() => {
    firstNameInput.setText(defaultValues.firstname);
    middleNameInput.setText(defaultValues.middlename);
    lastNameInput.setText(defaultValues.lastname);
    phoneInput.setPhone(defaultValues.phone);
  }, [defaultValues]);

  useEffect(() => {
    const isValid =
      formRef.current?.checkValidity() &&
      !phoneInput.error &&
      !firstNameInput.error &&
      !lastNameInput.error;

    setFormValid(isValid);
  }, [firstNameInput.text, lastNameInput.text, phoneInput.phone]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (type === 'receiver') {
      dispatch(
        setReceiver({
          phone: phoneInput.phone,
          firstname: firstNameInput.text,
          middlename: middleNameInput.text,
          lastname: lastNameInput.text
        })
      );
    }

    if (type === 'sender') {
      dispatch(
        setSender({
          phone: phoneInput.phone,
          firstname: firstNameInput.text,
          middlename: middleNameInput.text,
          lastname: lastNameInput.text
        })
      );
    }

    phoneInput.setPhone('');
    firstNameInput.setText('');
    middleNameInput.setText('');
    lastNameInput.setText('');
    setFormValid(false);

    if (editing) {
      backToCheckPage();
    } else {
      next();
    }
  };

  return (
    <form noValidate ref={formRef} onSubmit={handleSubmit} className={styles.form}>
      <Input
        label='Фамилия'
        placeholder='Фамилия'
        pattern='^[A-Za-zА-Яа-яЁё]+$'
        required
        type='text'
        error={lastNameInput.error}
        value={lastNameInput.text}
        onChange={lastNameInput.handleInputChange}
      />
      <Input
        label='Имя'
        placeholder='Имя'
        pattern='^[A-Za-zА-Яа-яЁё]+$'
        type='text'
        required
        error={firstNameInput.error}
        value={firstNameInput.text}
        onChange={firstNameInput.handleInputChange}
      />
      <Input
        label='Отчество'
        placeholder='Отчество (при наличии)'
        pattern='^[A-Za-zА-Яа-яЁё]+$'
        type='text'
        error={middleNameInput.error}
        value={middleNameInput.text}
        onChange={middleNameInput.handleInputChange}
      />
      <Input
        label='Номер телефона'
        placeholder='Номер телефона'
        type='tel'
        error={phoneInput.error}
        value={phoneInput.phone}
        onChange={phoneInput.handleInputChange}
        onKeyPress={phoneInput.handleKeyPress}
        required
      />
      <CheckoutButtons prev={prev} disabled={!isFormValid} />
    </form>
  );
};
