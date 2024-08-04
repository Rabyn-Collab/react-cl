import React from 'react'
import { useSelector } from 'react-redux'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Rating,
  IconButton,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router';

const BlogPage = () => {

  const nav = useNavigate();

  const { blogs } = useSelector((state) => state.blogSlice);


  return (
    <div className='p-4 grid grid-cols-3 gap-7'>

      {blogs.map((blog) => {
        return <Card className="mt-6 " key={blog.id}>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {blog.title}
            </Typography>
            <Typography>
              {blog.detail}
            </Typography>
            <Rating value={blog.rating} readonly className='my-2' />
            <Typography>
              {blog.blogType}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex justify-end gap-4">
            <IconButton onClick={() => nav(`/edit-blog/${blog.id}`)}>
              <i className="fas fa-edit" />
            </IconButton>
            <IconButton>
              <i className="fas fa-trash" />
            </IconButton>
          </CardFooter>
        </Card>
      })}

    </div>
  )
}

export default BlogPage