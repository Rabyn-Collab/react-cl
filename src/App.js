import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import HomePage from './features/home/HomePage';
import RootLayout from './ui/RootLayout';

const App = () => {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },


      ]
    }
  ]);
  return <RouterProvider router={router} />
}

export default App