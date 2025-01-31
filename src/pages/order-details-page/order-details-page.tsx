import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { CancelOrder, Modal, OrderDetails } from 'components';
import { initialState } from 'store';
import { cancelDelivery, getOrderApi, OrderResponse } from 'api';
import styles from './order-details-page.module.scss';
import { Button } from 'ui-kit';

export const OrderDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [order, setOrder] = useState<OrderResponse>(initialState);
  const [showModal, setShowModal] = useState(false);

  const handleClickBack = () => navigate('/orders');
  const closeModal = () => setShowModal(false);
  const cancelOrder = () => {
    cancelDelivery(id);
    navigate('/orders');
  };
  const handleButtonClick = () => {
    if (order.cancellable) {
      setShowModal(true);
    } else {
      navigate('/orders');
    }
  };

  useEffect(() => {
    const fetchOrder = async () => {
      if (id) {
        try {
          const response = await getOrderApi(id);
          setOrder(response.data.order);
        } catch (error) {
          console.error(error);
        }
      }
    };

    if (id) {
      fetchOrder();
    }
  }, [id]);

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Детали заказа</h1>
      <div className={styles.card}>
        <OrderDetails order={order} />
        <div className={styles.buttons}>
          <Button styleType={{ type: 'secondary', variant: 'contained' }} onClick={handleClickBack}>
            Назад
          </Button>

          {order.cancellable && (
            <Button
              styleType={{ type: 'primary', variant: 'contained' }}
              onClick={handleButtonClick}
            >
              Отменить заказ
            </Button>
          )}
        </div>
      </div>
      <Modal onClose={() => setShowModal(false)} isOpen={showModal}>
        <CancelOrder closeModal={closeModal} cancelOrder={cancelOrder} />
      </Modal>
    </div>
  );
};
