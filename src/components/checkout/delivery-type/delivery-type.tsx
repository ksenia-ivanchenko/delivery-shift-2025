import { ReactNode } from 'react';

import { setDeliveryOption, useDispatch, useSelector } from 'store';
import { DeliveryOption } from 'api';
import { DELIVERY_ICONS } from 'constants';
import { getWorkdayLabel } from 'helpers';
import styles from './delivery-type.module.scss';

type DeliveryTypeItemProps = {
  option: DeliveryOption;
  icon: ReactNode;
  handleCardClick: () => void;
};

type DeliveryTypeProps = {
  handleCardClick: () => void;
};

const DeliveryTypeItem = ({ option, icon, handleCardClick }: DeliveryTypeItemProps) => {
  const dipatch = useDispatch();

  const onClick = () => {
    dipatch(setDeliveryOption(option));
    handleCardClick();
  };

  return (
    <li className={styles.card} onClick={onClick}>
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.textContainer}>
        <span className={styles.name}>{option.name}</span>
        <span className={styles.price}>{Math.floor(option.price / 100)} ₽</span>
        <span className={styles.days}>
          {option.days} {getWorkdayLabel(option.days)}
        </span>
      </div>
    </li>
  );
};

export const DeliveryType = ({ handleCardClick }: DeliveryTypeProps) => {
  const { deliveryOptions } = useSelector((state) => state.delivery);
  return (
    <div className={styles.content}>
      <ul className={styles.list}>
        {deliveryOptions.map((item) => (
          <DeliveryTypeItem
            handleCardClick={handleCardClick}
            key={item.id}
            option={item}
            icon={DELIVERY_ICONS[item.type]}
          />
        ))}
      </ul>
      <div className={styles.promoCard}>
        <span className={styles.promoTitle}>1 + 1 = 3</span>
        <span className={styles.description}>3-я доставка в подарок!</span>
        <div className={styles.gifts} />
      </div>
    </div>
  );
};
