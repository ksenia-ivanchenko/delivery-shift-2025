import { FC } from 'react';
import styles from './button.module.scss';
import clsx from 'clsx';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({ children, htmlType, onClick, style, disabled }) => (
  <button
    className={clsx(styles.button, {
      [styles.primary]: style.type === 'primary',
      [styles.secondary]: style.type === 'secondary',
      [styles.tertiary]: style.type === 'tertiary',
      [styles.contained]: style.variant === 'contained',
      [styles.text]: style.variant === 'text',
      [styles.link]: style.variant === 'link'
    })}
    onClick={onClick}
    type={htmlType}
    disabled={disabled}
  >
    <span style={{ position: 'relative' }}>{children}</span>
  </button>
);
