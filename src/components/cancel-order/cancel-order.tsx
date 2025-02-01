import { Button, QuestionIcon } from 'ui-kit';
import styles from './cancel-order.module.scss';

export const CancelOrder = ({ closeModal, cancelOrder }) => (
  <div className={styles.content}>
    <QuestionIcon />
    <h2 className={styles.title}>Отменить заказ?</h2>
    <div className={styles.buttons}>
      <Button styleType={{ type: 'secondary', variant: 'contained' }} onClick={cancelOrder}>
        Отменить
      </Button>
      <Button styleType={{ type: 'primary', variant: 'contained' }} onClick={closeModal}>
        Не отменять
      </Button>
    </div>
  </div>
);
