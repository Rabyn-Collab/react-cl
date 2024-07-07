import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

import RootLayout from './components/RootLayout';
import DetailPage from './pages/DetailPage';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'detail/:id',
          element: <DetailPage />
        },
        {
          path: 'contact-page',
          element: <Contact />
        },
        {
          path: 'about-page',
          element: <About />
        }
      ]
    },

  ]);



  return <RouterProvider router={router} />
}

export default App