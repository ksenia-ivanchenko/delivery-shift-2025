import { FC, useEffect, useRef, useState } from 'react';
import { DropdownProps } from './types';
import styles from './dropdown.module.scss';
import { Button } from '../button';
import { Arrow } from './arrow';
import clsx from 'clsx';
import { Option } from '../dropdown-list/types';
import { DropdownList } from '../dropdown-list';

export const Dropdown: FC<DropdownProps> = ({
  icon,
  options,
  defaultSelectedOption,
  onSelect,
  placeholder,
  suggestedOptions,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultSelectedOption);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      {label && <span className={styles.label}>{label}</span>}

      <div className={clsx(styles.selectBox, isOpen && styles.open)} onClick={toggleDropdown}>
        {icon && <div className={styles.icon}>{icon}</div>}
        <span className={clsx(styles.selectedOption, !selectedOption && styles.placeholder)}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <Arrow isOpen={isOpen} />
      </div>

      {isOpen ? (
        <DropdownList
          options={options}
          handleOptionClick={handleOptionClick}
        />
      ) : (
        <div className={styles.suggestedOptions}>
          {suggestedOptions.map((option, index) => (
            <Button
              key={index}
              htmlType='button'
              style={{ variant: 'link', type: 'tertiary' }}
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
