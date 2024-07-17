import React from 'react'
import { moviesData } from '../dummy/data'
import { useNavigate } from 'react-router'


const HomePage = () => {
  const nav = useNavigate();

  return (
    <div className='p-5 grid grid-cols-3 gap-5'>

      {moviesData.map((movie) => {
        return <div key={movie.id} className='space-y-2 mb-4 shadow-xl'>
          <img src={movie.poster} className='h-[200px] w-full' alt="" />
          <div className="info p-4">
            <h1>{movie.title}</h1>
            <div className="flex justify-between">
              <p>{movie.budget}</p>
              <button onClick={() => nav(`/detail-page/${movie.id}`)} className='bg-black text-white px-2 rounded-md py-1 text-sm hover:bg-pink-500'>View Detail</button>
            </div>

          </div>



        </div>
      })}






    </div>
  )
}

export default HomePage