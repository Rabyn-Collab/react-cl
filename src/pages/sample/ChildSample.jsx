import React from 'react'

const ChildSample = ({ age, color }) => {




  return (
    <div>

      {age}
      <h1 className={`bg-[${color}]`}>{color}</h1>
    </div>
  )
}

export default ChildSample