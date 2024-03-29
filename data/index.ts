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
}): DataItem | undefined {
  const strings = getStrings({ type })
  const str = strings.find((item) => item.date === date)
  return str
}

export default data
