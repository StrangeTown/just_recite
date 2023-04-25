import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { getStrings } from "../data/index"
import get from "lodash.get"
import { useState } from "react"
import { Feather } from "@expo/vector-icons"
import Config from "../constants/Config"
import { useDispatch, useSelector } from "react-redux"
import { selectProgress, updateProgress } from "../redux/todaySlice"
import { addCompleted } from "../redux/reviewSlice"
import { useFonts } from "expo-font"
import { selectCustomItems } from "../redux/customSlice"
import Colors from "../constants/Colors"
import ReciteOptions from "./ReciteOptions"
import { useNavigation } from "@react-navigation/native"
import { selectContentFont, selectContentType } from "../redux/settingsSlice"
import { contentFontNames } from "../constants/Fonts"

interface ReciteProgressProps {}
function ReciteProgress({}: ReciteProgressProps) {
  const progressArr = useSelector(selectProgress)

  let longestDuration = 0
  progressArr.forEach((item) => {
    if (item.duration > longestDuration) {
      longestDuration = item.duration
    }
  })

  return (
    <View style={styles.reciteProgress}>
      {progressArr.map((item, index) => {
        const hasDuration = item.duration > 0
        return (
          <View
            key={index}
            style={[
              styles.reciteProgressItem,
              hasDuration ? styles.reciteProgressItemDone : {},
            ]}
          />
        )
      })}
    </View>
  )
}

interface ReciteActionsProps {
  isReciting: boolean
  onReciteStart: () => void
  onReciteEnd: () => void
  onGoBack: () => void
  isComplete: boolean
}
function ReciteActions({
  isReciting,
  onReciteStart,
  onReciteEnd,
  onGoBack,
  isComplete,
}: ReciteActionsProps) {
  const [timeString, setTimeString] = useState("00:00:00") // with milliseconds
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(
    null
  )

  const handleReciteStart = () => {
    onReciteStart()
    setTimeString("00:00:00")

    const startTime = new Date().getTime()
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const diff = now - startTime
      const seconds = Math.floor(diff / 1000)
      const minutes = Math.floor(seconds / 60)
      const milliseconds = diff % 1000
      const displayMilliseconds = Math.floor(milliseconds / 10)
      const str = `${minutes.toString().padStart(2, "0")}:${(seconds % 60)
        .toString()
        .padStart(2, "0")}:${displayMilliseconds.toString().padStart(2, "0")}`
      requestAnimationFrame(() => {
        setTimeString(str)
      })
    }, 100)
    setTimerInterval(timer)
  }
  const handleReciteEnd = () => {
    onReciteEnd()
    if (timerInterval) {
      clearInterval(timerInterval)
    }
  }

  const handleGoBack = () => {
    onGoBack()
    if (timerInterval) {
      clearInterval(timerInterval)
      setTimeString("00:00:00")
    }
  }

  const goBackVisible = !isReciting && !isComplete

  return (
    <>
      <View style={styles.actions}>
        {goBackVisible && (
          <Feather
            onPress={handleGoBack}
            style={styles.skipBack}
            name="arrow-left"
            size={20}
            color="black"
          />
        )}

        {!isReciting && (
          <TouchableOpacity
            style={styles.reciteStart}
            onPress={handleReciteStart}
          >
            <Text style={styles.reciteStartText}>开始背记</Text>
          </TouchableOpacity>
        )}
        {isReciting && (
          <TouchableOpacity style={styles.reciteEnd} onPress={handleReciteEnd}>
            <Text style={styles.reciteEndText}>{timeString}</Text>
            <Text style={styles.reciteEndText}>结束</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  )
}

interface DateStringProps {
  isCompleted: boolean
}
function DateString({ isCompleted }: DateStringProps) {
  const dateString = new Date().toDateString().slice(4)

  return (
    <>
      <Text style={[styles.date, isCompleted ? styles.dateCompleted : {}]}>
        {dateString}
      </Text>
    </>
  )
}

interface ReciteValuesProps {
  value: string
  isReciting: boolean
  fontFamily?: string
}
const ReciteValues = ({ value, isReciting, fontFamily }: ReciteValuesProps) => {
  const words = value.split(" ")

  // if is reciting, only show the first word every sentence
  const sentenceEndings = [".", "!", "?", ",", ";"]
  let visibleArr: number[] = []
  for (let i = 0; i < words.length; i++) {
    if (isReciting) {
      if (i === 0) {
        visibleArr.push(i)
      } else if (
        sentenceEndings.some((ending) => words[i - 1].endsWith(ending))
      ) {
        visibleArr.push(i)
      }
    } else {
      visibleArr.push(i)
    }
  }

  return (
    <View style={styles.paragraph}>
      {words.map((word, index) => {
        const visible = visibleArr.includes(index)
        return (
          <Text
            key={index}
            style={[
              {
                ...styles.word,
                fontFamily,
              },
              visible ? {} : styles.wordHide,
            ]}
          >
            {word}
          </Text>
        )
      })}
    </View>
  )
}

interface ReciteProps {
  date: string
}
export default function Recite({ date }: ReciteProps) {
  const [isReciting, setIsReciting] = useState(false)
  const dispatch = useDispatch()
  const progressArr = useSelector(selectProgress)
  const customItems = useSelector(selectCustomItems)
  const contentType = useSelector(selectContentType)
  const contentFont = useSelector(selectContentFont)
  const navigation = useNavigation()

  const progressItemsWithDuration = progressArr.filter(
    (item) => item.duration !== 0
  )
  const prevActiveItemIndex = progressItemsWithDuration.length - 1

  // use custom items first if available
  let todayData = customItems.find((item) => item.date === date)
  if (!todayData) {
    // todayData = data.find((item) => item.date === date)
    const strings = getStrings({ type: contentType })
    todayData = strings.find((item) => item.date === date)
  }

  const value = get(todayData, "value", "No data for this date")

  const handleReciteEnd = () => {
    setIsReciting(false)
    const lastIndex = progressArr.length - 1

    if (prevActiveItemIndex === lastIndex) return

    const newIndex = prevActiveItemIndex + 1
    if (newIndex === lastIndex) {
      dispatch(addCompleted(value))
    }

    dispatch(
      updateProgress({
        index: newIndex,
        item: {
          duration: 1,
        },
      })
    )
  }
  const handleGoBack = () => {
    dispatch(
      updateProgress({
        index: prevActiveItemIndex === -1 ? 0 : prevActiveItemIndex,
        item: {
          duration: 0,
        },
      })
    )
  }

  const isCompleted =
    progressItemsWithDuration.length === Config.todayTotalTimes

  const [fontsLoaded] = useFonts({
    "Ubuntu Medium": require("../assets/fonts/Ubuntu/Ubuntu-Medium.ttf"),
    "Ubuntu Regular": require("../assets/fonts/Ubuntu/Ubuntu-Regular.ttf"),
    "Ubuntu Light Italic": require("../assets/fonts/Ubuntu/Ubuntu-LightItalic.ttf"),
    "Ubuntu Light": require("../assets/fonts/Ubuntu/Ubuntu-Light.ttf"),
    [contentFontNames.Caveat]: require("../assets/fonts/Caveat/static/Caveat-Regular.ttf"),
    [contentFontNames.DancingScript]: require("../assets/fonts/Dancing_Script/static/DancingScript-Regular.ttf"),
    [contentFontNames.PlayfairDisplay]: require("../assets/fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf"),
    [contentFontNames.Roboto]: require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
    [contentFontNames.Satisfy]: require("../assets/fonts/Satisfy/Satisfy-Regular.ttf"),
    [contentFontNames.Ysabeau]: require("../assets/fonts/Ysabeau/static/Ysabeau-Regular.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      {/* Settings Button */}
      <TouchableOpacity
        style={styles.settings}
        onPress={() => {
          navigation.navigate("Settings")
        }}
      >
        <Feather name="settings" size={20} color="#ddd" />
      </TouchableOpacity>

      {/* Date */}
      <DateString isCompleted={isCompleted} />

      {/* Recite Progress */}
      <ReciteProgress />

      {/* Value */}
      <ReciteValues
        value={value}
        isReciting={isReciting}
        fontFamily={contentFont}
      />

      {/* Options */}
      <ReciteOptions item={todayData} />

      {/* Actions */}
      <ReciteActions
        isComplete={isCompleted}
        isReciting={isReciting}
        onReciteStart={() => setIsReciting(true)}
        onReciteEnd={handleReciteEnd}
        onGoBack={handleGoBack}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  settings: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  wordHide: {
    color: "rgba(0,0,0,0.06)",
  },
  paragraph: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  word: {
    fontSize: 20,
    marginHorizontal: 3,
    lineHeight: 30,
    fontFamily: "Ubuntu Regular",
    color: Colors.light.valueColor,
  },
  dateCompleted: {
    textDecorationLine: "line-through",
  },
  date: {
    fontSize: 14,
    textAlign: "center",
    color: Colors.light.darkText,
    fontFamily: "Ubuntu Light Italic",
  },
  skipBack: {
    marginRight: 30,
  },
  timer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  timerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  reciteProgressItem: {
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  reciteProgressItemDone: {
    backgroundColor: Colors.light.primaryColor,
  },
  reciteStartText: {
    color: "white",
  },
  reciteEndText: {
    color: "white",
    textAlign: "center",
  },
  reciteStart: {
    backgroundColor: Colors.light.primaryColor,
    padding: 10,
    borderRadius: 5,
  },
  reciteEnd: {
    backgroundColor: "#c89fa5",
    padding: 10,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 140,
  },
  actions: {
    marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  reciteProgress: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    width: "100%",
  },
})
