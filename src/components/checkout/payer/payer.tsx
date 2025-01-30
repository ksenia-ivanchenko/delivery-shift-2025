import { FormEvent, useState } from 'react';

import { Select } from 'ui-kit';
import { CheckoutButtons } from '../buttons';
import { setPayer, useDispatch } from 'store';
import { Payers } from 'api';
import styles from './payer.module.scss';

type PayerProps = {
  next: () => void;
  prev: () => void;
  defaultValue: Payers;
};
export const Payer = ({ next, prev, defaultValue }: PayerProps) => {
  const [selectPayer, setSelectPayer] = useState<Payers>(defaultValue ?? 'RECEIVER');
  const dispatch = useDispatch();

  const options = [
    { label: 'Получатель', value: 'RECEIVER' },
    { label: 'Отправитель', value: 'SENDER' }
  ];
  const selectedOption = options.find((option) => option.value === defaultValue);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setPayer(selectPayer));
    next();
  };

  const handleSelect = (value: Payers) => {
    setSelectPayer(value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Select
        options={options}
        selectedValue={selectedOption ?? options[0]}
        onChange={handleSelect}
      />
      <CheckoutButtons prev={prev} disabled={false} />
    </form>
  );
};
