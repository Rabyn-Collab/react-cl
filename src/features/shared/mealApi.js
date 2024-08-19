import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const mealApi = createApi({
  reducerPath: 'mealApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/api/json/v1/1/filter.php' }),

  endpoints: (builder) => ({

    categoryData: builder.query({
      query: (q) => ({
        url: '/',
        params: {
          c: q
        },
        method: 'GET'
      })
    })





  })




});


export const { useCategoryDataQuery } = mealApi;