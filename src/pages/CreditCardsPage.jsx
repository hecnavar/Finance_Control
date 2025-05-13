import React, { useState, useEffect } from 'react';
import CreditCardList from '../components/CreditCardList';
import AddCreditCardForm from '../components/AddCreditCardForm';
import Modal from '../components/Modal';

function CreditCardsPage({ onAddCreditCard, creditCards }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    console.log("Modal abierto (useEffect):", isModalOpen);
  }, [isModalOpen]);

  return (
    <div>
      <h2>Gestión de Tarjetas de Crédito</h2>
      <AddCreditCardForm onAddCreditCard={onAddCreditCard} />
      <CreditCardList creditCards={creditCards} />
      <button onClick={openModal} disabled={!isPageLoaded}>Mostrar Modal de Ejemplo</button>

      {isPageLoaded && isModalOpen && (
        <Modal onClose={closeModal}>
          <h3>Confirmar Acción</h3>
          <p>Este es un contenido de ejemplo del modal.</p>
          <button onClick={closeModal}>Entendido</button>
        </Modal>
      )}
    </div>
  );
}

export default CreditCardsPage;