import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black text-white flex px-5 py-3 items-baseline justify-between'>

      <h1 className='text-2xl'>Shop</h1>
      <nav>
        <NavLink to='/login'>Login</NavLink>
      </nav>


    </div>
  )
}

export default Header