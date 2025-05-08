import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreditCardsPage from './pages/CreditCardsPage';
import BudgetPage from './pages/BudgetPage';
import ExpensesPage from './pages/ExpensesPage';
import Navigation from './components/Navigation';

function App() {
  const [creditCards, setCreditCards] = useState([]);
  const [budget, setBudget] = useState({ total: 0 });
  const [expenses, setExpenses] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [estimatedFixedExpenses, setEstimatedFixedExpenses] = useState(0);

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
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage budget={budget} totalExpenses={totalExpenses} estimatedFixedExpenses={estimatedFixedExpenses} />} />
        <Route path="/cards" element={<CreditCardsPage onAddCreditCard={addCreditCard} creditCards={creditCards} />} />
        // src/App.js
        <Route path="/budget" element={<BudgetPage 
                budget={budget} 
                onBudgetUpdate={updateBudget} 
                totalExpenses={totalExpenses}
                estimatedFixedExpenses={estimatedFixedExpenses}
              />} />
        <Route path="/expenses" element={<ExpensesPage onAddExpense={addExpense} expenses={expenses} creditCards={creditCards} />} />
        {console.log("CreditCards en App.js para /expenses:", creditCards)}
      </Routes>
    </BrowserRouter>
  );
}

export default App;