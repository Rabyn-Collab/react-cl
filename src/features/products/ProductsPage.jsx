import React from 'react'
import { useGetAllProductsQuery } from './productApi'
import ProductCard from './ProductCard';

const ProductsPage = () => {
  const { isLoading, error, data } = useGetAllProductsQuery();

  if (isLoading) {
    return <h1>Loading....</h1>
  }
  return (
    <div className='p-4 grid grid-cols-3 gap-6'>

      {data.map((product) => {
        return <ProductCard product={product} key={product._id} />;
      })}



    </div>
  )
}

export default ProductsPage