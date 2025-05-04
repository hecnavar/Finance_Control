// src/App.js
import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';

function App() {
  const [creditCards, setCreditCards] = useState([]);
  const [budget, setBudget] = useState({ total: 0 });
  const [expenses, setExpenses] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [estimatedFixedExpenses, setEstimatedFixedExpenses] = useState(0); // Nuevo estado

  const addCreditCard = (newCard) => {
    setCreditCards([...creditCards, newCard]);
  };

  const updateBudget = (newBudget) => {
    setBudget(newBudget);
  };

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const calculateTotalExpenses = (expensesList) => {
    return expensesList.reduce((sum, expense) => sum + expense.amount, 0);
  };

  const calculateEstimatedFixedExpenses = (expensesList) => {
    let totalFixed = 0;
    expensesList.forEach(expense => {
      if (expense.isFixed && expense.amount && expense.frequency) {
        switch (expense.frequency) {
          case 'weekly':
            totalFixed += expense.amount * (52 / 12);
            break;
          case 'biweekly':
            totalFixed += expense.amount * (26 / 12);
            break;
          case 'monthly':
            totalFixed += expense.amount;
            break;
          case 'bimonthly':
              totalFixed += expense.amount / 2;
              break;
          default:
            break;
        }
      }
    });
    return totalFixed;
  };

  useEffect(() => {
    setTotalExpenses(calculateTotalExpenses(expenses));
    setEstimatedFixedExpenses(calculateEstimatedFixedExpenses(expenses));
  }, [expenses]);

  return (
    <div>
      <HomePage
        addCreditCard={addCreditCard}
        creditCards={creditCards}
        budget={budget}
        onBudgetUpdate={updateBudget}
        expenses={expenses}
        onAddExpense={addExpense}
        totalExpenses={totalExpenses}
        estimatedFixedExpenses={estimatedFixedExpenses}
      />
    </div>
  );
}

export default App;