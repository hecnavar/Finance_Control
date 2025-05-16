import React from 'react';
import Modal from './Modal';
import styles from './Alert.module.css';

function Alert({ message, type, onClose }) {
  const alertStyles = `${styles.alertContainer} ${styles[type] || ''}`;

  return (
    <Modal onClose={onClose}>
      <div className={alertStyles}>
        <h3>{type && type.toUpperCase()}</h3>
        <p>{message}</p>
        <button onClick={onClose}>Entendido</button>
      </div>
    </Modal>
  );
}

export default Alert;