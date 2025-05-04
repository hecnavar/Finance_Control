import React, { useState } from 'react';
import HomePage from './pages/HomePage';

function App() {
  const [creditCards, setCreditCards] = useState([]);
  const [budget, setBudget] = useState({ total: 0 });
  const [expenses, setExpenses] = useState([]);

  const addCreditCard = (newCard) => {
    setCreditCards([...creditCards, newCard]);
  };

  const updateBudget = (newBudget) => {
    setBudget(newBudget);
  };

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div>
      <HomePage
        addCreditCard={addCreditCard}
        creditCards={creditCards}
        budget={budget}
        onBudgetUpdate={updateBudget}
        expenses={expenses}
        onAddExpense={addExpense}
      />
    </div>
  );
}

export default App;