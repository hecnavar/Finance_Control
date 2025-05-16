import React from 'react';
import useFormValidation from '../hooks/useFormValidation';
import styles from './BudgetSetupForm.module.css';

function BudgetSetupForm({ onBudgetUpdate }) {
  const initialValues = {
    totalBudget: '',
  };
  const validationSchema = {
    totalBudget: { required: 'El presupuesto total es requerido', isNumber: 'Debe ser un número' },
  };
  const { values, errors, handleChange, handleSubmit, resetForm } = useFormValidation(
    initialValues,
    validationSchema,
    (valuesToSubmit, reset) => {
      onBudgetUpdate({ total: parseFloat(valuesToSubmit.totalBudget) || 0 });
      reset();
    }
  );

  return (
    <div>
      <h2>Establecer Presupuesto Mensual</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="totalBudget">Presupuesto Total:</label>
          <input
            type="text"
            id="totalBudget"
            name="totalBudget"
            value={values.totalBudget}
            onChange={handleChange}
          />
          {errors.totalBudget && <p className={styles.error}>{errors.totalBudget}</p>}
        </div>
        <button type="submit">Guardar Presupuesto</button>
      </form>
    </div>
  );
}

export default BudgetSetupForm;