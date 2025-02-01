import { EditIcon } from 'ui-kit';
import { createOrder, useDispatch, useSelector } from 'store';
import { Address, User } from 'api';
import { getWorkdayLabel } from 'helpers';
import { CheckoutButtons } from '../buttons';
import styles from './check-order.module.scss';
import { FormEvent } from 'react';

const CheckOrderCard = ({ param, fieldFirst, valueFirst, fieldSecond, valueSecond, edit }) => (
  <li className={styles.card}>
    <span className={styles.param}>{param}</span>
    <div className={styles.fieldContainer}>
      <span className={styles.field}>{fieldFirst}</span>
      <span className={styles.value}>{valueFirst}</span>
    </div>
    <div className={styles.fieldContainer}>
      <span className={styles.field}>{fieldSecond}</span>
      <span className={styles.value}>{valueSecond}</span>
    </div>
    <button className={styles.edit} type='button' onClick={edit}>
      <EditIcon />
    </button>
  </li>
);

export const CheckOrder = ({ prev, next, setStep, setEditing }) => {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const getFullName = (person: User) =>
    `${person.lastname} ${person.firstname} ${person.middlename ?? ''}`;

  const getFullAddress = (address: Address) => `ул. ${address.street}, д. ${address.house}`;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const orderRequestData = {
      ...order,
      sender: {
        ...order.sender,
        phone: order.sender.phone.replace(/[\+\s]/g, '').replace(/^7/, '8')
      },
      receiver: {
        ...order.receiver,
        phone: order.receiver.phone.replace(/[\+\s]/g, '').replace(/^7/, '8')
      }
    };
    dispatch(createOrder(orderRequestData));

    next();
  };

  return (
    <form className={styles.content} onSubmit={handleSubmit} id='check'>
      <ul className={styles.cardList}>
        <CheckOrderCard
          param='Получатель'
          fieldFirst='ФИО'
          fieldSecond='Телефон'
          valueFirst={getFullName(order.receiver)}
          valueSecond={order.receiver.phone}
          edit={() => {
            setStep(2);
            setEditing(true);
          }}
        />
        <CheckOrderCard
          param='Отправитель'
          fieldFirst='ФИО'
          fieldSecond='Телефон'
          valueFirst={getFullName(order.sender)}
          valueSecond={order.sender.phone}
          edit={() => {
            setStep(3);
            setEditing(true);
          }}
        />
        <CheckOrderCard
          param='Откуда забрать'
          fieldFirst='Адрес'
          fieldSecond='Заметка'
          valueFirst={getFullAddress(order.senderAddress)}
          valueSecond={order.senderAddress.comment}
          edit={() => {
            setStep(4);
            setEditing(true);
          }}
        />
        <CheckOrderCard
          param='Куда доставить'
          fieldFirst='Адрес'
          fieldSecond='Заметка'
          valueFirst={getFullAddress(order.receiverAddress)}
          valueSecond={order.receiverAddress.comment}
          edit={() => {
            setStep(5);
            setEditing(true);
          }}
        />
      </ul>
      <div className={styles.info}>
        <div className={styles.price}>
          <span>Итого:</span> {Math.floor(order.option.price / 100)}₽
        </div>
        <span className={styles.deliveryOption}>Тариф: {order.option.name}</span>
        <span className={styles.deliveryOption}>Срок: {getWorkdayLabel(order.option.days)} </span>
      </div>
      <CheckoutButtons prev={prev} disabled={false} />
    </form>
  );
};
