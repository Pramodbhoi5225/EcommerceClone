
import React, { useState } from 'react'
//  Book my show

// import App1 from './Components/usestatetime'
// import Digital from './Components/Digital';
// import Changecolor from './Components/Changecolor';
// import SimpleForm from './Components/SimpleForm';
// import Covid from './ApiStatewise/Covid';
// import Data from './ApiStatewise/Data';
import Cart from './E Commerce/Cart';
import Index from './E Commerce/index';
import Navbar from './E Commerce/Navbar';

 import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import './E Commerce/index.css'
 import './E Commerce/Cart.css' 

let count = 0;

function App() {
  let state = useState(); 
  // console.log(state);
const [count, setCount] =useState(50); 
const [show, setShow] = useState(true);
const [search, setSearch] = useState('');



const IncNum = () =>{
  setCount(count + 2);
  // console.log('Clicked',count++);

  

}
  return (
    <div>

      <Navbar setShow={setShow} setSearch={setSearch}/>
      {(show)?(<Index search={search}/>):(<Cart/>)}
   
  
    </div>
  )
}

export default App





