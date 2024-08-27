import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './ui/RootLayout';
import Login from './features/auth/Login';
import SignUp from './features/auth/SignUp';
import ProductAdmin from './features/admin/ProductAdmin';
import AddForm from './features/admin/AddForm';
import ProductEdit from './features/admin/product_edit/ProductEdit';
import ProductsPage from './features/products/ProductsPage';
import ProductDetail from './features/products/ProductDetail';
import CartPage from './features/cart/CartPage';
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
          index: true,
          element: <ProductsPage />
        },

        {
          path: 'login',
          element: <Login />
        },

        {
          path: 'register',
          element: <SignUp />
        },

        {
          path: 'product-admin',
          element: <ProductAdmin />
        },

        {
          path: 'product-add',
          element: <AddForm />
        },
        {
          path: 'cart-page',
          element: <CartPage />
        },

        {
          path: 'product-detail/:id',
          element: <ProductDetail />
        },

        {
          path: 'product-edit/:id',
          element: <ProductEdit />
        },




      ]
    }
  ]);
  return <RouterProvider router={router} />
}

export default App