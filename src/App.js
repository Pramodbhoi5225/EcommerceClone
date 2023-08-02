
import React, { useState } from 'react'
import App1 from './Components/usestatetime'
import Digital from './Components/Digital';
import Changecolor from './Components/Changecolor';
import SimpleForm from './Components/SimpleForm';
import Covid from './ApiStatewise/Covid';
import Data from './ApiStatewise/Data';
import Cart from './E Commerce/Cart';
import Index from './E Commerce/index';

 import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import './E Commerce/index.css'





let count = 0;

function App() {
  let state = useState(); 
  // console.log(state);
const [count, setCount] =useState(50); 

const IncNum = () =>{
  setCount(count + 2);
  // console.log('Clicked',count++);



}
  return (
    <div>
      {/* <App1/>
      <Changecolor/>
      <Digital/>
      <SimpleForm/> */}
      {/* <Covid/> */}
      {/* <Data/> */}
      <Index/>
      <Cart/>
   
      

      
      {/* <h1>{count}</h1>
    <button onClick={IncNum}>Click Me</button> */}
    </div>
  )
}

export default App

// / /timezone ////

// import React, { createContext, useState } from 'react'
// import ComA from './UseContext/ComA'

// const FirstName = createContext();

// function App() {

 

//   return (
//     <div>
//       <FirstName.Provider value={'Pramod'}>
//       <ComA/>
//       </FirstName.Provider>
     
//     </div>
//   )
// }

// export default App
// export {FirstName}


// import React from 'react'
// import Index from './E Commerce';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import './E Commerce/index.css'
// import Index1 from './E Commerce/Index1';




// function App() {
//   return (
//     <div>
//     <Index/>
    
    
//     <Index1/>
      
     
      
     
      
//     </div>
//   )
// }

// export default App








