import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import quizService from './quizzesService'

const initialState = {
  quizzes: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
}

export const getAllQuizzes = createAsyncThunk(
  'quizzes/getAll',
  async (_, thunkAPI) => {
    try {
      return await quizService.getAllQuizzes()
    } catch (error: Error | any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const quizSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: { reset: (state) => initialState },
  extraReducers: (builder) => {
    builder
      .addCase(getAllQuizzes.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllQuizzes.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.quizzes = action.payload
      })
      .addCase(getAllQuizzes.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as string
      })
  },
})

export const { reset } = quizSlice.actions
export default quizSlice.reducer
