import { createSlice } from "@reduxjs/toolkit"
import Config from "../constants/Config"
import { RootState } from "./store"
import uuid from "react-native-uuid"

interface completedItem {
  date: string,
  value: string,
  id: string,
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
        (item: completedItem) => item.id !== action.payload
      )
    },
    addCompleted: (state, action: { payload: string }) => {
      const newItem: completedItem = {
        date: new Date().toISOString().slice(0, 10),
        value: action.payload,
        id: uuid.v4() as string,
      }
      state.completed.push(newItem)
    },
    removeExtraCompleted: (state) => {
      if (state.completed.length > Config.reviewListLimit) {
        state.completed = state.completed.slice(
          state.completed.length - Config.reviewListLimit
        )
      }
    },
  },
})

export const {
  setCompleted,
  removeCompleted,
  addCompleted,
  removeExtraCompleted,
} = reviewSlice.actions
export const selectCompleted = (state: RootState) => state.review.completed

export default reviewSlice.reducer
