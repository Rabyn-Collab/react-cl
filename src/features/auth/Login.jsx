import { Button, Input } from '@material-tailwind/react'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { useNavigate } from 'react-router';


const Login = () => {

  const nav = useNavigate();

  const loginSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (val) => {

    },
    validationSchema: loginSchema
  });




  return (
    <div className='max-w-sm p-10'>


      <form onSubmit={formik.handleSubmit} className='space-y-7'>

        <div >
          <Input
            onChange={formik.handleChange}
            value={formik.values.email}
            name='email'
            label="Email" />
          {formik.errors.email && formik.touched.email && <p className='text-pink-400'>{formik.errors.email}</p>}
        </div>
        <div >
          <Input
            onChange={formik.handleChange}
            value={formik.values.password}
            name='password'
            label="Password" />
          {formik.errors.password && formik.touched.password && <p className='text-pink-400'>{formik.errors.password}</p>}
        </div>












        <Button type='submit'>Submit</Button>


      </form>




    </div>
  )
}

export default Login