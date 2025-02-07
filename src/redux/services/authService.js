// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const authService = createApi({
  reducerPath: 'authService',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7161/api/', }),
  endpoints: (builder) => ({
    // query for pokemon data
    // mutations for login and register
    login: builder.mutation({
      query: (data) => {
        return {
          url: `Tokens/get-token-cookie`,
          method: 'POST',
          body:data,
        }
      }
    }),
      register: builder.mutation({
      query: (data) => {
        return {
          url: `Accounts/register`,
          method: 'POST',
          body:data,
        }
      }
    }),
      forgetPassword: builder.mutation({
      query: (data) => {
        return {
          url: `Accounts/forget`,
          method: 'POST',
          body:data,
        }
      
        
      }
    }),
      resetPassword: builder.mutation({
      query: (data) => {
        return {
          url: `Accounts/reset`,
          method: 'POST',
          body:data,
        }
      
        
      }
    }),

    getAllUsersAsync: builder.query({
      query: () => {
        return {
          url: `users`,
          method: 'GET',
        }
      }
    }),
      getUserMeAsync: builder.query({
      query: () => {
        return {
          url: `users/me`,
          method: 'GET',
        }
      }
    })

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useLoginMutation,useRegisterMutation,useGetAllUsersAsyncQuery,useGetUserMeAsyncQuery,useForgetPasswordMutation,useResetPasswordMutation} = authService