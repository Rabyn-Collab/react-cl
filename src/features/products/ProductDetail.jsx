import React from 'react'
import { useParams } from 'react-router';
import { Rating } from '@material-tailwind/react';
import { baseUrl } from '../../constants/api_url';
import { useGetProductByIdQuery } from './productApi';
import AddCart from '../cart/AddCart';


const ProductDetail = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useGetProductByIdQuery(id);

  if (isLoading) {
    return <h1>Loading....</h1>
  }

  console.log(data);


  return (
    <>
      <div className='grid grid-cols-3 p-4 items-start gap-10'>

        <div className="image">
          <img className='w-full' src={`${baseUrl}${data.image}`} alt="" />
        </div>
        <div className="info space-y-3">
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <p>Rs.{data.price}</p>
          <Rating value={data.rating} readonly />
        </div>

        {data && <AddCart product={data} />}




      </div>
      {/* <ProductReview user={user} id={product._id} reviews={product.reviews} /> */}
    </>
  )
}

export default ProductDetail