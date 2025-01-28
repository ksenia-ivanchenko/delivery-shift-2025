import { ComponentProps, ReactNode } from 'react';

export interface InputProps extends ComponentProps<'input'> {
  // placeholder: string;
  error?: string;
  // inputType?: string;
  // value?: string | number;
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  // disabled?: boolean;
  id?: string;
  label?: string;
  hintMesage?: string;
  // ref?: ReactNode;
}
