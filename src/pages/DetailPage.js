import React from 'react'
import { useParams } from 'react-router'

const DetailPage = () => {

  // const person = {
  //   age: 90,
  //   name: 'ram'
  // };
  // const {age, name} = person;
  const { id } = useParams();
  console.log(id);


  return (
    <div>

      <h1>This is Detail Page</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam atque deleniti in sunt cum minus sapiente officia libero labore obcaecati vero, quas maiores temporibus nihil repellendus pariatur odit at voluptatem.</p>




    </div>
  )
}

export default DetailPage