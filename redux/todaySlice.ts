import { createSlice } from "@reduxjs/toolkit"
import Config from "../constants/Config"
import { RootState } from "./store"
import { DataItem } from "../types"

interface progerssItem {
  duration: number
}
type progress = progerssItem[]

interface reviewCompletedItem {
  id: string
}
type reviewCompleted = reviewCompletedItem[]

interface TodayState {
  progress: progress
  date: string // as a flag to check if TodayState is for today
  reviewCompleted: reviewCompleted
}

const initialState: TodayState = {
  progress: Config.getInitialTodayProgress(),
  date: "",
  reviewCompleted: [],
}

export const todaySlice = createSlice({
  name: "today",
  initialState,
  reducers: {
    setReviewCompleted: (state, action: { payload: reviewCompleted }) => {
      state.reviewCompleted = action.payload
    },
    toggleReviewCompleted: (state, action: { payload: { id: string } }) => {
      const index = state.reviewCompleted.findIndex(
        (item) => item.id === action.payload.id
      )
      if (index === -1) {
        state.reviewCompleted.push({ id: action.payload.id })
      } else {
        state.reviewCompleted.splice(index, 1)
      }
    },
    setDate: (state, action: { payload: string }) => {
      state.date = action.payload
    },
    setProgress: (state, action) => {
      state.progress = action.payload
    },
    updateProgress: (
      state,
      action: { payload: { index: number; item: progerssItem } }
    ) => {
      state.progress[action.payload.index] = action.payload.item
    },
  },
})

export const {
  setProgress,
  updateProgress,
  setDate,
  toggleReviewCompleted,
  setReviewCompleted,
} = todaySlice.actions

export const selectProgress = (state: RootState) => state.today.progress
export const selectDate = (state: RootState) => state.today.date
export const selectReviewCompleted = (state: RootState) =>
  state.today.reviewCompleted

export default todaySlice.reducer
