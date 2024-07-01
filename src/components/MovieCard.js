import React from 'react'

const MovieCard = ({ title }) => {

  return (
    <div className='w-[300px] shadow-xl'>
      <img src="https://images.unsplash.com/photo-1719401542064-24c6174f7d42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className="p-4">
        <h1>{title}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, doloremque minima quasi consequatur in nobis quam numquam nisi at expedita tempore optio porro velit tenetur, nihil veniam nesciunt! Nesciunt, est!</p>
      </div>
    </div>
  )
}

export default MovieCard