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
        state.items[index] = action.payload
      } else {
        state.items.push(action.payload)
      }
    },
  },
})

export const { setItems, addItem } = customSlice.actions
export const selectCustomItems = (state: RootState) => state.custom.items
export default customSlice.reducer
