import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component rendering test suite', () => {
  it('Should render the app component and should contain the Users view', () => {
    render(<App />);

    // screen.logTestingPlaygroundURL();
    const nameInput = screen.getByRole('textbox', {
      name: /name/i
    });
    const emailInput = screen.getByRole('textbox', {
      name: /email/i
    });
    const button = screen.getByRole('button');

    const userIndexHeader = screen.getByRole('columnheader', {
      name: /#/i
    });
    const userFirstNameHeader = screen.getByRole('columnheader', {
      name: /first name/i
    });
    const userLastNameHeader = screen.getByRole('columnheader', {
      name: /last name/i
    });
    const userEmailHeader = screen.getByRole('columnheader', {
      name: /email address/i
    });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(userIndexHeader).toBeInTheDocument();
    expect(userFirstNameHeader).toBeInTheDocument();
    expect(userLastNameHeader).toBeInTheDocument();
    expect(userEmailHeader).toBeInTheDocument();
  });
});
