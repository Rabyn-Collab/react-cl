import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Page1 from './pages/sub-pages/Page1';
import Page2 from './pages/sub-pages/Page2';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: 'page1',
          element: <Page1 />
        },
        {
          path: 'page2',
          element: <Page2 />
        },
      ]
    },
    {
      path: 'contact-page',
      element: <Contact />
    },
    {
      path: 'about-page',
      element: <About />
    }
  ]);



  return <RouterProvider router={router} />
}

export default App