import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-black text-white py-2 px-2 flex justify-between'>

      <h1 className=''>Web Logo</h1>
      <nav className='space-x-4 sm:hidden'>
        <NavLink to={'/about-page'}>About</NavLink>
        <NavLink to={'/contact-page'}>Contact</NavLink>

      </nav>

    </header>
  )
}

export default Header