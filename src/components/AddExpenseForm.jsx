import React, { useState } from 'react';
import useFormValidation from '../hooks/useFormValidation';
import styles from './AddExpenseForm.module.css';

function AddExpenseForm({ onAddExpense, creditCards }) {
  console.log("AddExpenseForm se ha renderizado. Prop creditCards:", creditCards);

  const initialValues = {
    description: '',
    amount: '',
    category: '',
    date: '',
    creditCardId: '',
    isFixed: false,
    frequency: 'monthly',
  };

  const validationSchema = {
    description: { required: 'La descripción es requerida' },
    amount: { required: 'El monto es requerido', isNumber: 'El monto debe ser un número' },
    category: { required: 'La categoría es requerida' },
    date: { required: 'La fecha es requerida' },
  };

  const { values, errors, handleChange, handleSubmit, resetForm } = useFormValidation(
    initialValues,
    validationSchema,
    (valuesToSubmit, reset) => {
      const newExpense = {
        ...valuesToSubmit,
        amount: parseFloat(valuesToSubmit.amount) || 0,
        isFixed: valuesToSubmit.isFixed === 'on' || valuesToSubmit.isFixed === true,
        frequency: valuesToSubmit.isFixed === 'on' || valuesToSubmit.isFixed === true ? valuesToSubmit.frequency : null,
      };
      onAddExpense(newExpense);
      reset();
    }
  );

  return (
<div className={styles.formContainer}>
  <h2 className={styles.formTitle}>Registrar Nuevo Gasto</h2>
  <form onSubmit={handleSubmit}>
    <div className={styles.formGroup}>
      <label htmlFor="description" className={styles.formLabel}>Descripción:</label>
      <input type="text" id="description" name="description" value={values.description} onChange={handleChange} className={styles.formInput}/>
      {errors.description && <p className={styles.error}>{errors.description}</p>}
    </div>
    <div className={styles.formGroup}>
      <label htmlFor="amount" className={styles.formLabel}>Monto:</label>
      <input type="number" id="amount" name="amount" value={values.amount} onChange={handleChange} className={styles.formInput}/>
      {errors.amount && <p className={styles.error}>{errors.amount}</p>}
    </div>
    <div className={styles.formGroup}>
      <label htmlFor="category" className={styles.formLabel}>Categoría:</label>
      <select id="category" name="category" value={values.category} onChange={handleChange} className={styles.formSelect}>
        <option value="">Seleccionar categoría</option>
        <option value="alimentacion">Alimentación</option>
        <option value="transporte">Transporte</option>
        <option value="entretenimiento">Entretenimiento</option>
        <option value="servicios">Servicios</option>
      </select>
      {errors.category && <p className={styles.error}>{errors.category}</p>}
    </div>
    <div className={styles.formGroup}>
      <label htmlFor="date" className={styles.formLabel}>Fecha:</label>
      <input type="date" id="date" name="date" value={values.date} onChange={handleChange} className={styles.formInput}/>
      {errors.date && <p className={styles.error}>{errors.date}</p>}
    </div>
    {Array.isArray(creditCards) && creditCards.length > 0 && (
      <div className={styles.formGroup}>
        <label htmlFor="creditCard" className={styles.formLabel}>Tarjeta de Crédito (Opcional):</label>
        <select id="creditCard" name="creditCardId" value={values.creditCardId} onChange={handleChange} className={styles.formSelect}>
          <option value="">Ninguna</option>
          {creditCards.map((card) => (
            <option key={card.cardNumber} value={card.cardNumber}>
              {card.bankName} - Últimos: {card.cardNumber.slice(-4)}
            </option>
          ))}
        </select>
        {errors.creditCardId && <p className={styles.error}>{errors.creditCardId}</p>}
      </div>
    )}
    <div className={styles.formCheckboxGroup}>
      <label htmlFor="isFixed" className={styles.formLabel}>Gasto Fijo:</label>
      <input type="checkbox" id="isFixed" name="isFixed" checked={values.isFixed} onChange={handleChange} className={styles.formCheckbox} />
      {errors.isFixed && <p className={styles.error}>{errors.isFixed}</p>}
    </div>
    {values.isFixed && (
      <div className={styles.formGroup}>
        <label htmlFor="frequency" className={styles.formLabel}>Frecuencia:</label>
        <select id="frequency" name="frequency" value={values.frequency} onChange={handleChange} className={styles.formSelect}>
          <option value="monthly">Mensual</option>
          <option value="weekly">Semanal</option>
          <option value="biweekly">Quincenal</option>
          <option value="bimonthly">Bimestral</option>
        </select>
        {errors.frequency && <p className={styles.error}>{errors.frequency}</p>}
      </div>
    )}
    <button type="submit" className={styles.formButton}>Registrar Gasto</button>
  </form>
</div>
  );
}

export default AddExpenseForm;