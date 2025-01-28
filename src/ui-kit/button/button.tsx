import { FC } from 'react';
import styles from './button.module.scss';
import clsx from 'clsx';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({ children, styleType, ...props }) => (
  <button
    className={clsx(styles.button, {
      [styles.primary]: styleType.type === 'primary',
      [styles.secondary]: styleType.type === 'secondary',
      [styles.tertiary]: styleType.type === 'tertiary',
      [styles.contained]: styleType.variant === 'contained',
      [styles.text]: styleType.variant === 'text',
      [styles.link]: styleType.variant === 'link'
    })}
    {...props}
  >
    <span style={{ position: 'relative' }}>{children}</span>
  </button>
);
