import { configureStore } from '@reduxjs/toolkit'
import { authService } from './services/authService'
import { setupListeners } from '@reduxjs/toolkit/query'
import { departmentTypeService } from './services/departmentTypeService'

export const store = configureStore({
  reducer: {
    // Add the generated auth reducer to the store
    [authService.reducerPath]: authService.reducer,
    [departmentTypeService.reducerPath]: departmentTypeService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authService.middleware).concat(departmentTypeService.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)