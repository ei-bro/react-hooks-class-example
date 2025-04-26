import React from 'react';
import { MyContext } from '../../App';

function Component3() {
  return (
    <MyContext.Consumer>
      {data => (
        <div className='context-card'>
          <h1 className='context-title'>Hello from Component 3</h1>
          <h2 className='context-subtitle'>
            Using <strong>MyContext.Consumer</strong>:
            <span className='context-value red'>{data}</span>
          </h2>
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default Component3;
