import React from 'react'
import Header from '../components/Header'
import { NavLink, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Hello Im Home</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vel assumenda sequi ex adipisci, aut quam iste distinctio aliquid dolorem aspernatur porro temporibus, iure repellat minus blanditiis consequatur accusamus eum.</p>

      <NavLink to='/'>Page1</NavLink>
      <NavLink to='/page2'>Page2</NavLink>
      <Outlet />

    </div>
  )
}

export default Home