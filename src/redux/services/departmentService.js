// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const departmentService = createApi({
  reducerPath: 'departmentService',
    tagTypes: ['department'], // Correctly define tag types here
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7161/api/', }),
  endpoints: (builder) => ({
    // query for pokemon data
    // mutations for login and register
    createDepartment: builder.mutation({
      query: (data) => {
        return {
          url: `departments`,
          method: 'POST',
          body:data,
        }
      },
      invalidatesTags: ['department']
    }),
    editDepartment: builder.mutation({
      query: (data) => {
        return {
          url: `departments`,
          method: 'put',
          body:data,
        }
      },
            invalidatesTags: ['department']

    }),
    deleteDepartment: builder.mutation({
      query: (id) => {
        return {
          url: `departments/${id}`,
          method: 'delete',
        }
      },
      invalidatesTags: ['department']
    }),

    getAllDepartments: builder.query({
      query: () => `departments`,
      providesTags: ['department']
    }),
    getDepartmentById: builder.query({
      query: (id) => `departments/${id}`, // Use a template literal to insert the id
      providesTags: ['department']
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useCreateDepartmentMutation,
  useGetAllDepartmentsQuery,
  useEditDepartmentMutation,
  useGetDepartmentByIdQuery,
  useDeleteDepartmentMutation
  } = departmentService;