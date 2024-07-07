import React from 'react'
import { useNavigate } from 'react-router';
import { posts } from '../dummy/data';

const Home = () => {

  const nav = useNavigate();


  return (
    <div className='p-2 space-y-2'>

      {posts.map((post, i) => {
        return <div className='shadow-lg p-4 cursor-pointer' key={post.id}>
          <h1>{post.title}</h1>
        </div>
      })}

    </div>
  )
}

export default Home