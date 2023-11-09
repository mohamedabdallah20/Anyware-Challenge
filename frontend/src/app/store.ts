import { configureStore } from '@reduxjs/toolkit'
import announceReducer from '../features/announcements/announceSlice'
export const store = configureStore({
  reducer: { announce: announceReducer },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
