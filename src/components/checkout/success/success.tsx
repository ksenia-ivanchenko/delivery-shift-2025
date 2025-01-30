import { useSelector } from 'store';
import styles from './success.module.scss';
import { useNavigate } from 'react-router-dom';
import { CheckoutButtons } from '../buttons';
import { Button } from 'ui-kit';
import clsx from 'clsx';

// не нашла расшифровки каждого статуса в макете / апи
const statuses = {
  0: 'Создан',
  1: 'Оплачен',
  2: 'В пути',
  3: 'Доставлен',
  4: 'Вручен'
};
const colors = {
  0: 'yellow',
  1: 'orange',
  2: 'gray',
  3: 'blue',
  4: 'green'
};

export const Success = ({ setCurrentStep }) => {
  const navigate = useNavigate();
  const { status, receiverAddress, receiver, option, id } = useSelector((state) => state.order);

  const handleMainClick = () => {
    navigate('/');
    setCurrentStep(1);
  };
  const handleStatusClick = () => {
    navigate('/orders');
    setCurrentStep(1);
  };

  return (
    <div className={styles.content}>
      <span className={styles.info}>Вы можете оплатить ваш заказ в разделе «Профиль»</span>
      <div className={styles.card}>
        <div className={styles.fieldContainer}>
          <span className={styles.field}>Номер заказа</span>
          <span className={styles.value}>{id}</span>
        </div>
        <div className={styles.fieldContainer}>
          <span className={styles.field}>Статус</span>
          <span className={clsx(styles.value, styles.status, styles[colors[status]])}>
            {statuses[status]}
          </span>
        </div>
        <div className={styles.fieldContainer}>
          <span className={styles.field}>Адрес доставки</span>
          <span className={styles.value}>
            Россия, г. {receiver.city}, ул. {receiverAddress.street}, д. {receiverAddress.house}
          </span>
        </div>
        <div className={styles.fieldContainer}>
          <span className={styles.field}>Тип доставки</span>
          <span className={styles.value}>{option.name}</span>
        </div>
        <span className={styles.sms}>Вся информация была продублирована в SMS</span>
      </div>
      <div className={styles.buttons}>
        <Button
          type='button'
          onClick={handleStatusClick}
          styleType={{ type: 'secondary', variant: 'contained' }}
        >
          Посмотреть статус
        </Button>
        <Button
          type='button'
          onClick={handleMainClick}
          styleType={{ type: 'primary', variant: 'contained' }}
        >
          На главную
        </Button>
      </div>
    </div>
  );
};
