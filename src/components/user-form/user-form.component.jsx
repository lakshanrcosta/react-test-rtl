import { useState } from 'react';
import './user-form.styles.css';

const UserForm = ({ onUserAdd }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleUserNameOnChange = (event) => setName(event.target.value);

  const handleUserEmailOnChange = (event) => setEmail(event.target.value);

  const clearInputFields = () => {
    setName('');
    setEmail('');
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (name && email) {
      onUserAdd({ name, email });
      clearInputFields();
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className='container p-3'>
        <div className='form-group'>
          <label htmlFor='user-name'>User name</label>
          <input
            id='user-name'
            type='text'
            value={name}
            className='form-control'
            placeholder='Enter email'
            onChange={handleUserNameOnChange}
          />
        </div>
        <div className='form-group mb-2'>
          <label htmlFor='user-email'>User email</label>
          <input
            id='user-email'
            type='email'
            value={email}
            className='form-control'
            placeholder='Password'
            onChange={handleUserEmailOnChange}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Add user
        </button>
      </div>
    </form>
  );
};

export default UserForm;
