// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const deductionService = createApi({
  reducerPath: 'deductionService',
    tagTypes: ['deduction'], // Correctly define tag types here
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7161/api/', }),
  endpoints: (builder) => ({
    // query for pokemon data
    // mutations for login and register
    createDeduction: builder.mutation({
      query: (data) => {
        return {
          url: `deductions`,
          method: 'POST',
          body:data,
        }
      },
      invalidatesTags: ['deduction']
    }),
    editDeduction: builder.mutation({
      query: (data) => {
        return {
          url: `deductions`,
          method: 'put',
          body:data,
        }
      },
            invalidatesTags: ['deduction']

    }),
    deleteDeduction: builder.mutation({
      query: (id) => {
        return {
          url: `deductions/${id}`,
          method: 'delete',
        }
      },
      invalidatesTags: ['deduction']
    }),

    getAllDeductions: builder.query({
      query: () => `deductions`,
      providesTags: ['deduction']
    }),
    getDeductionById: builder.query({
      query: (id) => `deductions/${id}`, // Use a template literal to insert the id
      providesTags: ['deduction']
    }),
    employeeDeductions: builder.query({
      query: (id) => `deductions/get-employee-deductions/${id}`, 
      providesTags: ['employee']
    }),
    getAllEmployeeDeduction : builder.query({
       query: (id) => `deductions/employee/${id}`, 
      providesTags: ['deduction']
    }),
    getAllEmployeeDeductionAndAllowance : builder.query({
       query: () => `deductions/allowances-deductions`, 
      providesTags: ['deduction']
    }),
     createEmployeeDeduction : builder.mutation({
       query: ({allowanceId,employeeId}) => 
       {
          return {
            url: `deductions/employee/${employeeId}`,
            body: {allowanceId: allowanceId},
            method: "POST"
          }
       }, 
      invalidatesTags: ['deduction']
    }),
    deleteEmployeeDeduction : builder.mutation({
       query: ({deductionId,employeeId}) => 
       {
          return {
            url: `deductions/${deductionId}/employee/${employeeId}`,
            method: "DELETE"
          }
       }, 
      invalidatesTags: ['deduction']
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useCreateDeductionMutation,
  useGetAllDeductionsQuery,
  useEditDeductionMutation,
  useGetDeductionByIdQuery,
  useDeleteDeductionMutation,
  useEmployeeDeductionsQuery,
  useGetAllEmployeeDeductionQuery,
  useCreateEmployeeDeductionMutation,
  useDeleteEmployeeDeductionMutation,
  useGetAllEmployeeDeductionAndAllowanceQuery
  } = deductionService;