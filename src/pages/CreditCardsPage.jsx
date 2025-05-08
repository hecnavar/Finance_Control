import React from 'react';
import CreditCardList from '../components/CreditCardList';
import AddCreditCardForm from '../components/AddCreditCardForm';

function CreditCardsPage({ onAddCreditCard, creditCards }) {
  return (
    <div>
      <h2>Gestión de Tarjetas de Crédito</h2>
      <AddCreditCardForm onAddCreditCard={onAddCreditCard} />
      <CreditCardList creditCards={creditCards} />
    </div>
  );
}

export default CreditCardsPage;