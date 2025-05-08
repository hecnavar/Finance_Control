import React from 'react';
import AddExpenseForm from '../components/AddExpenseForm';
import ExpenseList from '../components/ExpenseList';
import { useLocation } from 'react-router-dom';

function ExpensesPage(props) {
  const location = useLocation();
  console.log("ExpensesPage se ha renderizado. Location:", location, "Props:", props);
  return (
    <div>
      <h2>Control de Gastos</h2>
      <AddExpenseForm onAddExpense={props.onAddExpense} creditCards={props.creditCards} />
      <ExpenseList expenses={props.expenses} />
    </div>
  );
}

export default ExpensesPage;