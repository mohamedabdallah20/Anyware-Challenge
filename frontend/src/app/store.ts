import { configureStore } from '@reduxjs/toolkit'
import announceReducer from '../features/announcements/announceSlice'
import quizzesReducer from '../features/quizzes/quizzesSlice'
export const store = configureStore({
  reducer: { announce: announceReducer, quizzes: quizzesReducer },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
