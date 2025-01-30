import { useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';

import { Button, Dropdown, LocationIcon, PlaneIcon } from 'ui-kit';
import {
  calculateDelivery,
  setReceiverPoint,
  setSenderPoint,
  useDispatch,
  useSelector
} from 'store';
import { PackageTypeDropdown } from 'components';
import { hasZeroValue } from 'helpers';
import { useSelectCalcParams } from 'hooks';
import styles from './calculator.module.scss';

export const Calculator = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { points } = useSelector((state) => state.delivery);
  const { handleSelectSender, handleSelectReceiver, handleSelectPackage, calcParams } =
    useSelectCalcParams();
  const pointsOptions = points.map((point) => ({
    label: point.name,
    value: point
  }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(calculateDelivery(calcParams));
    dispatch(setReceiverPoint(calcParams.receiverPoint));
    dispatch(setSenderPoint(calcParams.senderPoint));

    navigate('/checkout');
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit} id='calculator'>
      <h2 className={styles.title}>Рассчитать доставку</h2>
      <Dropdown
        label='Город отправки'
        options={pointsOptions}
        onSelect={handleSelectSender}
        defaultSelectedOption={pointsOptions[0]}
        suggestedOptions={pointsOptions.slice(-3)}
        icon={<LocationIcon />}
      />
      <Dropdown
        label='Город назначения'
        options={pointsOptions}
        onSelect={handleSelectReceiver}
        defaultSelectedOption={pointsOptions[1]}
        suggestedOptions={pointsOptions.slice(3, 6)}
        icon={<PlaneIcon />}
      />
      <PackageTypeDropdown onSelect={handleSelectPackage} placeholder='Не выбран' />
      <Button
        disabled={hasZeroValue(calcParams)}
        type='submit'
        styleType={{ type: 'primary', variant: 'contained' }}
      >
        Рассчитать
      </Button>
    </form>
  );
};
