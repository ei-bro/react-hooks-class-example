import React, { useState } from 'react';
import LoggedIn from './LogInLogOut/LoggedIn';
import LoggedOut from './LogInLogOut/LoggedOut';

function LogInLogOut() {
  const [show, setShow] = useState(false);

  const toggleStatus = () => {
    setShow(!show);
  };

  return (
    <div className='login-container'>
      <div className='status-card'>{show ? <LoggedIn /> : <LoggedOut />}</div>
      <button className='btn-toggle' onClick={toggleStatus}>
        {show ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
}

export default LogInLogOut;
