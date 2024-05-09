import React from 'react'
import './components.css'

function Navbar() {
  return <>
   <div className={`navbar ${mode?"bg-dark":"bg-light"}`}>
    <div className="nav-content-container">
        <ul>
            <li>Veg</li>
            <li>Non-Veg</li>
            <li>Snacks</li>
            <li>Veverages</li>
            <li>Dessert</li>
        </ul>
    </div>
  </div>
  </>
}

export default Navbar