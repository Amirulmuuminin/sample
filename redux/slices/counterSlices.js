import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getPost = createAsyncThunk(
    'users/fetchByIdStatus',
    async (thunkAPI) => {
      const response = await axios.get("/api/getPesan")
      return response.data
    }
  )

const initialState = {
  value: 0,
  post: [],
  isComplete: false
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getPost.fulfilled, (state, action) => {
      // Add user to the state array
      state.post = action.payload
      state.isComplete = true
    })
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer