export const splitFirstNameAndLastName = (userName) => {
  const firstNameAndLastName = userName.split(' ');
  if (firstNameAndLastName) {
    const lastName = firstNameAndLastName[1] ? firstNameAndLastName[1] : 'N/A';
    const name = { firstName: firstNameAndLastName[0], lastName };
    return name;
  }
};

const UserList = ({ users }) => {
  const splitFirstNameAndLastName = (userName) => {
    const firstNameAndLastName = userName.split(' ');
    if (firstNameAndLastName) {
      const lastName = firstNameAndLastName[1] ? firstNameAndLastName[1] : 'N/A';
      const name = { firstName: firstNameAndLastName[0], lastName };
      return name;
    }
  };

  return (
    <div className='container'>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Email Address</th>
          </tr>
        </thead>
        <tbody data-testid='users'>
          {users.map((user, index) => {
            const { firstName, lastName } = splitFirstNameAndLastName(user.name);
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
