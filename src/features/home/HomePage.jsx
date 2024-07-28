import React, { useState } from 'react'
import HomeChild from './HomeChild'

const HomePage = () => {
  const [d, setD] = useState(0);
  return (
    <div>
      <h1>{d}</h1>
      <button onClick={() => setD((prev) => prev + 1)}>Increment</button>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, rem consectetur, nostrum illum tempore cum, blanditiis molestias ipsam magni sunt neque dolore enim. Laborum inventore voluptates saepe distinctio impedit ut.</p>

      <HomeChild />



    </div>
  )
}

export default HomePage