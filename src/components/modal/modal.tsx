import clsx from 'clsx';
import { memo, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.scss';
import { CloseIcon } from 'ui-kit';

const modalRoot = document.getElementById('modals');
type ModalProps = {
  title?: string;
  onClose: () => void;
  children: ReactNode;
  isOpen: boolean;
};
export const Modal = memo(({ title, onClose, children, isOpen }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      e.key === 'Escape' && onClose();
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return createPortal(
    <>
      <div className={clsx(styles.modal, isOpen && styles.modalOpen)}>
        <div className={styles.header}>
          <h3>{title}</h3>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
      <div className={clsx(styles.overlay, isOpen && styles.overlayOpen)} onClick={onClose} />
    </>,
    modalRoot as HTMLDivElement
  );
});
