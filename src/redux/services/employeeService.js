// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const employeeService = createApi({
  reducerPath: 'employeeService',
    tagTypes: ['employee'], // Correctly define tag types here
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7161/api/', }),
  endpoints: (builder) => ({
    // query for pokemon data
    // mutations for login and register
    createEmployee: builder.mutation({
      query: (data) => {
        return {
          url: `employees`,
          method: 'POST',
          body:data,
        }
      },
      invalidatesTags: ['employee']
    }),
    editEmployee: builder.mutation({
      query: (data) => {
        return {
          url: `employees`,
          method: 'put',
          body:data,
        }
      },
            invalidatesTags: ['employee']

    }),
    deleteEmployee: builder.mutation({
      query: (id) => {
        return {
          url: `employees/${id}`,
          method: 'delete',
        }
      },
      invalidatesTags: ['employee']
    }),

    getAllEmployees: builder.query({
      query: () => `employees`,
      providesTags: ['employee']
    }),
    getEmployeeById: builder.query({
      query: (id) => `employees/${id}`, // Use a template literal to insert the id
      providesTags: ['employee']
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useCreateEmployeeMutation,
  useGetAllEmployeesQuery,
  useEditEmployeeMutation,
  useGetEmployeeByIdQuery,
  useDeleteEmployeeMutation
  } = employeeService;