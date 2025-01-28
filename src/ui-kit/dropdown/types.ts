import { ReactNode } from 'react';
import { Option } from '../dropdown-list/types';

export type DropdownProps = {
  icon?: ReactNode;
  options: Option[];
  defaultSelectedOption?: Option;
  onSelect: (option: any) => void;
  placeholder?: string;
  suggestedOptions?: Option[];
  label?: string;
};

export type ArrowProps = {
  isOpen: boolean;
};
