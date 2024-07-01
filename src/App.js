import React from 'react'
import Home from './pages/Home'

const App = () => {

  const person = {
    nam: 'hari',
    age: 90
  };

  const { nam, age } = person;

  return (
    <div>

      <Home />


    </div>
  )
}

export default App