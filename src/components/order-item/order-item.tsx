import { OrderResponse } from 'api';
import styles from './order-item.module.scss';
import { OrderStatus } from 'components';
import { Button } from 'ui-kit';

type OrderItemProps = {
  order: OrderResponse;
  handleDetailsClick: () => void;
};
export const OrderItem = ({ order, handleDetailsClick }: OrderItemProps) => (
  <li className={styles.card}>
    <span className={styles.number}>{order._id}</span>
    <span className={styles.address}>
      Россия, г. {order.receiverPoint.name}, ул. {order.receiverAddress.street}, д.{' '}
      {order.receiverAddress.house}
    </span>
    <OrderStatus status={order.status} />
    <Button
      styleType={{ type: 'tertiary', variant: 'link' }}
      className={styles.details}
      onClick={handleDetailsClick}
    >
      Подробнее
    </Button>
  </li>
);
