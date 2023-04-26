import get from "lodash.get"
import Config from "../constants/Config"
import { setCompleted } from "../redux/reviewSlice"
import store, { RootState } from "../redux/store"
import { setDate, setProgress, setReviewCompleted } from "../redux/todaySlice"
import persist from "../utils/persist"
import { removeOutdatedItems, setItems } from "../redux/customSlice"
import { setContentFont, setContentType } from "../redux/settingsSlice"
import { contentFontNames } from "../constants/Fonts"
import { ContentTypes } from "../types"

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

const initCustom = (state: any) => {
  const customItems = get(state, "custom.items", [])
  console.log("customItems", customItems)
  store.dispatch(setItems(customItems))
  store.dispatch(removeOutdatedItems())
}

const initSettings = (state: any) => {
  const contentType: ContentTypes = get(state, "settings.type", "en")
  store.dispatch(setContentType(contentType))

  const contentFont = get(state, "settings.contentFont")
  if (!contentFont) {
    setDefaultFont(contentType)
    return
  } else {
    store.dispatch(setContentFont(contentFont))
  }
}

export const setDefaultFont = (type: ContentTypes) => {
  const defaultFonts: { [key in ContentTypes]: string } = {
    en: contentFontNames.Ubuntu,
    jp: contentFontNames.jpNotoSansJP,
    zh: contentFontNames.Ubuntu,
  }
  store.dispatch(setContentFont(defaultFonts[type]))
}

const initStateFromLocalStorage = async () => {
  const state = await persist.getStoredState()
  if (state) {
    initToday(state)
    initReview(state)
    initCustom(state)
    initSettings(state)
  }
}

export default {
  initStateFromLocalStorage,
}
