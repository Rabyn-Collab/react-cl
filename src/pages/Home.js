import React, { useState } from 'react'

const Home = () => {
  // sfdkjndsf

  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  }

  console.log('render');

  return (
    <div>

      <h1>{count}odd number</h1>


      <button onClick={handleAdd}>addN</button>
    </div>
  )
}

export default Home