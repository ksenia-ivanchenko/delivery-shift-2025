import { useState } from 'react';
import styles from './checkbox.module.scss';

type CheckboxProps = {
  defaultChecked: boolean;
  onChange: (value: boolean) => void;
  label: string;
};
export const Checkbox = ({ defaultChecked, onChange, label }: CheckboxProps) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = () => {
    setChecked((prev) => {
      const newChecked = !prev;
      onChange(newChecked);
      return newChecked;
    });
  };
  return (
    <label className={styles.label}>
      <input type='checkbox' checked={checked} onChange={handleChange} className={styles.input} />
      <span className={styles.checkbox}>{label}</span>
    </label>
  );
};
