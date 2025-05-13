import React from 'react';
import BudgetSetupForm from '../components/BudgetSetupForm';
import BudgetOverview from '../components/BudgetOverview';

function BudgetPage({ budget, onBudgetUpdate, totalExpenses, estimatedFixedExpenses }) {
  return (
    <div>
      <h2>Presupuesto</h2>
      <BudgetSetupForm onBudgetUpdate={onBudgetUpdate} />
      <BudgetOverview 
        budget={budget} 
        totalExpenses={totalExpenses}
        estimatedFixedExpenses={estimatedFixedExpenses}
      />
    </div>
  );
}

export default BudgetPage;