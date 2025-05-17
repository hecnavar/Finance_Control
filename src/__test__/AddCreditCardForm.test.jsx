import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddCreditCardForm from '../components/AddCreditCardForm';

describe('<AddCreditCardForm />', () => {
  it('should render the form elements', () => {
    render(<AddCreditCardForm onAddCreditCard={() => {}} />);

    expect(screen.getByLabelText(/Banco:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Número de Tarjeta:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Límite de Crédito:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Fecha de Corte:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Fecha de Pago:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Agregar Tarjeta/i })).toBeInTheDocument();
  });

  it('should call onAddCreditCard with form values on submit', async () => {
    const mockOnAddCreditCard = jest.fn();

    render(<AddCreditCardForm onAddCreditCard={mockOnAddCreditCard} />);

    await userEvent.type(screen.getByLabelText(/Banco:/i), 'Banco Ejemplo');
    await userEvent.type(screen.getByLabelText(/Número de Tarjeta:/i), '1234567890123456');
    await userEvent.type(screen.getByLabelText(/Límite de Crédito:/i), '1000');
    await userEvent.type(screen.getByLabelText(/Fecha de Corte:/i), '2025-05-20');
    await userEvent.type(screen.getByLabelText(/Fecha de Pago:/i), '2025-05-28');

    await userEvent.click(screen.getByRole('button', { name: /Agregar Tarjeta/i }));

    expect(mockOnAddCreditCard).toHaveBeenCalledTimes(1);
    expect(mockOnAddCreditCard).toHaveBeenCalledWith(
      {
        bankName: 'Banco Ejemplo',
        cardNumber: '1234567890123456',
        creditLimit: '1000',
        interestRate: '',
        cutOffDate: '2025-05-20',
        paymentDate: '2025-05-28',
      },
      expect.any(Function)
    );
  });
});