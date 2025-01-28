import { ComponentProps, ReactNode } from 'react';
import styles from './auth-form.module.scss';
import { Button } from 'ui-kit';

interface AuthFormProps extends ComponentProps<'form'> {
  onSubmit: () => void;
  buttonText: ReactNode;
  title?: string;
  description?: string;
  valid: boolean;
}

export const AuthForm = ({
  onSubmit,
  children,
  title,
  description,
  buttonText,
  valid
}: AuthFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (valid) {
      onSubmit();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (valid && e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit} onKeyDown={handleKeyDown} className={styles.form}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      {children}
      <div className={styles.button}>
        <Button
          disabled={!valid}
          type='submit'
          styleType={{ type: 'primary', variant: 'contained' }}
        >
          {buttonText}
        </Button>
      </div>
    </form>
  );
};
