import React, { useState } from 'react';
import CreditCardList from '../components/CreditCardList';
import AddCreditCardForm from '../components/AddCreditCardForm';
import Modal from '../components/Modal';

function CreditCardsPage({ onAddCreditCard, creditCards, onDeleteCreditCard }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);

  const openModal = (cardNumber) => {
    setCardToDelete(cardNumber);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setCardToDelete(null);
    setIsModalOpen(false);
  };

  const handleDeleteConfirmation = () => {
    if (cardToDelete) {
      onDeleteCreditCard(cardToDelete);
    }
    closeModal();
  };

  return (
    <div>
      <h2>Gestión de Tarjetas de Crédito</h2>
      <AddCreditCardForm onAddCreditCard={onAddCreditCard} />
      <CreditCardList creditCards={creditCards} onDeleteCard={openModal} />

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h3>Confirmar Eliminación</h3>
          <p>¿Estás seguro de que deseas eliminar la tarjeta con número: ...{cardToDelete?.slice(-4)}?</p>
          <button onClick={handleDeleteConfirmation}>Sí, Eliminar</button>
          <button onClick={closeModal}>Cancelar</button>
        </Modal>
      )}
    </div>
  );
}

export default CreditCardsPage;