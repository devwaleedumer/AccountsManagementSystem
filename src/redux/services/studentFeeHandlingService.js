// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const studentFeeHandlingService = createApi({
  reducerPath: 'studentFeeHandlingService',
    tagTypes: ['studentFeeHandling'], // Correctly define tag types here
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7161/api/', }),
  endpoints: (builder) => ({
    // query for pokemon data
    // mutations for login and register
    createStudentFeeHandling: builder.mutation({
      query: (data) => {
        return {
          url: `studentFeeHandlings`,
          method: 'POST',
          body:data,
        }
      },
      invalidatesTags: ['studentFeeHandling']
    }),
    editStudentFeeHandling: builder.mutation({
      query: (data) => {
        return {
          url: `studentFeeHandlings`,
          method: 'put',
          body:data,
        }
      },
            invalidatesTags: ['studentFeeHandling']

    }),
    deleteStudentFeeHandling: builder.mutation({
      query: (id) => {
        return {
          url: `studentFeeHandlings/${id}`,
          method: 'delete',
        }
      },
      invalidatesTags: ['studentFeeHandling']
    }),

    getAllStudentFeeHandling: builder.query({
      query: () => `studentFeeHandlings`,
      providesTags: ['studentFeeHandling']
    }),
    getStudentFeeHandlingById: builder.query({
      query: (id) => `studentFeeHandlings/${id}`, // Use a template literal to insert the id
      providesTags: ['studentFeeHandling']
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useCreateStudentFeeHandlingMutation,
  useGetAllStudentFeeHandlingQuery,
  useEditStudentFeeHandlingMutation,
  useGetStudentFeeHandlingByIdQuery,
  useDeleteStudentFeeHandlingMutation
  } = studentFeeHandlingService;