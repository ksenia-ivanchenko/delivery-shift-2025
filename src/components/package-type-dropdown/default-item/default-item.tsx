import { ReactNode } from 'react';

import { Package } from 'api';
import styles from './default-item.module.scss';

type DefaultItemProps = {
  item: Package;
  icon: ReactNode;
  handleOptionClick: (option) => void;
};

export const DefaultItem = ({ item, icon, handleOptionClick }: DefaultItemProps) => {
  return (
    <div
      className={styles.card}
      onClick={() =>
        handleOptionClick({
          label: item.name,
          value: {
            length: item.length,
            width: item.width,
            height: item.height,
            weight: item.weight
          }
        })
      }
    >
      {icon}
      <div className={styles.container}>
        <h3 className={styles.name}>{item.name}</h3>
        <span className={styles.size}>
          {item.length}x{item.width}x{item.height} см
        </span>
      </div>
    </div>
  );
};
