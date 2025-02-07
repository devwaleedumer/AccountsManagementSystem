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
    generateAdhocEmployeesSalary: builder.mutation({
      query: () => {
        return {
          url: `Employees/adhoc-employee-salary`,
          method: 'POST',
        }
      },
            invalidatesTags: ['employee']
    }),
    generateContractEmployeesSalary: builder.mutation({
      query: () => {
        return {
          url: `Employees/contract-employee-salary`,
          method: 'POST',
        }
      },
            invalidatesTags: ['employee']
    }),
    generateFixedEmployeesSalary: builder.mutation({
      query: () => {
        return {
          url: `Employees/fixed-employee-salary`,
          method: 'POST',
        }
      },
            invalidatesTags: ['employee']
    }),
    generatePermanentEmployeesSalary: builder.mutation({
      query: () => {
        return {
          url: `Employees/permanent-employee-salary`,
          method: 'POST',
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
      query: (id) => {
    const link = id === undefined ? "employees" : `employees?id=${id}`;
        return {
          url: link,
        }
      },
      providesTags: ['employee']
    }),
    getAllEmployeesByWithDeductionsAndAllowances: builder.query({
      query: (id) =>  `Employees/get-emp-salary-p-a/${id}`,
    })
    ,getEmployeeById: builder.query({
      query: (id) => `employees/${id}`, 
      providesTags: ['employee']
    }),
      employeeAllowances: builder.query({
      query: (id) => `employees/${id}`, 
      providesTags: ['employee']
    }),    
      getEmployeeByIdAllDetails: builder.query({
      query: (id) => `employees/full-details/${id}`, 
      providesTags: ['employee']
    }),    
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useCreateEmployeeMutation,
  useGetAllEmployeesQuery,
  useEditEmployeeMutation,
  useGetEmployeeByIdQuery,
  useDeleteEmployeeMutation,
  useGetAllEmployeesByWithDeductionsAndAllowancesQuery,
  useGenerateAdhocEmployeesSalaryMutation,
  useGetEmployeeByIdAllDetailsQuery,
  useGenerateContractEmployeesSalaryMutation,
  useGenerateFixedEmployeesSalaryMutation,
  useGeneratePermanentEmployeesSalaryMutation,
  useEmployeeAllowancesQuery
  } = employeeService;