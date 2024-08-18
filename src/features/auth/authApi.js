import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../constants/api_url';



export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/api/users` }),
  endpoints: (builder) => ({

    getAllUsers: builder.query({
      query: (val) => ({
        url: '/',
        params: {
          data: val
        },
        method: 'GET'
      })
    }),


    loginUser: builder.mutation({
      query: (val) => ({
        url: '/login',
        body: val,
        method: 'POST'
      })
    }),

    signUpUser: builder.mutation({
      query: (val) => ({
        url: '/register',
        body: val,
        method: 'POST'
      })
    })






  })

});


export const { useGetAllUsersQuery, useLoginUserMutation, useSignUpUserMutation } = authApi;