import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;