import styles from './input.module.scss';
import { InputProps } from './types';
import clsx from 'clsx';
import React from 'react';

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
