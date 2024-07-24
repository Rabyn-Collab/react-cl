import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

const RootLayout = () => {
  return (
    <>

      <Header />
      <Outlet />
    </>
  )
}

export default RootLayout