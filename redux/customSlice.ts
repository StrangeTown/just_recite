import { createSlice } from "@reduxjs/toolkit"
import { DataItem } from "../types"
import { RootState } from "./store"

interface customDataState {
  items: DataItem[]
}

const initialState: customDataState = {
  items: [
    {
      date: "2023-03-27",
      value: "test",
    },
  ],
}

export const customSlice = createSlice({
  name: "custom",
  initialState,
  reducers: {
    setItems: (state, action: { payload: DataItem[] }) => {
      state.items = action.payload
    },
    addItem: (state, action: { payload: DataItem }) => {
      // replace if exists, add if not
      const index = state.items.findIndex(
        (item: DataItem) => item.date === action.payload.date
      )
      if (index !== -1) {
        const value = action.payload.value
        if (value === "") {
          state.items.splice(index, 1)
        } else {
          state.items[index] = action.payload
        }
      } else {
        state.items.push(action.payload)
      }
    },
    removeOutdatedItems: (state) => {
      state.items = state.items.filter((item) => {
        const date = new Date(item.date)
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        return date >= today
      })
    },
  },
})

export const { setItems, addItem, removeOutdatedItems } = customSlice.actions
export const selectCustomItems = (state: RootState) => state.custom.items
export default customSlice.reducer
