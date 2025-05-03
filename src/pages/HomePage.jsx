import React from 'react';
import CreditCardList from '../components/CreditCardList';
import BudgetOverview from '../components/BudgetOverview';
import ExpenseList from '../components/ExpenseList';
import AddCreditCardForm from '../components/AddCreditCardForm';

function HomePage({ addCreditCard, creditCards }) {
  return (
    <div>
      <h1>Panel Principal</h1>
      <BudgetOverview />
      <AddCreditCardForm onAddCreditCard={addCreditCard} />
      <CreditCardList creditCards={creditCards} />
      <ExpenseList />
    </div>
  );
}

export default HomePage;