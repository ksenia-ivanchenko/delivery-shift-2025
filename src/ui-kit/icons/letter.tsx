import { ComponentProps } from 'react';

export const LetterIcon = ({ ...props }: ComponentProps<'svg'>) => (
  <svg
    width='18'
    height='14'
    viewBox='0 0 18 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M2.90625 2.62435L8.46637 6.61623C8.78741 6.84672 9.21259 6.84672 9.53363 6.61623L15.0938 2.62435M3.375 12.8327H14.625C15.6605 12.8327 16.5 11.9621 16.5 10.8882V3.11046C16.5 2.03657 15.6605 1.16602 14.625 1.16602H3.375C2.33947 1.16602 1.5 2.03657 1.5 3.11046V10.8882C1.5 11.9621 2.33947 12.8327 3.375 12.8327Z'
      stroke='#97A1AF'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
