import { Button, Input, Radio, Textarea, Typography } from '@material-tailwind/react'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';


const AddForm = () => {

  const blogSchema = Yup.object({
    title: Yup.string().required('title is required'),
    detail: Yup.string().required()
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      detail: ''
    },
    onSubmit: (val) => {
      console.log(val);
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

        {/* <div className="">
          <Typography>Select Blog Type</Typography>
          <div className="flex gap-7">
            <Radio color='red' name="type" label="HTML" />
            <Radio color='blue' name="type" label="React" />
          </div>
        </div> */}




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

export default AddForm