import { ComponentProps } from 'react';

import { Input } from 'ui-kit';
import styles from './input-size.module.scss';

interface InputSizeProps extends ComponentProps<'input'> {
  param: 'Длина' | 'Ширина' | 'Высота' | 'Вес';
}

export const InputSize = ({ param, ...props }: InputSizeProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.param}>{param}</span>
      <Input placeholder={param === 'Вес' ? 'кг' : 'см'} {...props} />
    </div>
  );
};
