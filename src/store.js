import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthApi } from '../services/userAuthApi'
import userReducer from '../features/userSlice'
import authReducer from '../features/authSlice'
import { feedsApi } from '../services/feedsApi'
import { gardensApi } from '../services/gardensApi'
import { complaintApi } from '../services/complaintApi'
import notificationReducer from '../features/notificationSlice'

export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    user: userReducer,
    auth: authReducer,
    notification: notificationReducer,
    [feedsApi.reducerPath]: feedsApi.reducer,
    [gardensApi.reducerPath]: gardensApi.reducer,
    [complaintApi.reducerPath]: complaintApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware,feedsApi.middleware, gardensApi.middleware, complaintApi.middleware),
})
setupListeners(store.dispatch)
