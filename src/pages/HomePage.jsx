import React from 'react';
import CreditCardList from '../components/CreditCardList';
import BudgetOverview from '../components/BudgetOverview';
import ExpenseList from '../components/ExpenseList';
import AddCreditCardForm from '../components/AddCreditCardForm';
import BudgetSetupForm from '../components/BudgetSetupForm';
import AddExpenseForm from '../components/AddExpenseForm';

function HomePage({ addCreditCard, creditCards, budget, onBudgetUpdate, onAddExpense, expenses, totalExpenses, estimatedFixedExpenses }) {
  return (
    <div>
      <h1>Panel Principal</h1>
      <BudgetSetupForm onBudgetUpdate={onBudgetUpdate} />
      <BudgetOverview budget={budget} totalExpenses={totalExpenses} estimatedFixedExpenses={estimatedFixedExpenses} />
      <AddCreditCardForm onAddCreditCard={addCreditCard} />
      <AddExpenseForm onAddExpense={onAddExpense} creditCards={creditCards} />
      <CreditCardList creditCards={creditCards} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default HomePage;