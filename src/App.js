import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/RootLayout';
import HomePage from './pages/HomePage';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />
}

export default App