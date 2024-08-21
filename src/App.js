import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './ui/RootLayout';
import Login from './features/auth/Login';
import SignUp from './features/auth/SignUp';
// import { useGetAllUsersQuery } from './features/auth/authApi';

const App = () => {



  // const { isError, isLoading, data, error } = useGetAllUsersQuery('hello jee see', { pollingInterval: 3000 });

  // console.log(data);
  // const g = () => ({
  //   name: 'lio'
  // });


  // const m = g();

  // console.log(m);


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [

        {
          path: 'login',
          element: <Login />
        },

        {
          path: 'register',
          element: <SignUp />
        },




      ]
    }
  ]);
  return <RouterProvider router={router} />
}

export default App