import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

const RootLayout = () => {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  )
}

export default RootLayout