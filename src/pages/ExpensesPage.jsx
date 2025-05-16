import React from 'react';
import AddExpenseForm from '../components/AddExpenseForm';
import ExpenseList from '../components/ExpenseList';
import { useLocation } from 'react-router-dom';
import styles from './ExpensesPage.module.css';

function ExpensesPage({ onAddExpense, expenses, creditCards, onDeleteExpense }) {
  const location = useLocation();
  console.log("ExpensesPage se ha renderizado. Location:", location, "Props:", { onAddExpense, expenses, creditCards, onDeleteExpense });
  return (
    <div className={styles.expensesPageLayout}>
      <h2 className={styles.pageTitle}>Control de Gastos</h2>
      <div className={styles.contentContainer}>
        <div className={styles.formSection}>
          <AddExpenseForm onAddExpense={onAddExpense} creditCards={creditCards} />
        </div>
        <div className={styles.listSection}>
          <h3>Lista de Gastos</h3>
          <ExpenseList expenses={expenses} onDeleteExpense={onDeleteExpense} />
        </div>
      </div>
    </div>
  );
}

export default ExpensesPage