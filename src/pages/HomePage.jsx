import React from 'react';
import CreditCardList from '../components/CreditCardList';
import BudgetOverview from '../components/BudgetOverview';
import ExpenseList from '../components/ExpenseList';

function HomePage() {
  return (
    <div>
      <h1>Panel Principal</h1>
      <BudgetOverview />
      <CreditCardList />
      <ExpenseList />
    </div>
  );
}

export default HomePage;