import styles from './button.module.scss';
import clsx from 'clsx';
import React from 'react';
import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  styleType: {
    type: 'secondary' | 'primary' | 'tertiary';
    variant: 'contained' | 'text' | 'link';
  };
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, styleType, ...props }, ref) => (
    <button
      className={clsx(styles.button, styles[styleType.type], styles[styleType.variant])}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  )
);
