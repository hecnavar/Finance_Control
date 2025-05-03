import React from 'react';

function CreditCardList({ creditCards }) {
  return (
    <div>
      <h2>Mis Tarjetas de Crédito</h2>
      {creditCards.length === 0 ? (
        <p>No has agregado ninguna tarjeta de crédito aún.</p>
      ) : (
        <ul>
          {creditCards.map((card, index) => (
            <li key={index}>
              {card.bankName} - Últimos dígitos: {card.cardNumber.slice(-4)} - Límite: ${card.creditLimit}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CreditCardList;