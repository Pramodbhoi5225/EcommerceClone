import React, { useState } from 'react';
import './index.css';

const Navbar = ({setShow,setSearch}) => {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
       <a> <div className='menu' onClick={()=> setShow(true)}>
          Shop😊More
        </div></a>
        <a>
        <div className='menu' onClick={()=> setShow(true)}>
          Home
        </div>
        </a>
        <a className=" " href="#">
          Contact
        </a>
        <a className=" " href="#">
          Service
        </a>
        <a className=" " href="#">
          <input type="text" placeholder="Serch Here" id="InputeSerch"  onChange={(e)=>setSearch(e.target.value)}/>
        </a>
       <a>
        <div className='menu' onClick={()=> setShow(false)}>
        Cart🛒 
        </div>
        </a>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
