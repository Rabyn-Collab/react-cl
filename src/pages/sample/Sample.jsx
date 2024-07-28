import React from 'react'
import ChildSample from './ChildSample';

const Sample = () => {
  const person = {
    name: 'ram',
    age: 90
  };


  return (
    <div>


      <ChildSample age={100} color='red' />
      <ChildSample age={110} color='green' />



    </div>
  )
}

export default Sample