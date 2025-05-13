import React from 'react';
import styles from './CreditCardList.module.css';

function CreditCardList({ creditCards, onDeleteCard }) {
  const isPaymentDateNear = (paymentDate) => {
    if (!paymentDate) return false;
    const payment = new Date(paymentDate);
    const today = new Date();
    const sevenDaysLater = new Date();
    sevenDaysLater.setDate(today.getDate() + 7);
    return payment >= today && payment <= sevenDaysLater;
  };

  return (
    <div>
      <h2>Mis Tarjetas de Crédito</h2>
      {Array.isArray(creditCards) && creditCards.length === 0 ? (
        <p>No has agregado ninguna tarjeta de crédito aún.</p>
      ) : (
        <ul>
          {Array.isArray(creditCards) && creditCards.map((card, index) => (
            <li key={index} className={isPaymentDateNear(card.paymentDate) ? styles['payment-near'] : ''}>
              {card.bankName} - Últimos dígitos: {card.cardNumber.slice(-4)} - Límite: ${card.creditLimit}
              <br />
              Fecha de Corte: {card.cutOffDate || 'No definida'}
              <br />
              Fecha de Pago: {card.paymentDate || 'No definida'}
              {isPaymentDateNear(card.paymentDate) && (
                <span className={styles['payment-near-text']}>¡Pago Próximo!</span>
              )}
              <button onClick={() => onDeleteCard(card.cardNumber)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CreditCardList;