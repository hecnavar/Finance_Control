import React from 'react';
import CreditCardList from '../components/CreditCardList';
import BudgetOverview from '../components/BudgetOverview';
import ExpenseList from '../components/ExpenseList';
import AddCreditCardForm from '../components/AddCreditCardForm';
import BudgetSetupForm from '../components/BudgetSetupForm';

function HomePage({ addCreditCard, creditCards, budget, onBudgetUpdate }) {
  return (
    <div>
      <h1>Panel Principal</h1>
      <BudgetSetupForm onBudgetUpdate={onBudgetUpdate} />
      <BudgetOverview budget={budget} />
      <AddCreditCardForm onAddCreditCard={addCreditCard} />
      <CreditCardList creditCards={creditCards} />
      <ExpenseList />
    </div>
  );
}

export default HomePage;