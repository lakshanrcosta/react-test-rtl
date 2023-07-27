import { render, screen, within } from '@testing-library/react';
import UserList, { splitFirstNameAndLastName } from './user-list.component';

const renderComponent = (customUsers = []) => {
  const users = [
    { name: 'Jane Frank', email: 'jane.frank@unknown.com' },
    { name: 'John Doe', email: 'john.doe@unknown.com' }
  ];

  const renderedUsers = customUsers.length === 0 ? users : customUsers;

  render(<UserList users={renderedUsers} />);

  return { renderedUsers };
};

describe('UserList component test suite', () => {
  it('Should render one row per user', () => {
    renderComponent();

    // To enable testing playground
    // screen.logTestingPlaygroundURL();

    const rows = within(screen.getByTestId('users')).getAllByRole('row');
    expect(rows).toHaveLength(2);
  });

  it('Should render name and the email of the each user', () => {
    const { renderedUsers } = renderComponent();

    for (const user of renderedUsers) {
      const { firstName, lastName } = splitFirstNameAndLastName(user.name);
      const userFirstName = screen.getByRole('cell', { name: firstName });
      const userLastName = screen.getByRole('cell', { name: lastName });
      const userEmail = screen.getByRole('cell', { name: user.email });

      expect(userFirstName).toBeInTheDocument();
      expect(userLastName).toBeInTheDocument();
      expect(userEmail).toBeInTheDocument();
    }
  });

  it('Should display N/A for the last name if user has entered only one name', () => {
    const user = [{ name: 'Jane', email: 'jane@unknown.com' }];
    const { lastName } = splitFirstNameAndLastName(user[0].name);

    renderComponent(user);

    const userLastName = screen.getByRole('cell', { name: lastName });
    expect(userLastName).toBeInTheDocument();
  });

  it('Should display the user index number along with first name, last name and email', () => {
    const { renderedUsers } = renderComponent();

    renderedUsers.forEach((user, index) => {
      index++;
      const { firstName, lastName } = splitFirstNameAndLastName(user.name);
      const userIndex = screen.getByRole('cell', { name: index });
      const userFirstName = screen.getByRole('cell', { name: firstName });
      const userLastName = screen.getByRole('cell', { name: lastName });
      const userEmail = screen.getByRole('cell', { name: user.email });

      expect(userIndex).toBeInTheDocument();
      expect(userFirstName).toBeInTheDocument();
      expect(userLastName).toBeInTheDocument();
      expect(userEmail).toBeInTheDocument();
    });
  });
});
