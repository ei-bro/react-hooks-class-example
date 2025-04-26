import React, { useContext } from 'react';
import { MyContext } from '../../App';

function UsingUseContext() {
  const data = useContext(MyContext);

  return (
    <div className='context-card'>
      <h1 className='context-title'>Hello from UsingUseContext</h1>
      <h2 className='context-subtitle'>
        Using the <strong>useContext</strong> hook:
        <span className='context-value blue'> {data}</span>
      </h2>
    </div>
  );
}

export default UsingUseContext;
