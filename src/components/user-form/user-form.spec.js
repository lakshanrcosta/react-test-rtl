import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './user-form.component';

describe('UserForm component test suite', () => {
  it('It should show two labels, two inputs and a button', () => {
    // Render the component
    render(<UserForm />);

    // Manipulate the component or find element in it
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    // Assertion - make sure the component is doing what it intended to do
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });

  it('It should call onUserAdd when the form is submitted', () => {
    // Callback function
    const argList = [];
    const callback = (...args) => {
      argList.push(args);
    };

    // Render the component
    render(<UserForm onUserAdd={callback} />);

    // Find two text inputs
    const [nameInput, emailInput] = screen.getAllByRole('textbox');

    // Simulate typing in a name
    user.click(nameInput);
    user.keyboard('John');

    // Simulate typing in an email
    user.click(emailInput);
    user.keyboard('john.doe@unknown.com');

    // Find the button
    const button = screen.getByRole('button');

    // Simulate the button click
    user.click(button);

    // Assertion
    expect(argList).toHaveLength(1);
    expect(argList[0][0]).toEqual({ name: 'John', email: 'john.doe@unknown.com' });
  });
});
