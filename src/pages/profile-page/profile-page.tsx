import { FormEvent, useEffect, useState } from 'react';

import { Button, Dropdown, Input, Preloader } from 'ui-kit';
import { getDeliveryPoints, updateUserData, useDispatch, useSelector } from 'store';
import { useInputText } from 'hooks';
import { formatPhoneNumber } from 'helpers';
import styles from './profile-page.module.scss';

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);
  const { points } = useSelector((state) => state.delivery);
  const [city, setCity] = useState(user.city);

  const lastName = useInputText();
  const middleName = useInputText();
  const firstName = useInputText();
  const email = useInputText({ allowedSymbols: ['@', '.', '_', '-'] });

  const pointsOptions = points.map((point) => ({
    label: point.name,
    value: point
  }));
  const defaultSelectedOption = pointsOptions.find((option) => option.value.name === user.city);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(
      updateUserData({
        profile: {
          firstname: firstName.text,
          middlename: middleName.text,
          lastname: lastName.text,
          email: email.text,
          city: city
        },
        phone: user.phone
      })
    );
  };

  useEffect(() => {
    dispatch(getDeliveryPoints());
    lastName.setText(user.lastname ?? '');
    middleName.setText(user.middlename ?? '');
    firstName.setText(user.firstname ?? '');
    email.setText(user.email ?? '');
  }, []);

  return (
    <form className={styles.content} onSubmit={handleSubmit} id='profile'>
      <h1 className={styles.title}>Профиль</h1>
      <div className={styles.inputsContainer}>
        <div className={styles.inputs}>
          <Input
            label='Фамилия'
            value={lastName.text}
            onChange={lastName.handleInputChange}
            placeholder='Фамилия'
          />
          <Input
            label='Имя'
            value={firstName.text}
            onChange={firstName.handleInputChange}
            placeholder='Имя'
          />
          <Input
            label='Отчество'
            value={middleName.text}
            onChange={middleName.handleInputChange}
            placeholder='Отчество'
          />
        </div>
        <div className={styles.inputs}>
          <Input label='Номер телефона' placeholder={formatPhoneNumber(user.phone)} disabled />
          <Input
            label='Email'
            value={email.text}
            onChange={email.handleInputChange}
            placeholder='Email'
          />
          <Dropdown
            options={pointsOptions}
            onSelect={(option) => {
              setCity(option.label);
            }}
            defaultSelectedOption={defaultSelectedOption}
            placeholder='Город'
            label='Город'
          />
        </div>
      </div>
      <Button
        styleType={{ type: 'primary', variant: 'contained' }}
        type='submit'
        className={styles.button}
        disabled={loading}
      >
        {loading ? <Preloader /> : 'Обновить данные'}
      </Button>
    </form>
  );
};
