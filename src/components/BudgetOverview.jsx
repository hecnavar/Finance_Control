import React from 'react';

function BudgetOverview({ budget, totalExpenses }) {
  const remainingBudget = budget.total - totalExpenses;

  return (
    <div>
      <h2>Resumen del Presupuesto</h2>
      <p>Presupuesto Total Mensual: ${budget.total}</p>
      <p>Total Gastado: ${totalExpenses}</p>
      <p>Presupuesto Restante: ${remainingBudget >= 0 ? `$${remainingBudget}` : `-$${Math.abs(remainingBudget)}`}</p>
    </div>
  );
}

export default BudgetOverview;