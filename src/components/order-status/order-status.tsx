import clsx from 'clsx';
import styles from './order-status.module.scss';

// не нашла расшифровки каждого статуса в макете / апи
const statuses = {
  0: 'Создан',
  1: 'Оплачен',
  2: 'В пути',
  3: 'Доставлен',
  4: 'Отменен'
};
const colors = {
  0: 'yellow',
  1: 'orange',
  2: 'gray',
  3: 'blue',
  4: 'red'
};

type OrderStatusProps = {
  status: 0 | 1 | 2 | 3 | 4;
};

export const OrderStatus = ({ status }: OrderStatusProps) => (
  <span className={clsx(styles.value, styles.status, styles[colors[status]])}>
    {statuses[status]}
  </span>
);
