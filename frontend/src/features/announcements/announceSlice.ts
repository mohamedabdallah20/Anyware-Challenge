import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import announcementService from './announcementService'

const initialState = {
  announcements: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
}

export const getAllAnnouncements = createAsyncThunk(
  'announcements/getAll',
  async (_, thunkAPI) => {
    try {
      return await announcementService.getAllAnnouncements()
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

export const announcementSlice = createSlice({
  name: 'announcement',
  initialState,
  reducers: { reset: (state) => initialState },
  extraReducers: (builder) => {
    builder
      .addCase(getAllAnnouncements.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllAnnouncements.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.announcements = action.payload
      })
      .addCase(getAllAnnouncements.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as string
      })
  },
})

export const { reset } = announcementSlice.actions
export default announcementSlice.reducer
