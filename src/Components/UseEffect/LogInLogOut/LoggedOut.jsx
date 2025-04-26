import '../../../styles.css';
import React from 'react';

function LoggedOut() {
  return (
    <div>
      <h1 className='status-title logged-out'>You are Logged Out</h1>
      <h3 className='status-info'>Please log in</h3>
    </div>
  );
}

export default LoggedOut;
