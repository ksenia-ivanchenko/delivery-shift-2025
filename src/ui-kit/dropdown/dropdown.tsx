import { ReactNode, useEffect } from 'react';
import clsx from 'clsx';

import styles from './dropdown.module.scss';
import { Button } from '../button';
import { ArrowIcon } from 'ui-kit';
import { Option } from '../dropdown-list/dropdown-list';
import { DropdownList } from '../dropdown-list';
import { useDropdown } from 'hooks';

type DropdownProps = {
  icon?: ReactNode;
  options: Option[];
  defaultSelectedOption?: Option;
  onSelect: (option: any) => void;
  placeholder?: string;
  suggestedOptions?: Option[];
  label?: string;
  className?: string;
};

export const Dropdown = ({
  icon,
  options,
  defaultSelectedOption,
  onSelect,
  placeholder,
  suggestedOptions,
  label,
  className
}: DropdownProps) => {
  const dropdown = useDropdown(onSelect);

  useEffect(() => {
    if (defaultSelectedOption && dropdown.selectedOption === undefined) {
      dropdown.handleOptionClick(defaultSelectedOption);
    }
  }, [defaultSelectedOption, dropdown.selectedOption]);

  return (
    <div className={clsx(styles.dropdownContainer, className)} ref={dropdown.dropdownRef}>
      {label && <span className={styles.label}>{label}</span>}

      <div
        className={clsx(styles.selectBox, dropdown.isOpen && styles.open)}
        onClick={dropdown.toggleDropdown}
      >
        {icon && <div className={styles.icon}>{icon}</div>}
        <span
          className={clsx(styles.selectedOption, !dropdown.selectedOption && styles.placeholder)}
        >
          {dropdown.selectedOption ? dropdown.selectedOption.label : placeholder}
        </span>
        <ArrowIcon isOpen={dropdown.isOpen} />
      </div>

      {dropdown.isOpen ? (
        <DropdownList options={options} handleOptionClick={dropdown.handleOptionClick} />
      ) : (
        <div className={styles.suggestedOptions}>
          {suggestedOptions?.map((option, index) => (
            <Button
              key={index}
              type='button'
              styleType={{ variant: 'link', type: 'tertiary' }}
              onClick={() => dropdown.handleOptionClick(option)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
