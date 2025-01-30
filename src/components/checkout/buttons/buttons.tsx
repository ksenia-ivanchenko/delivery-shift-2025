import { Button } from 'ui-kit';

import styles from './buttons.module.scss';

interface CheckoutButtonsProps {
  prev: () => void;
  disabled: boolean;
}

export const CheckoutButtons = ({ prev, disabled }: CheckoutButtonsProps) => (
  <div className={styles.buttons}>
    <Button type='button' onClick={prev} styleType={{ type: 'secondary', variant: 'contained' }}>
      Назад
    </Button>
    <Button type='submit' styleType={{ type: 'primary', variant: 'contained' }} disabled={disabled}>
      Продолжить
    </Button>
  </div>
);
