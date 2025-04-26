import React, { useState } from 'react';

function CounterUsingHooksUseState() {
  // let result = useState('my value');
  // console.log(result[0]); // my value
  // console.log(result[1]); // function setState

  // Use Array destructuring when using useState
  let [count, setCount] = useState(0);

  const increment = () => {
    // count = count + 1; // // Never do this. It won't update it.
    // console.log(count);
    // setCount(count + 1);
    // console.log(count);

    setCount(prevState => {
      return prevState + 1;
    }); // use the updater function
  };

  return (
    <div className='counter-container'>
      <h1 className='counter-title'>React useState Counter</h1>
      <div className='counter-display'>{count}</div>
      <div className='counter-buttons'>
        <button className='btn increment-btn' onClick={increment}>
          Increment by 1
        </button>
        <button
          className='btn increment-ten-btn'
          onClick={() => setCount(count + 10)}
        >
          Increment by 10
        </button>
      </div>
    </div>
  );
}

export default CounterUsingHooksUseState;
