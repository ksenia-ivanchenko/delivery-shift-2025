import styles from './dropdown-list.module.scss';

export type Option = {
  label: string;
  value: any;
};

type DropdownListProps = {
  options: Option[];
  handleOptionClick: (option: Option) => void;
};

export const DropdownList = ({ options, handleOptionClick }: DropdownListProps) => (
  <ul className={styles.optionsList}>
    {options.map((option, index) => (
      <li key={index} className={styles.option} onClick={() => handleOptionClick(option)}>
        {option.label}
      </li>
    ))}
  </ul>
);
