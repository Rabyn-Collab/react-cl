import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../constants/api_url';



export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/api/products` }),
  endpoints: (builder) => ({

    getAllProducts: builder.query({
      query: (val) => ({
        url: '/',

        method: 'GET'
      })
    }),

    getProductById: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: 'GET'
      })
    }),

    addProduct: builder.mutation({
      query: (q) => ({
        url: '/',
        body: q.body,
        headers: {
          Authorization: q.token
        },
        method: 'POST'
      })
    }),

    updateProduct: builder.mutation({
      query: (q) => ({
        url: `/${q.id}`,
        body: q.body,
        headers: {
          Authorization: q.token
        },
        method: 'PATCH'
      })
    }),


    removeProduct: builder.query({
      query: (q) => ({
        url: `/${q.id}`,
        headers: {
          Authorization: q.token
        },
        method: 'DELETE'
      })
    }),





  })

});


export const { useGetAllProductsQuery, useGetProductByIdQuery, useUpdateProductMutation, useRemoveProductQuery, useAddProductMutation } = productApi;