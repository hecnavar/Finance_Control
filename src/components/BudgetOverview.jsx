import React from 'react';

function BudgetOverview({ budget, totalExpenses, estimatedFixedExpenses }) {
  const remainingBudget = budget.total - totalExpenses - estimatedFixedExpenses;
  return (
    <div>
      <h2>Resumen del Presupuesto</h2>
      <p>Presupuesto Total Mensual: ${budget.total}</p>
      <p>Total Gastado (Variable): ${totalExpenses}</p>
      <p>Gastos Fijos Estimados (Mensual): ${estimatedFixedExpenses.toFixed(2)}</p>
      <p>Presupuesto Restante Estimado: ${remainingBudget >= 0 ? `$${remainingBudget.toFixed(2)}` : `-$${Math.abs(remainingBudget).toFixed(2)}`}</p>
    </div>
  );
}

export default BudgetOverview;