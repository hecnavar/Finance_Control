import React, { useState } from 'react';
import CreditCardList from '../components/CreditCardList';
import AddCreditCardForm from '../components/AddCreditCardForm';
import Modal from '../components/Modal';
import Alert from '../components/Alert';

function CreditCardsPage({ onAddCreditCard, creditCards, onDeleteCreditCard }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const openModal = (cardNumber) => {
    setCardToDelete(cardNumber);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setCardToDelete(null);
    setIsModalOpen(false);
  };
  const handleAddCardSuccess = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleDeleteConfirmation = () => {
    if (cardToDelete) {
      onDeleteCreditCard(cardToDelete);
    }
    closeModal();
  };

  const handleAddCreditCardAndShowAlert = (values, reset) => {
    onAddCreditCard(values);
    reset();
    handleAddCardSuccess();
  };

  return (
    <div>
      <h2>Gestión de Tarjetas de Crédito</h2>
      <AddCreditCardForm onAddCreditCard={handleAddCreditCardAndShowAlert} />
      <CreditCardList creditCards={creditCards} onDeleteCard={openModal} />

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h3>Confirmar Eliminación</h3>
          <p>¿Estás seguro de que deseas eliminar la tarjeta con número: ...{cardToDelete?.slice(-4)}?</p>
          <button onClick={handleDeleteConfirmation}>Sí, Eliminar</button>
          <button onClick={closeModal}>Cancelar</button>
        </Modal>
      )}

      {showAlert && <Alert message="Tarjeta agregada correctamente" type="success" onClose={() => setShowAlert(false)} />}
    </div>
  );
}

export default CreditCardsPage;