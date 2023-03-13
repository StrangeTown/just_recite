import get from "lodash.get"
import Config from "../constants/Config"
import { setCompleted } from "../redux/reviewSlice"
import store, { RootState } from "../redux/store"
import { setDate, setProgress, setReviewCompleted } from "../redux/todaySlice"
import persist from "../utils/persist"

const initToday = (state: any) => {
  const todayProgress = get(state, "today.progress", [])
  const todayDate = get(state, "today.date", "")
  const todayReviewCompleted = get(state, "today.reviewCompleted", [])

  // '2023-01-01'
  const today = new Date().toISOString().slice(0, 10)

  if (todayDate !== today) {
    store.dispatch(setDate(today))
    return
  }

  store.dispatch(setDate(todayDate))
  store.dispatch(
    setProgress(
      todayProgress.length !== Config.todayTotalTimes
        ? Config.getInitialTodayProgress()
        : todayProgress
    )
  )
  store.dispatch(setReviewCompleted(todayReviewCompleted))
}

const initReview = (state: any) => {
  const completed = get(state, "review.completed", [])
  store.dispatch(setCompleted(completed))
}

const initStateFromLocalStorage = async () => {
  const state = await persist.getStoredState()
  if (state) {
    initToday(state)
    initReview(state)
  }
}

export default {
  initStateFromLocalStorage,
}
