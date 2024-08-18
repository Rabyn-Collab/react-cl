import { Button, Input, Typography } from '@material-tailwind/react'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { useSignUpUserMutation } from './authApi';
import { toast } from 'react-toastify';



const SignUp = () => {

  const [signUpUser, { isLoading }] = useSignUpUserMutation();
  const nav = useNavigate();

  const registerSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    fullname: Yup.string().required()
  });

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: ''
    },
    onSubmit: async (val) => {
      try {
        const response = await signUpUser(val).unwrap();
        nav(-1);
        toast.success('successfully registered');
      } catch (err) {
        toast.error(`${err.data?.message}`);
      }
    },
    validationSchema: registerSchema
  });




  return (
    <div className='max-w-sm p-10'>

      <Typography variant='h4' className='mb-5'>SignUp Form</Typography>
      <form onSubmit={formik.handleSubmit} className='space-y-7'>
        <div >
          <Input
            onChange={formik.handleChange}
            value={formik.values.fullname}
            name='fullname'
            label="FullName" />
          {formik.errors.fullname && formik.touched.fullname && <p className='text-pink-400'>{formik.errors.fullname}</p>}
        </div>
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
            Already have an Account ?{" "}
            <button onClick={() => nav(-1)} className="font-medium text-gray-900">
              Login
            </button>
          </Typography>
        </div>






        <Button loading={isLoading} type='submit'>Submit</Button>


      </form>




    </div>
  )
}

export default SignUp