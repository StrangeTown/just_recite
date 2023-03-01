import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store"

interface completedItem {
  date: string
}

type completed = completedItem[]

interface ReviewState {
  completed: completed
}

const initialState: ReviewState = {
  completed: [],
}

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setCompleted: (state, action: { payload: completed }) => {
      state.completed = action.payload
    },
    removeCompleted: (state, action: { payload: string }) => {
      state.completed = state.completed.filter(
        (item) => item.date !== action.payload
      )
    },
    addCompleted: (state, action: { payload: completedItem }) => {
      if (state.completed.find((item) => item.date === action.payload.date)) {
        return
      }
      state.completed.push(action.payload)
    },
  },
})

export const { setCompleted, removeCompleted, addCompleted } =
  reviewSlice.actions
export const selectCompleted = (state: RootState) => state.review.completed

export default reviewSlice.reducer
