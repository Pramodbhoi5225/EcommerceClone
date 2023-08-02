import React from 'react'

function Cart() {
  return (
    <div>
      <div className='container'>

      <nav className="navbar navbar-expand-lg  container ">
          <div className="container-fluid">
            <a className="navbar-brand text-white " href="#">
              Shop😊More <span></span>
            </a>
            <a className="navbar-brand text-white " href="#">
              Home <span></span>
            </a>
            <a className="navbar-brand text-white" href="#">
              Contact <span></span>
            </a>
            <a className="navbar-brand text-white" href="#">
              Service <span></span>
            </a>
            <a className="navbar-brand text-white">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </a>
            <a className="navbar-brand1 text-white" href="#">
              Cart <span>🛒 </span>
            </a>
          </div>
        </nav>

      </div>
    </div>
  )
}

export default Cart
