import { FormEvent, useEffect, useRef, useState } from 'react';

import { Checkbox, ExplainIcon, Input, Tooltip } from 'ui-kit';
import { useInputText } from 'hooks';
import { setReceiverAddress, setSenderAddress, useDispatch } from 'store';
import styles from './address.module.scss';
import { CheckoutButtons } from '../buttons';

type AddressProps = {
  prev: () => void;
  next: () => void;
  type: 'receiver' | 'sender';
  defaultValues: any;
};

// логика дублируется с Contacts, есть смысл вынести в кастомный хук?
// универсальный компонент для любого типа форм из флоу че то как будто в падлу

export const Address = ({ prev, next, type, defaultValues }: AddressProps) => {
  const dispatch = useDispatch();
  const formRef = useRef<HTMLFormElement>(null);
  const [isFormValid, setFormValid] = useState(false);
  const [isNonContact, setIsNonContact] = useState(defaultValues.isNonContact ?? false);

  const streetInput = useInputText({ required: true });
  const houseInput = useInputText({ required: true, numberAllowed: true, allowedSymbols: ['/'] });
  const apartmentInput = useInputText({ required: true, numberAllowed: true });
  const commentInput = useInputText({ numberAllowed: true });

  useEffect(() => {
    streetInput.setText(defaultValues.street);
    houseInput.setText(defaultValues.house);
    apartmentInput.setText(defaultValues.apartment);
    commentInput.setText(defaultValues.comment);
  }, [defaultValues]);

  useEffect(() => {
    const isValid =
      formRef.current?.checkValidity() &&
      !streetInput.error &&
      !houseInput.error &&
      !apartmentInput.error;

    setFormValid(isValid);
  }, [streetInput.text, houseInput.text, apartmentInput.text]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      street: streetInput.text,
      house: houseInput.text,
      apartment: apartmentInput.text,
      comment: commentInput.text,
      isNonContact: isNonContact
    });

    if (type === 'receiver') {
      dispatch(
        setReceiverAddress({
          street: streetInput.text,
          house: houseInput.text,
          apartment: apartmentInput.text,
          comment: commentInput.text,
          isNonContact: isNonContact
        })
      );
    }

    if (type === 'sender') {
      dispatch(
        setSenderAddress({
          street: streetInput.text,
          house: houseInput.text,
          apartment: apartmentInput.text,
          comment: commentInput.text
        })
      );
    }

    streetInput.setText('');
    houseInput.setText('');
    apartmentInput.setText('');
    commentInput.setText('');
    setFormValid(false);

    next();
  };

  return (
    <form noValidate ref={formRef} onSubmit={handleSubmit} className={styles.form}>
      <Input
        label='Улица'
        placeholder='Улица'
        required
        type='text'
        error={streetInput.error}
        value={streetInput.text}
        onChange={streetInput.handleInputChange}
      />
      <Input
        label='Номер дома'
        placeholder='Номер дома'
        type='text'
        required
        error={houseInput.error}
        value={houseInput.text}
        onChange={houseInput.handleInputChange}
      />
      <Input
        label='Номер квартиры'
        placeholder='Номер квартиры'
        type='number'
        required
        error={apartmentInput.error}
        value={apartmentInput.text}
        onChange={apartmentInput.handleInputChange}
      />
      <Input
        label='Заметка'
        placeholder='Заметка для курьера'
        type='text'
        error={commentInput.error}
        value={commentInput.text}
        onChange={commentInput.handleInputChange}
      />
      {type === 'receiver' && (
        <div className={styles.checkboxContainer}>
          <Checkbox
            onChange={(value) => queueMicrotask(() => setIsNonContact(value))}
            defaultChecked={defaultValues.isNonContact}
            label='Оставить у двери'
          />
          <Tooltip text='Подсказка для кнопки' position='top' trigger={<ExplainIcon />}>
            <div className={styles.tooltipContent}>
              <h4 className={styles.tooltipTitle}>Бесконтактная доставка</h4>
              <p className={styles.tooltipDescription}>
                Курьер привозит заказ, оставляет его у двери и уходит, а вам приходит уведомление на
                телефон о том, что заказ доставлен
              </p>
            </div>
          </Tooltip>
        </div>
      )}
      <CheckoutButtons prev={prev} disabled={!isFormValid} />
    </form>
  );
};
