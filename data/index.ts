import store from "../redux/store"
import { setDefaultItem } from "../redux/todaySlice"
import { ContentTypes, DataItem } from "../types"
import strings_2023 from "./2023"
import jp_2023 from "./jp/2023"

type Data = DataItem[]
const data: Data = [...strings_2023]

interface GetStringsParams {
  type: ContentTypes
}
export function getStrings({ type }: GetStringsParams): Data {
  switch (type) {
    case "jp":
      return jp_2023
    default:
      return data
  }
}
export function getString({
  type,
  date,
}: {
  type: ContentTypes
  date: string
}): DataItem {
  const defaultItme = store.getState().today.defaultItem
  if (defaultItme) {
    return defaultItme
  }

  const strings = getStrings({ type })
  const str = strings.find((item) => item.date === date)
  let resultItem: DataItem
  const getRandomString = () => {
    const completedDates = store.getState().review.completed.map((item) => item.date)
    const stringsWithoutCompleted = strings.filter(
      (item) => !completedDates.includes(item.date)
    )
    const randomIndex = Math.floor(
      Math.random() * stringsWithoutCompleted.length
    )
    return stringsWithoutCompleted[randomIndex]
  }
  resultItem = str || getRandomString()
  store.dispatch(setDefaultItem(resultItem))
  return resultItem
}

export default data
