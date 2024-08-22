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
      }),
      providesTags: ['Products']
    }),

    getProductById: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: 'GET'
      }),
      providesTags: ['Products']
    }),

    addProduct: builder.mutation({
      query: (q) => ({
        url: '/',
        body: q.body,
        headers: {
          Authorization: q.token
        },
        method: 'POST'
      }),
      invalidatesTags: ['Products']
    }),

    updateProduct: builder.mutation({
      query: (q) => ({
        url: `/${q.id}`,
        body: q.body,
        headers: {
          Authorization: q.token
        },
        method: 'PATCH'
      }),
      invalidatesTags: ['Products']
    }),


    removeProduct: builder.query({
      query: (q) => ({
        url: `/${q.id}`,
        headers: {
          Authorization: q.token
        },
        method: 'DELETE'
      }),
      invalidatesTags: ['Products']
    }),





  })

});


export const { useGetAllProductsQuery, useGetProductByIdQuery, useUpdateProductMutation, useRemoveProductQuery, useAddProductMutation } = productApi;