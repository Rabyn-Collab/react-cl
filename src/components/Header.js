import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
const Header = () => {


  return (
    <header className='bg-black text-white flex items-baseline px-4 py-2 justify-between'>
      <h1 className='text-2xl'>Tail Web</h1>


      <FaBarsStaggered className='hidden sm:flex' />
      <nav className='space-x-2 sm:hidden'>
        <a className='s-link' href="">About</a>
        <a className='s-link' href="">Contact</a>
      </nav>

    </header>
  )
}

export default Header