// BudgetPage.jsx
import React from 'react';
import BudgetSetupForm from '../components/BudgetSetupForm';
import BudgetOverview from '../components/BudgetOverview';
import styles from './BudgetPage.module.css';

function BudgetPage({ budget, onBudgetUpdate, totalExpenses, estimatedFixedExpenses }) {
  return (
    <div className={styles.budgetPageLayout}>
      <h2 className={styles.pageTitle}>Presupuesto Mensual</h2>
      <div className={styles.contentContainer}>
        <div className={styles.formSection}>
          <BudgetSetupForm onBudgetUpdate={onBudgetUpdate} />
        </div>
        <div className={styles.overviewSection}>
          <BudgetOverview
            budget={budget}
            totalExpenses={totalExpenses}
            estimatedFixedExpenses={estimatedFixedExpenses}
          />
        </div>
      </div>
    </div>
  );
}

export default BudgetPage;