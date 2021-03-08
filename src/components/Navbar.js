import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <p className='nav-title'>
        <span className='nav-title-icon'>⚛️</span>
        React Starter Template
      </p>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
    </nav>
  )
}

export default Navbar
