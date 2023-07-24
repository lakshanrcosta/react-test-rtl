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
});
