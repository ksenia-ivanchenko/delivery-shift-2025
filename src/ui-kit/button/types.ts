import { ComponentProps, ReactNode } from 'react';

export type ButtonStyleProps = {
  type: 'secondary' | 'primary' | 'tertiary';
  variant: 'contained' | 'text' | 'link';
};

export interface ButtonProps extends ComponentProps<'button'> {
  styleType: ButtonStyleProps;
}
