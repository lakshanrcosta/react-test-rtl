const UserList = ({ users }) => {
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
        <tbody>
          {users.map((user, index) => {
            const firstNameAndLastName = user.name.split(' ');
            if (firstNameAndLastName) {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{firstNameAndLastName[0]}</td>
                  {firstNameAndLastName[1] ? <td>{firstNameAndLastName[1]}</td> : <td>N/A</td>}
                  <td>{user.email}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
