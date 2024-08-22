import React from 'react'
import { useGetProductByIdQuery } from '../../products/productApi'
import { useParams } from 'react-router';
import EditForm from './EditForm';

const ProductEdit = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useGetProductByIdQuery(id);

  if (isLoading) {
    return <h1>Loading....</h1>
  }

  return (
    <div>

      <EditForm product={data} />
    </div>
  )
}

export default ProductEdit