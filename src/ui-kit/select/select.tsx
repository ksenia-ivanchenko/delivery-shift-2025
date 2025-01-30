import { useEffect, useState } from 'react';
import styles from './select.module.scss';

type Option = {
  label: string;
  value: any;
};
interface SelectProps {
  options: Option[];
  selectedValue: Option;
  onChange: (value: string) => void;
}

export const Select = ({ options, selectedValue, onChange }: SelectProps) => {
  const [selected, setSelected] = useState(selectedValue.value);
  const handleRadioChange = (value: string) => {
    onChange(value);
  };

  return (
    <div className={styles.options}>
      {options.map((option) => (
        <label key={option.value} className={styles.option}>
          <input
            className={styles.input}
            type='radio'
            value={option.value}
            checked={selected === option.value}
            onChange={() => {
              setSelected(option.value);
              handleRadioChange(option.value);
            }}
          />
          <span className={styles.radio}>{option.label}</span>
        </label>
      ))}
    </div>
  );
};
