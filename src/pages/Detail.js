import React from 'react'
import { useParams } from 'react-router'
import { moviesData } from '../dummy/data';

const Detail = () => {

  const { id } = useParams();

  const data = moviesData.find((movie) => movie.id === Number(id));


  return (
    <div>

      <p>{data.detail}</p>
    </div>
  )
}

export default Detail