import { configureStore } from "@reduxjs/toolkit";
import todayReducer from '../redux/todaySlice'
import reviewSlice from "./reviewSlice";
import customSlice from "./customSlice";
import persist from "../utils/persist"

const store = configureStore({
  reducer: {
    custom: customSlice,
    today: todayReducer,
    review: reviewSlice
  }
})

// persist store to local storage
store.subscribe(() => {
  persist.saveState(store.getState())
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
