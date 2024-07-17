import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import RootLayout from './components/RootLayout';
import Detail from './pages/Detail';

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

        {
          path: 'detail-page/:id',
          element: <Detail />
        },


        {
          path: 'about-page',
          element: <About />
        },
        {
          path: 'contact-page',
          element: <Contact />
        }
      ]
    },




  ]);



  return <RouterProvider router={router} />
}

export default App