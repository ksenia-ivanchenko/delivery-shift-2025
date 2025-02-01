import { useNavigate } from 'react-router-dom';

import { useSelector } from 'store';
import styles from './success.module.scss';
import { Button } from 'ui-kit';
import { OrderDetails } from 'components';

export const Success = ({ setCurrentStep }) => {
  const navigate = useNavigate();
  const order = useSelector((state) => state.order);

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
        <OrderDetails order={order} />
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
