// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const designationService = createApi({
  reducerPath: 'designationService',
    tagTypes: ['designation'], // Correctly define tag types here
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7161/api/', }),
  endpoints: (builder) => ({
    // query for pokemon data
    // mutations for login and register
    createDesignation: builder.mutation({
      query: (data) => {
        return {
          url: `designations`,
          method: 'POST',
          body:data,
        }
      },
      invalidatesTags: ['designation']
    }),
    editDesignation: builder.mutation({
      query: (data) => {
        return {
          url: `designations`,
          method: 'put',
          body:data,
        }
      },
            invalidatesTags: ['designation']

    }),
    deleteDesignation: builder.mutation({
      query: (id) => {
        return {
          url: `designations/${id}`,
          method: 'delete',
        }
      },
      invalidatesTags: ['designation']
    }),

    getAllDesignation: builder.query({
      query: () => `designations`,
      providesTags: ['designation']
    }),
    getDesignationById: builder.query({
      query: (id) => `designations/${id}`, // Use a template literal to insert the id
      providesTags: ['designation']
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useCreateDesignationMutation,
  useGetAllDesignationQuery,
  useEditDesignationMutation,
  useGetDesignationByIdQuery,
  useDeleteDesignationMutation
  } = designationService;