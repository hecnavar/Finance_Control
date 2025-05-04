import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';

function App() {
  const [creditCards, setCreditCards] = useState([]);
  const [budget, setBudget] = useState({ total: 0 });
  const [expenses, setExpenses] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);

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

  useEffect(() => {
    setTotalExpenses(calculateTotalExpenses(expenses));
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
      />
    </div>
  );
}

export default App;