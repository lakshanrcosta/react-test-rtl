import './user-form.styles.css';

const UserForm = () => {
  return (
    <form>
      <div className='container p-3'>
        <div className='form-group'>
          <label htmlFor='user-name'>User name</label>
          <input id='user-name' type='text' className='form-control' placeholder='Enter email' />
        </div>
        <div className='form-group mb-2'>
          <label htmlFor='user-email'>User email</label>
          <input id='user-email' type='email' className='form-control' placeholder='Password' />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default UserForm;
