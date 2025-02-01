import clsx from 'clsx';
import { useState, useRef, cloneElement } from 'react';

import styles from './tooltip.module.scss';

export const Tooltip = ({ children, text, position = 'top', trigger }) => {
  const [visible, setVisible] = useState(false);
  const tooltipRef = useRef(null);

  const handleShow = () => setVisible(true);
  const handleHide = () => setVisible(false);

  return (
    <div className={styles.wrapper}>
      {cloneElement(trigger, {
        onMouseEnter: handleShow,
        onMouseLeave: handleHide
      })}

      <div
        ref={tooltipRef}
        className={clsx(styles.tooltip, styles[position], visible && styles.visible)}
      >
        {children}
      </div>
    </div>
  );
};
