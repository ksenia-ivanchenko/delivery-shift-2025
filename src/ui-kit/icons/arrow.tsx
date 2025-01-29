import { ComponentProps } from 'react';
import clsx from 'clsx';

import styles from './icons.module.scss';

interface ArrowIconProps extends ComponentProps<'svg'> {
  isOpen: boolean;
}

export const ArrowIcon = ({ isOpen, ...props }: ArrowIconProps) => (
  <svg
    width='14'
    height='8'
    viewBox='0 0 14 8'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={clsx(styles.arrow, isOpen && styles.arrowDown)}
    {...props}
  >
    <path
      d='M12.8334 1.49998L7.70715 6.62621C7.31662 7.01673 6.68346 7.01673 6.29293 6.62621L1.16671 1.49998'
      stroke='#97A1AF'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
