import { useState } from 'react';

import { DeliveryType, Contacts, Address, Payer, CheckOrder, Success } from 'components';
import { AcceptIcon, Preloader, ProgressBar } from 'ui-kit';
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
              type='receiver'
              next={goToNextStep}
              prev={goToPreviousStep}
            />
          )
        };
      case 6:
        return {
          title: 'Оплата доставки',
          content: <Payer next={goToNextStep} prev={goToPreviousStep} defaultValue={order.payer} />
        };
      case 7:
        return {
          title: 'Проверка данных заказа',
          content: <CheckOrder next={goToNextStep} prev={goToPreviousStep} />
        };
      case 8:
        return {
          title: (
            <div className={styles.success}>
              <AcceptIcon />
              Заявка отправлена
            </div>
          ),
          content: <Success setCurrentStep={setCurrentStep} />
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
      {currentStep < 8 && <ProgressBar currentStep={currentStep} steps={7} />}
      {loading ? <Preloader /> : renderStep().content}
    </div>
  );
};
