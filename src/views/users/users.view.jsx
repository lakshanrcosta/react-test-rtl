import { useState } from 'react';
import UserForm from '../../components/user-form/user-form.component';
import UserList from '../../components/user-list/user-list.component';

const Users = () => {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className='container'>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
};

export default Users;
