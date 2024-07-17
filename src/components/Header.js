import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black text-white px-3 py-3 border-2 border-sky-600 flex justify-between'>
      <h1>Web Tail</h1>

      <nav className='space-x-5'>
        <NavLink to={'/about-page'}>About</NavLink>
        <NavLink to={'/contact-page'}>Contact</NavLink>
      </nav>

    </div>
  )
}

export default Header