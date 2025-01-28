import { DropdownListProps } from './types';
import styles from './dropdown-list.module.scss';
import { FC } from 'react';

export const DropdownList: FC<DropdownListProps> = ({
  options,
  handleOptionClick,
}) => {
  return (
    <ul className={styles.optionsList}>
      {options.map((option, index) => (
        <li key={index} className={styles.option} onClick={() => handleOptionClick(option)}>
          {option.label}
        </li>
      ))}
    </ul>
  );
};
