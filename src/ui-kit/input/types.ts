import { ComponentProps, ReactNode } from 'react';

export interface InputProps extends ComponentProps<'input'> {
  error?: string;
  id?: string;
  label?: string;
  hintMesage?: string;
}
