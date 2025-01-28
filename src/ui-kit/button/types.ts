import { ReactNode } from 'react';

export type ButtonStyleProps = {
  type: 'secondary' | 'primary' | 'tertiary';
  variant: 'contained' | 'text' | 'link';
};

export interface ButtonProps {
  children: ReactNode;
  htmlType: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  style: ButtonStyleProps;
  disabled?: boolean;
}
