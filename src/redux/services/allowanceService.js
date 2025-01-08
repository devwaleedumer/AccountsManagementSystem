// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const allowanceService = createApi({
  reducerPath: 'allowanceService',
    tagTypes: ['allowance'], // Correctly define tag types here
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7161/api/', }),
  endpoints: (builder) => ({
    // query for pokemon data
    // mutations for login and register
    createAllowance: builder.mutation({
      query: (data) => {
        return {
          url: `allowances`,
          method: 'POST',
          body:data,
        }
      },
      invalidatesTags: ['allowance']
    }),
    editAllowance: builder.mutation({
      query: (data) => {
        return {
          url: `allowances`,
          method: 'put',
          body:data,
        }
      },
            invalidatesTags: ['allowance']

    }),
    deleteAllowance: builder.mutation({
      query: (id) => {
        return {
          url: `allowances/${id}`,
          method: 'delete',
        }
      },
      invalidatesTags: ['allowance']
    }),

    getAllAllowances: builder.query({
      query: () => `allowances`,
      providesTags: ['allowance']
    }),
    getAllowanceById: builder.query({
      query: (id) => `allowances/${id}`, // Use a template literal to insert the id
      providesTags: ['allowance']
    }),
    employeeAllowance: builder.query({
      query: (id) => `allowances/get-employee-allowances/${id}`, 
      providesTags: ['allowance']
    }),
     getAllEmployeeAllowance : builder.query({
       query: (id) => `allowances/employee/${id}`, 
      providesTags: ['allowance']
    })
    ,
     createEmployeeAllowance : builder.mutation({
       query: ({allowanceId,employeeId}) => 
       {
          return {
            url: `allowances/employee/${employeeId}`,
            body: {allowanceId: allowanceId},
            method: "POST"
          }
       }, 
      invalidatesTags: ['allowance']
    }),
       deleteEmployeeAllowance : builder.mutation({
       query: ({allowanceId,employeeId}) => 
       {
          return {
            url: `allowances/${allowanceId}/employee/${employeeId}`,
            method: "DELETE"
          }
       }, 
      invalidatesTags: ['allowance']
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useCreateAllowanceMutation,
  useGetAllAllowancesQuery,
  useEditAllowanceMutation,
  useGetAllowanceByIdQuery,
  useDeleteAllowanceMutation,
  useEmployeeAllowanceQuery,
  useCreateEmployeeAllowanceMutation,
  useGetAllEmployeeAllowanceQuery,
  useDeleteEmployeeAllowanceMutation
  } = allowanceService;