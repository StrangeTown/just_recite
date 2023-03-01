import { createSlice } from "@reduxjs/toolkit"
import Config from "../constants/Config"
import { RootState } from "./store"

interface progerssItem {
  duration: number
}
type progress = progerssItem[]

interface TodayState {
  progress: progress
}

const initialState: TodayState = {
  progress: new Array(Config.todayTotalTimes).fill({ duration: 0 }),
}

export const todaySlice = createSlice({
  name: "today",
  initialState,
  reducers: {
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

export const { setProgress, updateProgress } = todaySlice.actions
export const selectProgress = (state: RootState) => state.today.progress
export default todaySlice.reducer
