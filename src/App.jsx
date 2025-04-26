import { createContext, useState } from 'react';
import LogInLogOut from './Components/UseEffect/LogInLogOut';
import UsingUseEffect from './Components/UseEffect/UsingUseEffect';
import CounterUsingHooksUseState from './Components/UseState/CounterUsingHooksUseState';
import ObjStateEx from './Components/UseState/ObjStateEx';
import Component1 from './Components/UseContext/Component1';

function App() {
  return (
    <div>
      {/* 2.2 */}
      <CounterUsingHooksUseState />

      {/* 2.3 */}
      <ObjStateEx />

      {/* 2.4 */}
      <UsingUseEffect />
      <LogInLogOut />
    </div>
  );
}

// First create context

export const MyContext = createContext();

// function App() {
//   return (
//     <div className='App'>
//       <div>
//         {/* 2.5 */}
//         <MyContext.Provider value={'Hello from MyContext'}>
//           <Component1 />
//         </MyContext.Provider>
//       </div>
//     </div>
//   );
// }

export default App;
