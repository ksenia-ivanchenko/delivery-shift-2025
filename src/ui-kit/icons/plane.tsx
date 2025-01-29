import { ComponentProps } from 'react';

export const PlaneIcon = ({ ...props }: ComponentProps<'svg'>) => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M7.55269 10.6689L9.41411 16.0529C9.76302 17.0621 11.1779 17.0958 11.5745 16.1044L16.9147 2.75597C17.2862 1.82736 16.3802 0.898486 15.4426 1.24671L1.75163 6.3316C0.751143 6.70319 0.748911 8.1175 1.74822 8.49224L7.55269 10.6689Z'
      stroke='#97A1AF'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
