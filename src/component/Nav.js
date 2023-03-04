import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <ul className="container">
      <li><NavLink to="/Home" className="link">Home</NavLink></li>
      <li><NavLink to="/About" className="link">About</NavLink></li>
      <li><NavLink to="Contact" className="link">Contact</NavLink></li>
      <li><NavLink to="/login" className="link">Login</NavLink></li>
    </ul>
  )
}

export default Nav