// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const employeeTypeService = createApi({
  reducerPath: 'employeeTypeService',
    tagTypes: ['employeeType'], // Correctly define tag types here
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7161/api/', }),
  endpoints: (builder) => ({
    // query for pokemon data
    // mutations for login and register
    createEmployeeType: builder.mutation({
      query: (data) => {
        return {
          url: `employeeTypes`,
          method: 'POST',
          body:data,
        }
      },
      invalidatesTags: ['employeeType']
    }),
    editEmployeeType: builder.mutation({
      query: (data) => {
        return {
          url: `employeeTypes`,
          method: 'put',
          body:data,
        }
      },
            invalidatesTags: ['employeeType']

    }),
    deleteEmployeeType: builder.mutation({
      query: (id) => {
        return {
          url: `employeeTypes/${id}`,
          method: 'delete',
        }
      },
      invalidatesTags: ['employeeType']
    }),

    getAllEmployeeType: builder.query({
      query: () => `employeeTypes`,
      providesTags: ['employeeType']
    }),
    getEmployeeTypeById: builder.query({
      query: (id) => `employeeTypes/${id}`, // Use a template literal to insert the id
      providesTags: ['employeeType']
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useCreateEmployeeTypeMutation,
  useGetAllEmployeeTypeQuery,
  useEditEmployeeTypeMutation,
  useGetEmployeeTypeByIdQuery,
  useDeleteEmployeeTypeMutation
  } = employeeTypeService;