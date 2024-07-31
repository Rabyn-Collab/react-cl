import React from 'react'
import { useSelector } from 'react-redux'

const BlogPage = () => {

  const { blogs } = useSelector((state) => state.blogSlice);


  return (
    <div>

    </div>
  )
}

export default BlogPage