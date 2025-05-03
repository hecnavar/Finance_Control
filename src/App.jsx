import React, { useState } from 'react';
import HomePage from './pages/HomePage';

function App() {
  const [creditCards, setCreditCards] = useState([]);
  const [budget, setBudget] = useState({ total: 0 });

  const addCreditCard = (newCard) => {
    setCreditCards([...creditCards, newCard]);
  };

  const updateBudget = (newBudget) => {
    setBudget(newBudget);
  };

  return (
    <div>
      <HomePage
        addCreditCard={addCreditCard}
        creditCards={creditCards}
        budget={budget}
        onBudgetUpdate={updateBudget}
      />
    </div>
  );
}

export default App;