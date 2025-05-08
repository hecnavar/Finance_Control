import React from 'react';
import BudgetOverview from '../components/BudgetOverview';

function HomePage({ budget, totalExpenses, estimatedFixedExpenses }) {
  return (
    <div>
      <h1>Panel Principal</h1>
      <BudgetOverview budget={budget} totalExpenses={totalExpenses} estimatedFixedExpenses={estimatedFixedExpenses} />
    </div>
  );
}

export default HomePage;