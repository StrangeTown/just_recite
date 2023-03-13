import { createSlice } from "@reduxjs/toolkit"
import Config from "../constants/Config"
import { RootState } from "./store"

interface progerssItem {
  duration: number
}
type progress = progerssItem[]

interface reviewCompletedItem {
  date: string
}
type reviewCompleted = reviewCompletedItem[]

interface TodayState {
  progress: progress
  date: string
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
    addReviewCompleted: (state, action: { payload: string }) => {
      if (state.reviewCompleted.find((item) => item.date === action.payload)) {
        return
      }
      state.reviewCompleted.push({ date: action.payload })
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
  addReviewCompleted,
  setReviewCompleted,
} = todaySlice.actions
export const selectProgress = (state: RootState) => state.today.progress
export const selectDate = (state: RootState) => state.today.date
export const selectReviewCompleted = (state: RootState) =>
  state.today.reviewCompleted
export default todaySlice.reducer
