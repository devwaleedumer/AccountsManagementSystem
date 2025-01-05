// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const basePayService = createApi({
  reducerPath: 'basePayService',
    tagTypes: ['basePay'], // Correctly define tag types here
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7161/api/', }),
  endpoints: (builder) => ({
    // query for pokemon data
    // mutations for login and register
    createBasePay: builder.mutation({
      query: (data) => {
        return {
          url: `basicPays`,
          method: 'POST',
          body:data,
        }
      },
      invalidatesTags: ['basePay']
    }),
    editBasePay: builder.mutation({
      query: (data) => {
        return {
          url: `basicPays`,
          method: 'put',
          body:data,
        }
      },
            invalidatesTags: ['basePay']

    }),
    deleteBasePay: builder.mutation({
      query: (id) => {
        return {
          url: `basicPays/${id}`,
          method: 'delete',
        }
      },
      invalidatesTags: ['basePay']
    }),

    getAllBasePays: builder.query({
      query: () => `basicPays`,
      providesTags: ['basePay']
    }),
    getBasePayById: builder.query({
      query: (id) => `basicPays/${id}`, // Use a template literal to insert the id
      providesTags: ['basePay']
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useCreateBasePayMutation,
  useDeleteBasePayMutation,
  useEditBasePayMutation,
  useGetAllBasePaysQuery,
  useGetBasePayByIdQuery
  } = basePayService;