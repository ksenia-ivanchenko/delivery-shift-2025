import { OrderStatus } from 'components';
import styles from './order-card.module.scss';
import { OrderResponse } from 'api';

type OrderCardProps = {
  order: OrderResponse;
};

export const OrderDetails = ({ order }: OrderCardProps) => {
  return (
    <>
      <div className={styles.fieldContainer}>
        <span className={styles.field}>Номер заказа</span>
        <span className={styles.value}>{order._id}</span>
      </div>
      <div className={styles.fieldContainer}>
        <span className={styles.field}>Статус</span>
        <OrderStatus status={order.status} />
      </div>
      <div className={styles.fieldContainer}>
        <span className={styles.field}>Адрес доставки</span>
        <span className={styles.value}>
          Россия, г. {order.receiver.city}, ул. {order.receiverAddress.street}, д.{' '}
          {order.receiverAddress.house}
        </span>
      </div>
      <div className={styles.fieldContainer}>
        {/* нельзя достать тип доставки */}
        <span className={styles.field}>Тип доставки</span>
        <span className={styles.value}>{order.option?.name ?? 'Стандартная доставка'}</span>
      </div>
    </>
  );
};
