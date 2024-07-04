import React, { useState } from 'react'
import Header from './components/Header'
import DisplaySec from './pages/home/DisplaySec'
import Tech from './pages/home/Tech'
import Intro from './pages/home/Intro'
import Footer from './components/Footer'

const App = () => {



  return (
    <div>




      <Header />
      <DisplaySec />
      <Tech />
      <Intro />
      <Footer />

    </div>
  )
}

export default App