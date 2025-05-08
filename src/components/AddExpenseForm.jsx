import React, { useState } from 'react';

function AddExpenseForm({ onAddExpense, creditCards }) {
  console.log("AddExpenseForm se ha renderizado. Prop creditCards:", creditCards);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [creditCardId, setCreditCardId] = useState('');
  const [isFixed, setIsFixed] = useState(false);
  const [frequency, setFrequency] = useState('monthly');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newExpense = {
      description,
      amount: parseFloat(amount) || 0,
      category,
      date,
      creditCardId,
      isFixed,
      frequency: isFixed ? frequency : null,
    };
    onAddExpense(newExpense);
    setDescription('');
    setAmount('');
    setCategory('');
    setDate('');
    setCreditCardId('');
    setIsFixed(false);
    setFrequency('monthly');
  };

  return (
    <div>
      <h2>Registrar Nuevo Gasto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Descripción:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Monto:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Categoría:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Seleccionar categoría</option>
            <option value="alimentacion">Alimentación</option>
            <option value="transporte">Transporte</option>
            <option value="entretenimiento">Entretenimiento</option>
            <option value="servicios">Servicios</option>
          </select>
        </div>
        <div>
          <label htmlFor="date">Fecha:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        {Array.isArray(creditCards) && creditCards.length > 0 && (
          <div>
            <label htmlFor="creditCard">Tarjeta de Crédito (Opcional):</label>
            <select
              id="creditCard"
              value={creditCardId}
              onChange={(e) => setCreditCardId(e.target.value)}
            >
              <option value="">Ninguna</option>
              {creditCards.map((card) => (
                <option key={card.cardNumber} value={card.cardNumber}>
                  {card.bankName} - Últimos: {card.cardNumber.slice(-4)}
                </option>
              ))}
            </select>
          </div>
        )}
        <div>
          <label htmlFor="isFixed">Gasto Fijo:</label>
          <input
            type="checkbox"
            id="isFixed"
            checked={isFixed}
            onChange={(e) => setIsFixed(e.target.checked)}
          />
        </div>
        {isFixed && (
          <div>
            <label htmlFor="frequency">Frecuencia:</label>
            <select
              id="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            >
              <option value="monthly">Mensual</option>
              <option value="weekly">Semanal</option>
              <option value="biweekly">Quincenal</option>
              <option value="bimonthly">Bimensual</option>
            </select>
          </div>
        )}
        <button type="submit">Registrar Gasto</button>
      </form>
    </div>
  );
}

export default AddExpenseForm;