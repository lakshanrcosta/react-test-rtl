import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Users from './users.view';

describe('Users view test suite', () => {
  it('Should receive a new user and show it on the list', () => {
    render(<Users />);

    const nameInput = screen.getByRole('textbox', {
      name: /name/i
    });
    const emailInput = screen.getByRole('textbox', {
      name: /email/i
    });
    const button = screen.getByRole('button');

    user.click(nameInput);
    user.keyboard('John Wick');
    user.click(emailInput);
    user.keyboard('john.wick@unknown.com');
    user.click(button);

    // screen.debug();

    const userIndex = screen.getByRole('cell', { name: '1' });
    const userFirstName = screen.getByRole('cell', { name: 'John' });
    const userLastName = screen.getByRole('cell', { name: 'Wick' });
    const userEmail = screen.getByRole('cell', { name: 'john.wick@unknown.com' });

    expect(userIndex).toBeInTheDocument();
    expect(userFirstName).toBeInTheDocument();
    expect(userLastName).toBeInTheDocument();
    expect(userEmail).toBeInTheDocument();
  });
});
