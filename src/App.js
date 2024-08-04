import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './ui/RootLayout';
import BlogPage from './features/blog/BlogPage';
import { blogSlice } from './features/blog/blogSlice';
import AddForm from './features/blog/AddForm';
import EditForm from './features/blog/EditForm';

const App = () => {

  // const g = (a, b) => {

  // }

  // g(9, 'n');

  // const callTo = (func, x, y) => {
  //   const res = x + y;
  //   func(res);
  // }

  // const display = (res) => {
  //   console.log(res);
  // }
  // callTo(display, 9, 100);


  // const posts = [
  //   { id: 1, name: 'ram', gender: 'male' },
  //   { id: 2, name: 'sita', gender: 'female' },
  //   { id: 3, name: 'shyam', gender: 'male' },
  // ];

  // const g = {
  //   name: 'ram',
  //   age: 90
  // };

  // // g.id = 9;

  // console.log({ ...g, id: 9 });

  // const c = {
  //   name: 'hari'
  // };
  // c.name = 'shyam';
  // console.log(c);

  // const person = 'hari';
  // person[0] = 's';
  // // const persons = [11, 22, 44, 55];
  // // persons[0] = 99;

  // // console.log(persons);
  // console.log(person);



  // let pers = [
  //   { id: 1, name: 'ram' },
  //   { id: 2, name: 'sita' },
  // ];

  // const n = pers.map((p) => {
  //   return p.id === 1 ? { name: 'shyam', id: 1 } : p;
  // });

  // console.log(n);




  // const persons = [100, 10, 90];
  // persons.push(70);

  // persons.splice(1, 1);

  // console.log(persons);
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
        {
          path: 'add-blog',
          element: <AddForm />
        },

        {
          path: 'edit-blog/:id',
          element: <EditForm />
        },


      ]
    }
  ]);
  return <RouterProvider router={router} />
}

export default App