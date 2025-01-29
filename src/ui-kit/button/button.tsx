import clsx from 'clsx';
import React, { ComponentProps } from 'react';
import styles from './button.module.scss';

interface ButtonProps extends ComponentProps<'button'> {
  styleType: {
    type: 'secondary' | 'primary' | 'tertiary';
    variant: 'contained' | 'text' | 'link';
  };
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, styleType, className, ...props }, ref) => (
    <button
      className={clsx(styles.button, styles[styleType.type], styles[styleType.variant], className)}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  )
);
