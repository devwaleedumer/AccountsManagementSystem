// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const departmentTypeService = createApi({
  reducerPath: 'departmentTypeService',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7161/api/', }),
  endpoints: (builder) => ({
    // query for pokemon data
    // mutations for login and register
    createDepartmentType: builder.mutation({
      query: (data) => {
        return {
          url: `departmentTypes`,
          method: 'POST',
          body:data,
        }
      }
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useCreateDepartmentTypeMutation} = departmentTypeService