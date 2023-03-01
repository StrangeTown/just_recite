import get from "lodash.get"
import store from "../redux/store"
import { setProgress } from "../redux/todaySlice"
import persist from "../utils/persist"

const initStateFromLocalStorage = async () => {
  const state = await persist.getStoredState()
  if (state) {
    const todayProgress = get(state, "today.progress", [])
    if (todayProgress.length !== 0) {
      store.dispatch(setProgress(todayProgress))
    }
  }
}

export default {
  initStateFromLocalStorage
}
