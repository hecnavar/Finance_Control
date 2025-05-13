import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

function Modal({ children, onClose }) {
  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;