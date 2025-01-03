// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const departmentTypeService = createApi({
  reducerPath: 'departmentTypeService',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7161/api/', }),
  endpoints: (builder) => ({
    // query for pokemon data
    // mutations for login and register
    tag: 'departmentType',
    createDepartmentType: builder.mutation({
      query: (data) => {
        return {
          url: `departmentTypes`,
          method: 'POST',
          body:data,
        }
      },
      invalidatesTags: ['departmentType']
    }),
    editDepartmentType: builder.mutation({
      query: (data) => {
        return {
          url: `departmentTypes`,
          method: 'put',
          body:data,
        }
      },
            invalidatesTags: ['departmentType']

    }),
    deleteDepartmentType: builder.mutation({
      query: (id) => {
        return {
          url: `departmentTypes/${id}`,
          method: 'delete',
        }
      },
      invalidatesTags: ['departmentType']
    }),

    getAllDepartmentTypes: builder.query({
      query: () => `departmentTypes`,
      providesTags: ['departmentType']
    }),
    getDepartmentTypeById: builder.query({
      query: (id) => `departmentTypes/${id}`, // Use a template literal to insert the id
      providesTags: ['departmentType']
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useCreateDepartmentTypeMutation,useGetAllDepartmentTypesQuery,useEditDepartmentTypeMutation,useGetDepartmentTypeByIdQuery, useDeleteDepartmentTypeMutation} = departmentTypeService