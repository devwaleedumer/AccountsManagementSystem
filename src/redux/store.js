import { configureStore } from '@reduxjs/toolkit'
import { authService } from './services/authService'
import { setupListeners } from '@reduxjs/toolkit/query'
import { departmentTypeService } from './services/departmentTypeService'
import { departmentService } from './services/departmentService'
import { designationService } from './services/designationService'
import { basePayService } from './services/basicPaysService'
import { employeeService } from './services/employeeService'
import { employeeTypeService } from './services/employeeTypeService'
import { deductionService } from './services/deductionService'
import { allowanceService } from './services/allowanceService'

export const store = configureStore({
  reducer: {
    // Add the generated auth reducer to the store
    [authService.reducerPath]: authService.reducer,
    [departmentTypeService.reducerPath]: departmentTypeService.reducer,
    [departmentService.reducerPath]: departmentService.reducer,
    [designationService.reducerPath]: designationService.reducer,
    [basePayService.reducerPath]: basePayService.reducer,
    [employeeService.reducerPath]: employeeService.reducer,
    [employeeTypeService.reducerPath]: employeeTypeService.reducer,
    [deductionService.reducerPath]: deductionService.reducer,
    [allowanceService.reducerPath]: allowanceService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authService.middleware)
  .concat(departmentTypeService.middleware)
  .concat(departmentService.middleware)
  .concat(basePayService.middleware)
  .concat(designationService.middleware)
  .concat(employeeService.middleware)
  .concat(employeeTypeService.middleware)
  .concat(allowanceService.middleware)
  .concat(deductionService.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)