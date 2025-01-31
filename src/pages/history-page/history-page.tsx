import { useEffect } from 'react';

import { getOrders, useDispatch, useSelector } from 'store';
import { OrderItem } from 'components';
import styles from './history-page.module.scss';
import { Preloader } from 'ui-kit';
import { useNavigate } from 'react-router-dom';

export const HistoryPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orders, loading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const handleDetailsClick = (id: string) => navigate(`/orders/${id}`);
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>История</h1>
      <div className={styles.header}>
        <span>Номер заказа</span>
        <span>Адрес доставки</span>
        <span>Статус заказа</span>
      </div>
      <ul>
        {orders.map((order) => (
          <OrderItem
            order={order}
            key={order._id}
            handleDetailsClick={() => handleDetailsClick(order._id)}
          />
        ))}
      </ul>
      {loading && <Preloader />}
    </div>
  );
};
