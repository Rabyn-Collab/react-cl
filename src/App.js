import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './ui/RootLayout';
import BlogPage from './features/blog/BlogPage';

const App = () => {
  // const key = 'age';

  // const person = {
  //   [key]: 90
  // };

  // console.log(person);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <BlogPage />
        },


      ]
    }
  ]);
  return <RouterProvider router={router} />
}

export default App