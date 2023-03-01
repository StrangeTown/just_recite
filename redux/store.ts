import { configureStore } from "@reduxjs/toolkit";
import todayReducer from '../redux/todaySlice'
import reviewSlice from "./reviewSlice";
import persist from "../utils/persist"

const store = configureStore({
  reducer: {
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
