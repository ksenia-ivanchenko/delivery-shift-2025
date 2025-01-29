import clsx from 'clsx';
import styles from './dropdown.module.scss';
import { ArrowIcon, PackageLetterIcon, PackageM, PackageS, PackageXS, Tabs } from 'ui-kit';
import { InputSize } from '../input-size';
import { useSelector } from 'store';
import { DefaultItem } from '../default-item';
import { useDropdown, useInputPackageSize } from 'hooks';
import { selectText } from 'helpers';

// не нашла в фигме все иконки :(
const Icons = {
  0: <PackageLetterIcon />,
  1: <PackageS />,
  2: <PackageM />,
  3: <PackageM />, //должно быть L
  4: <PackageXS /> //должна быть какая то тележка....
};

export const PackageTypeDropdown = ({ onSelect, placeholder }) => {
  const { packageTypes } = useSelector((state) => state.delivery);
  const {
    isOpen,
    selectedOption,
    dropdownRef,
    setSelectedOption,
    toggleDropdown,
    handleOptionClick
  } = useDropdown(onSelect);
  const { handleLengthInput, handleWidthInput, handleHeightInput, handleWeightInput } =
    useInputPackageSize(setSelectedOption, onSelect);

  const tabs = [
    {
      id: 'default',
      label: 'Примерные',
      content: (
        <div className={styles.content}>
          {packageTypes.map((item) => (
            <DefaultItem
              handleOptionClick={handleOptionClick}
              key={item.id}
              item={item}
              icon={Icons[Number(item.id) - 1]}
            />
          ))}
        </div>
      )
    },
    {
      id: 'input',
      label: 'Точные',
      content: (
        <div className={styles.content}>
          <InputSize param='Длина' onChange={handleLengthInput} />
          <InputSize param='Ширина' onChange={handleWidthInput} />
          <InputSize param='Высота' onChange={handleHeightInput} />
          <InputSize param='Вес' onChange={handleWeightInput} />
        </div>
      )
    }
  ];

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <span className={styles.label}>Размер посылки</span>
      <div className={clsx(styles.selectBox, isOpen && styles.open)} onClick={toggleDropdown}>
        <span className={clsx(styles.selectedOption, !selectedOption && styles.placeholder)}>
          {selectText(selectedOption, placeholder)}
        </span>
        <ArrowIcon isOpen={isOpen} />
      </div>

      {isOpen && (
        <div className={styles.container}>
          <Tabs tabs={tabs} />
        </div>
      )}
    </div>
  );
};
