import React from 'react'
import { useGetAllProductsQuery } from './productApi'
import ProductCard from './ProductCard';

const ProductsPage = () => {
  const { isLoading, error, data } = useGetAllProductsQuery();

  if (isLoading) {
    return <h1>Loading....</h1>
  }
  return (
    <div>

      {data.map((product) => {
        return <ProductCard product={product} />;
      })}



    </div>
  )
}

export default ProductsPage