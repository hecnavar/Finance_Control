import React from 'react';
import CreditCardList from '../components/CreditCardList';
import AddCreditCardForm from '../components/AddCreditCardForm';
import styles from './CreditCardsPage.module.css';

function CreditCardsPage({ onAddCreditCard, creditCards }) {
  return (
    <div className={styles.cardsContainer}>
      <h2>Gestión de Tarjetas de Crédito</h2>
      <AddCreditCardForm onAddCreditCard={onAddCreditCard} />
      <CreditCardList creditCards={creditCards} />
    </div>
  );
}

export default CreditCardsPage;