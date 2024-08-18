import { Button, Input, Typography } from '@material-tailwind/react'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { useLoginUserMutation } from './authApi';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUser } from '../users/userSlice';


const Login = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
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
    onSubmit: async (val) => {
      try {
        const response = await loginUser(val).unwrap();
        dispatch(setUser(response));
        nav(-1);
        toast.success('successfully logged In');
      } catch (err) {
        toast.error(`${err.data?.message}`);
      }
    },
    validationSchema: loginSchema
  });




  return (
    <div className='max-w-sm p-10'>

      <Typography variant='h4' className='mb-5'>Login Form</Typography>
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
            type='password'
            label="Password" />
          {formik.errors.password && formik.touched.password && <p className='text-pink-400'>{formik.errors.password}</p>}
        </div>





        <div>

          <Typography color="gray" className="mt-4  font-normal">
            Don't have an Account ?{" "}
            <Link to={'/register'}>  <button className="font-medium text-gray-900">
              Sign Up
            </button></Link>
          </Typography>
        </div>






        <Button loading={isLoading} type='submit'>Submit</Button>


      </form>




    </div>
  )
}

export default Login