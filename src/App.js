import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './ui/RootLayout';
import Home from './features/dashboard/Home';


const App = () => {

  // const j = 'na';


  // const ni = {
  //   [j]: 'jee'
  // };

  // console.log(ni);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    },




  ]);



  return <RouterProvider router={router} />
}

export default App