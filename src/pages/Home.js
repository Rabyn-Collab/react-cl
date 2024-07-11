import { useFormik } from 'formik'
import React from 'react'


const Home = () => {



  const formik = useFormik({
    initialValues: {
      username: ''
    },
    onSubmit: (val) => {
      console.log(val);
    },
  });
  // sdlkjdsf
  return (
    <div className='p-4 '>



      <form onSubmit={formik.handleSubmit}>

        <input
          name='username'
          value={formik.values.username}
          onChange={formik.handleChange}
          className='border-2 border-black'
          type="text"
          placeholder='your name' />

      </form>




    </div>
  )
}

export default Home