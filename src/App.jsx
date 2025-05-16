import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreditCardsPage from './pages/CreditCardsPage';
import BudgetPage from './pages/BudgetPage';
import ExpensesPage from './pages/ExpensesPage';
import Navigation from './components/Navigation';
import expensesReducer from './components/expensesReducer';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [creditCards, setCreditCards] = useState([]);
  const [budget, setBudget] = useState({ total: 0 });
  const [expenses, dispatchExpenses] = useReducer(expensesReducer, []);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [estimatedFixedExpenses, setEstimatedFixedExpenses] = useState(0);

  const addCreditCard = (newCard) => {
    setCreditCards([...creditCards, newCard]);
  };

  const deleteCreditCard = (cardNumberToDelete) => {
    setCreditCards(creditCards.filter(card => card.cardNumber !== cardNumberToDelete));
  };

  const updateBudget = (newBudget) => {
    setBudget(newBudget);
  };

  const addExpense = (newExpense) => {
    dispatchExpenses({ type: 'ADD_EXPENSE', payload: { ...newExpense, id: uuidv4() } });
  };

  const deleteExpense = (expenseId) => {
    dispatchExpenses({ type: 'DELETE_EXPENSE', payload: expenseId });
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
        <Route path="/cards" element={<CreditCardsPage onAddCreditCard={addCreditCard} creditCards={creditCards} onDeleteCreditCard={deleteCreditCard} />}/>
        <Route path="/budget" element={<BudgetPage 
                budget={budget} 
                onBudgetUpdate={updateBudget} 
                totalExpenses={totalExpenses}
                estimatedFixedExpenses={estimatedFixedExpenses}
              />} />
        <Route path="/expenses" element={<ExpensesPage onAddExpense={addExpense} expenses={expenses} creditCards={creditCards} onDeleteExpense={deleteExpense}/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;