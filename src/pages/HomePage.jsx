import React from 'react';
import BudgetOverview from '../components/BudgetOverview';
import styles from './HomePage.module.css';

function HomePage({ budget, totalExpenses, estimatedFixedExpenses }) {
  return (
    <div className={styles.main_container}>
      <h1>Panel Principal</h1>
      <BudgetOverview budget={budget} totalExpenses={totalExpenses} estimatedFixedExpenses={estimatedFixedExpenses} />
    </div>
  );
}

export default HomePage;