import { Button, Checkbox, Input, Option, Radio, Rating, Select, Textarea, Typography } from '@material-tailwind/react'
import { nanoid } from '@reduxjs/toolkit';
import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { addBlog } from './blogSlice';
import { useNavigate, useParams } from 'react-router';
import { checkData, radioData } from './AddForm';



const EditForm = () => {
  const { id } = useParams();
  const { blogs } = useSelector((state) => state.blogSlice);

  const blog = blogs.find((blog) => blog.id === id);



  const dispatch = useDispatch();
  const nav = useNavigate();

  const blogSchema = Yup.object({
    title: Yup.string().max(100).required(),
    // title: Yup.string().max(100).matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, 'valid').required('title is required'),
    detail: Yup.string().required(),
    blogType: Yup.string().required(),
    colors: Yup.array().min(1).required(),
    country: Yup.string().required(),
    rating: Yup.number().required(),
  });

  const formik = useFormik({
    initialValues: {
      title: blog.title,
      detail: blog.detail,
      blogType: blog.blogType,
      colors: blog.colors,
      country: blog.country,
      rating: blog.rating
    },
    onSubmit: (val) => {
      dispatch(addBlog({ ...val, id: nanoid() }));
      nav(-1);
    },
    validationSchema: blogSchema
  });




  return (
    <div className='max-w-sm p-10'>


      <form onSubmit={formik.handleSubmit} className='space-y-7'>

        <div >
          <Input
            onChange={formik.handleChange}
            value={formik.values.title}
            name='title'
            label="Blog Title" />
          {formik.errors.title && formik.touched.title && <p className='text-pink-400'>{formik.errors.title}</p>}
        </div>

        <div className="">
          <Typography>Select Blog Type</Typography>


          <div className="flex gap-7">
            {radioData.map((rad, i) => {
              return <Radio key={i}
                checked={formik.values.blogType === rad.value}
                onChange={formik.handleChange}
                value={rad.value}
                color={rad.color}
                name='blogType'
                label={rad.label}
              />
            })}
          </div>

          {formik.errors.blogType && formik.touched.blogType && <p className='text-pink-400'>{formik.errors.blogType}</p>}

        </div>


        <div className="">
          <Typography>Select Colors</Typography>


          <div className="flex gap-7">
            {checkData.map((check, i) => {
              return <Checkbox key={i}
                checked={formik.values.colors.includes(check.value)}
                onChange={formik.handleChange}
                value={check.value}
                color={check.color}
                name='colors'
                label={check.label}
              />
            })}
          </div>

          {formik.errors.colors && formik.touched.colors && <p className='text-pink-400'>{formik.errors.colors}</p>}

        </div>


        <div className="w-72">
          <Select onChange={(e) => {
            formik.setFieldValue('country', e)
          }}
            name='country'

            label="Select Country">
            <Option value='nepal' >Nepal</Option>
            <Option value='india'>India</Option>
            <Option value='china'>China</Option>

          </Select>
          {formik.errors.country && formik.touched.country && <p className='text-pink-400'>{formik.errors.country}</p>}
        </div>

        <div className="">
          <Typography className='tracking-wider mb-1'>Rating</Typography>
          <Rating
            value={formik.values.rating}
            onChange={(e) => formik.setFieldValue('rating', e)}
          />
        </div>



        <div >
          <Textarea
            onChange={formik.handleChange}
            value={formik.values.detail}
            name='detail'
            label="Blog Detail" />
          {formik.errors.detail && formik.touched.detail && <p className='text-pink-400'>{formik.errors.detail}</p>}
        </div>

        <Button type='submit'>Submit</Button>


      </form>




    </div>
  )
}

export default EditForm