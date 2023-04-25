// settings slice

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"
import { ContentTypes } from "../types"

interface SettingsState {
  type: ContentTypes,
  contentFont: string,
}

const initialState: SettingsState = {
  type: "en",
  contentFont: "default",
}

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setContentType: (state, action: PayloadAction<ContentTypes>) => {
      state.type = action.payload
    },
    setContentFont: (state, action: PayloadAction<string>) => {
      state.contentFont = action.payload
    }
  },
})

export const { setContentType,
  setContentFont
 } = settingsSlice.actions

export const selectContentType = (state: RootState) => state.settings.type
export const selectContentFont = (state: RootState) => state.settings.contentFont

export default settingsSlice.reducer
