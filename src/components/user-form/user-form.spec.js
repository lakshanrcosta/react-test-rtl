import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './user-form.component';

describe('UserForm component test suite', () => {
  it('It should show two labels, two inputs and a button', () => {
    render(<UserForm />);

    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });

  it('It should call onUserAdd when the form is submitted', () => {
    const onUserAddMock = jest.fn();

    render(<UserForm onUserAdd={onUserAddMock} />);

    const nameInput = screen.getByRole('textbox', {
      name: /name/i
    });

    const emailInput = screen.getByRole('textbox', {
      name: /email/i
    });

    user.click(nameInput);
    user.keyboard('John');

    user.click(emailInput);
    user.keyboard('john.doe@unknown.com');

    const button = screen.getByRole('button');
    user.click(button);

    expect(onUserAddMock).toHaveBeenCalled();
    expect(onUserAddMock).toHaveBeenCalledWith({ name: 'John', email: 'john.doe@unknown.com' });
  });

  it('Should empty the two inputs when form is submitted', () => {
    render(<UserForm onUserAdd={() => {}} />);

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const button = screen.getByRole('button');

    user.click(nameInput);
    user.keyboard('John');
    user.click(emailInput);
    user.keyboard('john@unknown.com');
    user.click(button);

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
  });
});
