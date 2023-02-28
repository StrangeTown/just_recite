import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import data from "../data/index"
import get from "lodash.get"
import { useState } from "react"
import { Feather } from "@expo/vector-icons"

const totalTimes = 10
interface ReciteProgressProps {
  value: number
}
function ReciteProgress({ value }: ReciteProgressProps) {
  return (
    <View style={styles.reciteProgress}>
      {Array.from({ length: totalTimes }, (_, index) => {
        return (
          <View
            key={index}
            style={[
              styles.reciteProgressItem,
              index < value ? styles.reciteProgressItemDone : {},
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
}
function ReciteActions({
  isReciting,
  onReciteStart,
  onReciteEnd,
  onGoBack,
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
      setTimeString(
        `${minutes.toString().padStart(2, "0")}:${(seconds % 60)
          .toString()
          .padStart(2, "0")}:${displayMilliseconds.toString().padStart(2, "0")}`
      )
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

  return (
    <>
      <View style={styles.timer}>
        <Text style={styles.timerText}>{timeString}</Text>
      </View>

      <View style={styles.actions}>
        <Feather
          onPress={handleGoBack}
          style={styles.skipBack}
          name="arrow-left"
          size={20}
          color="black"
        />

        {!isReciting && (
          <TouchableOpacity
            style={styles.reciteStart}
            onPress={handleReciteStart}
          >
            <Text style={styles.reciteStartText}>背记</Text>
          </TouchableOpacity>
        )}
        {isReciting && (
          <TouchableOpacity style={styles.reciteEnd} onPress={handleReciteEnd}>
            <Text style={styles.reciteEndText}>结束</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  )
}

interface ReciteProps {
  date: string
}
export default function Recite({ date }: ReciteProps) {
  const [isReciting, setIsReciting] = useState(false)
  const [reciteProgress, setReciteProgress] = useState(0)

  const currentYear = new Date().getFullYear().toString()
  const dataYear = data[currentYear]
  const dataDate = dataYear.find((item: { date: string }) => item.date === date)

  const value = get(dataDate, "value", "No data for this date")

  const handleReciteEnd = () => {
    setIsReciting(false)
    setReciteProgress((prev) => {
      return Math.min(prev + 1, totalTimes)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>

      {/* Recite Progress */}
      <ReciteProgress value={reciteProgress} />

      {/* Actions */}
      <ReciteActions
        isReciting={isReciting}
        onReciteStart={() => setIsReciting(true)}
        onReciteEnd={handleReciteEnd}
        onGoBack={() => setReciteProgress((prev) => Math.max(prev - 1, 0))}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  skipBack: {
    marginRight: 20,
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
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "gray",
    marginHorizontal: 5,
  },
  reciteProgressItemDone: {
    backgroundColor: "green",
  },
  reciteStartText: {
    color: "white",
  },
  reciteEndText: {
    color: "white",
  },
  reciteStart: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  reciteEnd: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  actions: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  reciteProgress: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  value: {
    fontSize: 20,
    lineHeight: 30,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    // backgroundColor: '#d3d3d3',
  },
})
