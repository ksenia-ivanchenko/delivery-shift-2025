import { useState } from 'react';

import { DeliveryType, Contacts, Address } from 'components';
import { Preloader, ProgressBar } from 'ui-kit';
import { useSelector } from 'store';
import styles from './checkout-page.module.scss';

export const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { loading } = useSelector((state) => state.delivery);
  const order = useSelector((state) => state.order);

  const goToNextStep = () => setCurrentStep((prev) => prev + 1);
  const goToPreviousStep = () => setCurrentStep((prev) => prev - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return {
          title: 'Способ отправки',
          content: <DeliveryType handleCardClick={goToNextStep} />
        };
      case 2:
        return {
          title: 'Получатель',
          content: (
            <Contacts
              defaultValues={order.receiver}
              type='receiver'
              next={goToNextStep}
              prev={goToPreviousStep}
            />
          )
        };
      case 3:
        return {
          title: 'Отправитель',
          content: (
            <Contacts
              defaultValues={order.sender}
              type='sender'
              next={goToNextStep}
              prev={goToPreviousStep}
            />
          )
        };
      case 4:
        return {
          title: 'Откуда забрать',
          content: (
            <Address
              defaultValues={order.senderAddress}
              type='sender'
              next={goToNextStep}
              prev={goToPreviousStep}
            />
          )
        };
      case 5:
        return {
          title: 'Куда доставить',
          content: (
            <Address
              defaultValues={order.receiverAddress}
              type='sender'
              next={goToNextStep}
              prev={goToPreviousStep}
            />
          )
        };
      case 6:
        return {
          title: 'Оплата доставки',
          content: <>6</>
        };
      case 7:
        return {
          title: 'Проверка данных заказа',
          content: <>7</>
        };
      default:
        return {
          title: 'Способ отправки',
          content: <DeliveryType handleCardClick={goToNextStep} />
        };
    }
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>{renderStep().title}</h2>
      <ProgressBar currentStep={currentStep} steps={7} />
      {loading ? <Preloader /> : renderStep().content}
    </div>
  );
};
