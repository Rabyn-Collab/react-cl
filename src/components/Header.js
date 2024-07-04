import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
const Header = () => {


  return (
    <header className='bg-black text-white flex items-baseline px-4 py-2 justify-between'>
      <h1 className='text-2xl'>Tail Web</h1>


      <FaBarsStaggered className='hidden sm:flex' />
      <nav className='space-x-2 sm:hidden'>

        <NavLink to='/about-page' className='s-link' >About</NavLink>


        <NavLink to='/contact-page' className='s-link' >Contact</NavLink>
      </nav>

    </header>
  )
}

export default Header