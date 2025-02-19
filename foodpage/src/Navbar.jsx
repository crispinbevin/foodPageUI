import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import water from './assets/splash.jpeg'

function Navbar() {
  return (
    <div className="navbar-section">
        <div className="container navbar-wrapper">
            <div className="logo">
                <Link to='/'><img src='https://partner.foodpage.co.uk/static/media/logo.b9f14b6bae350acddfac.png' alt="" /></Link>
            </div>
            <ul className="nav-list">
                <Link to='/login'><li className='nav-item'>Log in</li></Link>
                <Link to='/products'><li className='nav-item'>Products</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar