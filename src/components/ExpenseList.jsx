import React from 'react';

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div>
      <h2>Últimos Gastos</h2>
      {Array.isArray(expenses) && expenses.length === 0 ? (
        <p>No has registrado ningún gasto aún.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.description} - ${expense.amount} - {expense.date} ({expense.category})
              {expense.creditCardId && ` - Tarjeta: ...${expense.creditCardId.slice(-4)}`}
              {expense.isFixed && (
                <span style={{ marginLeft: '10px', fontWeight: 'bold', color: 'green' }}>
                  [Fijo{expense.frequency && ` (${expense.frequency})`}]
                </span>
              )}
              <button onClick={() => onDeleteExpense(expense.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;