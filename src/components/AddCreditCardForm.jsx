import React from 'react';
import useFormValidation from '../hooks/useFormValidation';
import styles from './AddCreditCardForm.module.css';

function AddCreditCardForm({ onAddCreditCard }) {
  const initialValues = {
    bankName: '',
    cardNumber: '',
    creditLimit: '',
    interestRate: '',
    cutOffDate: '',
    paymentDate: '',
  };
  const validationSchema = {
    bankName: { required: 'El nombre del banco es requerido' },
    cardNumber: { required: 'El número de tarjeta es requerido' },
    creditLimit: { required: 'El límite de crédito es requerido', isNumber: 'Debe ser un número' },
    cutOffDate: { required: 'La fecha de corte es requerida' },
    paymentDate: { required: 'La fecha de pago es requerida' },
  };
  const { values, errors, handleChange, handleSubmit, resetForm } = useFormValidation(
    initialValues,
    validationSchema,
    (valuesToSubmit, reset) => {
      onAddCreditCard(valuesToSubmit, reset);
    }
  );

  return (
    <div>
      <h2>Agregar Nueva Tarjeta de Crédito</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bankName">Banco:</label>
          <input
            type="text"
            id="bankName"
            name="bankName"
            value={values.bankName}
            onChange={handleChange}
          />
          {errors.bankName && <p className={styles.error}>{errors.bankName}</p>}
        </div>
        <div>
          <label htmlFor="cardNumber">Número de Tarjeta:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={values.cardNumber}
            onChange={handleChange}
          />
          {errors.cardNumber && <p className={styles.error}>{errors.cardNumber}</p>}
        </div>
        <div>
          <label htmlFor="creditLimit">Límite de Crédito:</label>
          <input
            type="number"
            id="creditLimit"
            name="creditLimit"
            value={values.creditLimit}
            onChange={handleChange}
          />
          {errors.creditLimit && <p className={styles.error}>{errors.creditLimit}</p>}
        </div>
        <div>
          <label htmlFor="interestRate">Tasa de Interés (%):</label>
          <input
            type="number"
            id="interestRate"
            name="interestRate"
            value={values.interestRate}
            onChange={handleChange}
          />
          {errors.interestRate && <p className={styles.error}>{errors.interestRate}</p>}
        </div>
        <div>
          <label htmlFor="cutOffDate">Fecha de Corte:</label>
          <input
            type="date"
            id="cutOffDate"
            name="cutOffDate"
            value={values.cutOffDate}
            onChange={handleChange}
          />
          {errors.cutOffDate && <p className={styles.error}>{errors.cutOffDate}</p>}
        </div>
        <div>
          <label htmlFor="paymentDate">Fecha de Pago:</label>
          <input
            type="date"
            id="paymentDate"
            name="paymentDate"
            value={values.paymentDate}
            onChange={handleChange}

          />
          {errors.paymentDate && <p className={styles.error}>{errors.paymentDate}</p>}
        </div>
        <button type="submit">Agregar Tarjeta</button>
      </form>
    </div>
  );
}

export default AddCreditCardForm;