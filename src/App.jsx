import React, { useState } from 'react';
import HomePage from './pages/HomePage';

function App() {
  const [creditCards, setCreditCards] = useState([]);

  const addCreditCard = (newCard) => {
    setCreditCards([...creditCards, newCard]);
  };

  return (
    <div>
      <HomePage addCreditCard={addCreditCard} creditCards={creditCards} />
    </div>
  );
}

export default App;