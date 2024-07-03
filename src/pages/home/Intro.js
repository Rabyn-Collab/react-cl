import React from 'react'

const Intro = () => {
  return (
    <div className='space-y-9 my-7'>
      <h1 className='text-3xl font-semibold text-center'>Who Am I</h1>
      <div className='h-[370px] w-[370px] bg-black rounded-full border-[7px] border-green-700 flex justify-center items-center mx-auto'>

        <div className="info text-white">
          <p>Name:Some Person</p>
          <p>Email:someperson@gmail.com</p>
          <p>Tel:9777777</p>
          <p>Age:90</p>
          <p>Experience:python, java, dart</p>

        </div>
      </div>
    </div>
  )
}

export default Intro