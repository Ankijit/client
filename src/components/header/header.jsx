// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.svg';
import '../../index.css'

function Header() {
  return (
    <>
    <nav className='flex justify-between w-full' id='navbar'>
        <div>
            <img src={logo} alt="logo"  className='w-36'/>
        </div>
        <ul className='text-tprimary pr-11'>
            <NavLink to='/' className={({isActive})=>`menu-items ${isActive ? "active-style": ""}`} >Home</NavLink>
            <NavLink to='/about' className={({isActive})=>`menu-items ${isActive ? "active-style": ""}`} >About</NavLink>
            <NavLink to='/services' className={({isActive})=>`menu-items ${isActive ? "active-style": ""}`} >Services</NavLink>
            <NavLink to='/contact' className={({isActive})=>`menu-items ${isActive ? "active-style": ""}`} >Contact-Me</NavLink>
         {/* <li></li> */}
        </ul>
    </nav>
    
    </>
    
  )
}

export default Header