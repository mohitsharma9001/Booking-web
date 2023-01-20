import React from 'react'
import './navbar.css'
export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
          <sapn className="logo">Bookings</sapn>
          <div className="navItem">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        </div>
    </div>
  )
}
