import React from 'react';

function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>Últimos Gastos</h2>
      {expenses.length === 0 ? (
        <p>No has registrado ningún gasto aún.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.description} - ${expense.amount} - {expense.date} ({expense.category})
              {expense.creditCardId && ` - Tarjeta: ...${expense.creditCardId.slice(-4)}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;