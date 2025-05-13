import React from 'react';
import { render, screen } from '@testing-library/react';
import BudgetOverview from '../components/BudgetOverview';


describe('<BudgetOverview />', () => {
  it('should render the initial total budget as $0', () => {
    const budget = { total: 0 };
    render(<BudgetOverview budget={budget} totalExpenses={0} estimatedFixedExpenses={0} />);
    expect(screen.getByText(/Presupuesto Total Mensual: \$0/i)).toBeInTheDocument();
  });
});