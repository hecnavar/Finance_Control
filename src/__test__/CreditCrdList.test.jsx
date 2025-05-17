import React from 'react';
import { render, screen } from '@testing-library/react';
import CreditCardList from '../components/CreditCardList';

describe('<CreditCardList />', () => {
  const cards = [
    {
      bankName: 'Banco A',
      cardNumber: '****-****-****-1234',
      creditLimit: 5000,
      cutOffDate: '2025-05-20',
      paymentDate: '2025-05-28',
    },
  ];

  it('should render at least one credit card if the creditCards prop is not empty', () => {
    render(<CreditCardList creditCards={cards} />);
    const listItem = screen.getByRole('listitem');
    expect(listItem).toBeInTheDocument();
    expect(screen.getByText(/Banco A/i)).toBeInTheDocument();

    const cardNumberElement = screen.getByText((content) =>
      content?.includes('1234')
    );
    expect(cardNumberElement).toBeInTheDocument();
  });

  it('should render a message if the creditCards prop is empty', () => {
    render(<CreditCardList creditCards={[]} />);
    expect(screen.getByText(/No has agregado ninguna tarjeta de crédito aún./i)).toBeInTheDocument();
  });
});