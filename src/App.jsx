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
  const [creditCards, setCreditCards] = useState(() => {
    const storedCards = localStorage.getItem('creditCards');
    try {
        const parsedCards = storedCards ? JSON.parse(storedCards) : [];
        return Array.isArray(parsedCards) ? parsedCards : [];
    } catch (error) {
        console.error("Error parsing creditCards from localStorage:", error);
        return [];
    }
  });

  const [budget, setBudget] = useState(() => {
    const storedBudget = localStorage.getItem('budget');
    try {
        const parsedBudget = storedBudget ? JSON.parse(storedBudget) : { total: 0 };
        return typeof parsedBudget === 'object' && parsedBudget !== null ? parsedBudget : { total: 0 };
    } catch (error) {
        console.error("Error parsing budget from localStorage:", error);
        return { total: 0 };
    }
  });

  const [expenses, dispatchExpenses] = useReducer(expensesReducer, (() => {
    const storedExpenses = localStorage.getItem('expenses');
    try {
      const parsedExpenses = storedExpenses ? JSON.parse(storedExpenses) : [];
      return Array.isArray(parsedExpenses) ? parsedExpenses : [];
    } catch (error) {
      console.error("Error parsing expenses from localStorage:", error);
      return [];
    }
  })());

  const [totalExpenses, setTotalExpenses] = useState(0);
  const [estimatedFixedExpenses, setEstimatedFixedExpenses] = useState(0);

  const addCreditCard = (newCard) => {
    setCreditCards(prevCards => [...prevCards, { ...newCard, id: uuidv4() }]);
  };

  const deleteCreditCard = (cardIdToDelete) => {
      setCreditCards(prevCards => prevCards.filter(card => card.id !== cardIdToDelete));
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
    return expensesList
        .filter(expense => !expense.isFixed)
        .reduce((sum, expense) => sum + (parseFloat(expense.amount) || 0), 0);
  };

  const calculateEstimatedFixedExpenses = (expensesList) => {
    let totalFixed = 0;
    expensesList.forEach(expense => {
      const amount = parseFloat(expense.amount) || 0;
      if (expense.isFixed && amount && expense.frequency) {
        switch (expense.frequency) {
          case 'weekly':
            totalFixed += amount * (52 / 12);
            break;
          case 'biweekly':
            totalFixed += amount * (26 / 12);
            break;
          case 'monthly':
            totalFixed += amount;
            break;
          case 'bimonthly':
            totalFixed += amount / 2;
            break;
          default:
            break;
        }
      }
    });
    return totalFixed;
  };

  useEffect(() => {
    localStorage.setItem('creditCards', JSON.stringify(creditCards));
  }, [creditCards]);

  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(budget));
  }, [budget]);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    setTotalExpenses(calculateTotalExpenses(expenses));
    setEstimatedFixedExpenses(calculateEstimatedFixedExpenses(expenses));
  }, [expenses]);

  return (
    <BrowserRouter>
      <Navigation />
      <div className="main-content-area">
        <Routes>
          <Route 
            path="/" 
            element={<HomePage 
              budget={budget} 
              totalExpenses={totalExpenses} 
              estimatedFixedExpenses={estimatedFixedExpenses} 
            />} 
          />
          <Route 
            path="/cards" 
            element={<CreditCardsPage 
              onAddCreditCard={addCreditCard} 
              creditCards={creditCards} 
              onDeleteCreditCard={deleteCreditCard} 
            />}
          />
          <Route 
            path="/budget" 
            element={<BudgetPage 
              budget={budget} 
              onBudgetUpdate={updateBudget} 
              totalExpenses={totalExpenses}
              estimatedFixedExpenses={estimatedFixedExpenses}
            />} 
          />
          <Route 
            path="/expenses" 
            element={<ExpensesPage 
              onAddExpense={addExpense} 
              expenses={expenses} 
              creditCards={creditCards} 
              onDeleteExpense={deleteExpense}
            />} 
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;