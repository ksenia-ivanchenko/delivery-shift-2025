import { BoxIcon, QRCode } from 'ui-kit';
import styles from './main-page.module.scss';

export const MainPage = () => {
  return (
    <main className={styles.content}>
      <div className={styles.description}>
        <h1 className={styles.title}>Мы доставим ваш заказ</h1>
        <p className={styles.text}>
          Отправляйте посылки <br /> в приложении Шифт Delivery
        </p>
        <div className={styles.qrContainer}>
          <BoxIcon width={64} height={64} />
          <QRCode width={64} height={64} />
          <p className={styles.qrText}>Наведите камеру телефона на QR‑код</p>
        </div>
      </div>
    </main>
  );
};
