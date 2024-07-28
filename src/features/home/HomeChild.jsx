import React, { memo } from 'react'

const HomeChild = () => {

  console.log('render child');
  return (
    <div>

      <h1>THis is home Child</h1>
    </div>
  )
}

export default memo(HomeChild)