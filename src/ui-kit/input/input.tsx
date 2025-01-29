import clsx from 'clsx';
import React, { ComponentProps } from 'react';

import styles from './input.module.scss';

interface InputProps extends ComponentProps<'input'> {
  error?: string;
  id?: string;
  label?: string;
  hintMesage?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, value, id, label, hintMesage, ...props }, ref) => (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        className={clsx(styles.input, {
          [styles.invalid]: error
        })}
        value={value}
        ref={ref}
        id={id}
        {...props}
      />
      {hintMesage && !error && !value && <span className={styles.hint}>{hintMesage}</span>}

      <span className={styles.error} style={{ visibility: error ? 'visible' : 'hidden' }}>
        {error}
      </span>
    </div>
  )
);
