import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/RootLayout';
import HomePage from './pages/HomePage';
import ItemByCategory from './pages/ItemByCategory';
import ItemDetail from './pages/ItemDetail';

const App = () => {

  // const age = 90;

  // const obj = {
  //   name: 'ram',
  //   //age: age
  //   age
  // };

  // console.log(obj);

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
          path: 'category-item/:cata',
          element: <ItemByCategory />
        },
        {
          path: 'item-detail/:id',
          element: <ItemDetail />
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />
}

export default App