import React from 'react';

function BudgetOverview({ budget }) {
  return (
    <div>
      <h2>Resumen del Presupuesto</h2>
      <p>Presupuesto Total Mensual: ${budget.total}</p>
    </div>
  );
}

export default BudgetOverview;