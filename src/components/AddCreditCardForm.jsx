import React, { useState } from 'react';

function AddCreditCardForm({ onAddCreditCard }) {
  const [bankName, setBankName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [creditLimit, setCreditLimit] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [cutOffDate, setCutOffDate] = useState('');
  const [paymentDate, setPaymentDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      bankName,
      cardNumber,
      creditLimit: parseFloat(creditLimit),
      interestRate: parseFloat(interestRate),
      cutOffDate,
      paymentDate,
    };
    onAddCreditCard(newCard);
    setBankName('');
    setCardNumber('');
    setCreditLimit('');
    setInterestRate('');
    setCutOffDate('');
    setPaymentDate('');
  };

  return (
    <div>
      <h2>Agregar Nueva Tarjeta de Crédito</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bankName">Banco:</label>
          <input
            type="text"
            id="bankName"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cardNumber">Número de Tarjeta:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="creditLimit">Límite de Crédito:</label>
          <input
            type="number"
            id="creditLimit"
            value={creditLimit}
            onChange={(e) => setCreditLimit(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="interestRate">Tasa de Interés (%):</label>
          <input
            type="number"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cutOffDate">Fecha de Corte:</label>
          <input
            type="date"
            id="cutOffDate"
            value={cutOffDate}
            onChange={(e) => setCutOffDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="paymentDate">Fecha de Pago:</label>
          <input
            type="date"
            id="paymentDate"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
          />
        </div>
        <button type="submit">Agregar Tarjeta</button>
      </form>
    </div>
  );
}

export default AddCreditCardForm;