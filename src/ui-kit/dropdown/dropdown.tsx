import { ReactNode, useEffect, useRef, useState } from 'react';
import styles from './dropdown.module.scss';
import { Button } from '../button';
import { ArrowIcon } from 'ui-kit';
import clsx from 'clsx';
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
};

export const Dropdown = ({
  icon,
  options,
  defaultSelectedOption,
  onSelect,
  placeholder,
  suggestedOptions,
  label
}: DropdownProps) => {
  const { isOpen, selectedOption, dropdownRef, toggleDropdown, handleOptionClick } =
    useDropdown(onSelect);

  useEffect(() => {
    if (defaultSelectedOption && selectedOption === undefined) {
      handleOptionClick(defaultSelectedOption);
    }
  }, [defaultSelectedOption, selectedOption]);

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      {label && <span className={styles.label}>{label}</span>}

      <div className={clsx(styles.selectBox, isOpen && styles.open)} onClick={toggleDropdown}>
        {icon && <div className={styles.icon}>{icon}</div>}
        <span className={clsx(styles.selectedOption, !selectedOption && styles.placeholder)}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ArrowIcon isOpen={isOpen} />
      </div>

      {isOpen ? (
        <DropdownList options={options} handleOptionClick={handleOptionClick} />
      ) : (
        <div className={styles.suggestedOptions}>
          {suggestedOptions.map((option, index) => (
            <Button
              key={index}
              type='button'
              styleType={{ variant: 'link', type: 'tertiary' }}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
