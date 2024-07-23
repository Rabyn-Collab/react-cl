import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

  const { blogs } = useSelector((state) => state.blogSlice);
  console.log(blogs);
  return (
    <div>



    </div>
  )
}

export default Home