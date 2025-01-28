import styles from './button.module.scss';
import clsx from 'clsx';
import { ButtonProps } from './types';
import React from 'react';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, styleType, ...props }, ref) => (
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
      ref={ref}
    >
      <span style={{ position: 'relative' }}>{children}</span>
    </button>
  )
);
