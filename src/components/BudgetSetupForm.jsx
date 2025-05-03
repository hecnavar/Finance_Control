import React, { useState } from 'react';

function BudgetSetupForm({ onBudgetUpdate }) {
  const [totalBudget, setTotalBudget] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onBudgetUpdate({ total: parseFloat(totalBudget) || 0 });
    setTotalBudget('');
  };

  return (
    <div>
      <h2>Establecer Presupuesto Mensual</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="totalBudget">Presupuesto Total:</label>
          <input
            type="number"
            id="totalBudget"
            value={totalBudget}
            onChange={(e) => setTotalBudget(e.target.value)}
            required
          />
        </div>
        <button type="submit">Guardar Presupuesto</button>
      </form>
    </div>
  );
}

export default BudgetSetupForm;