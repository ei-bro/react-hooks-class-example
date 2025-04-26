import React, { useEffect } from 'react';

function LoggedIn() {
  useEffect(() => {
    let second = 0;
    const intervalId = setInterval(() => {
      console.log(`You are logged in for - ${++second} seconds`);
    }, 1000);

    return function cleanup() {
      clearInterval(intervalId);
      // console.log('You are logged out');
    };
  }, []);

  return (
    <div>
      <h1 className='status-title logged-in'>User Logged In</h1>
      <h3 className='status-info'>Name: Abebe</h3>
      <h3 className='status-info'>BootCamp: Evangadi</h3>
      <h3 className='status-info'>Group: 5</h3>
    </div>
  );
}

export default LoggedIn;
