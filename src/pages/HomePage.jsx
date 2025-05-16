// HomePage.jsx
import React from 'react';
import BudgetOverview from '../components/BudgetOverview';
import styles from './HomePage.module.css';

function HomePage({ budget, totalExpenses, estimatedFixedExpenses }) {
  return (
    <div className={styles.homePageWrapper}>
      <header className={styles.header}>
        <h1>Panel Principal</h1>
      </header>
      <section className={styles.budgetSection}>
        <BudgetOverview
          budget={budget}
          totalExpenses={totalExpenses}
          estimatedFixedExpenses={estimatedFixedExpenses}
        />
      </section>
    </div>
  );
}

export default HomePage;