import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { selectCompleted } from "../redux/reviewSlice"
import { useState } from "react"
import { DataItem } from "../types"
import { addReviewCompleted, selectReviewCompleted } from "../redux/todaySlice"

const Item = ({ date, value }: DataItem) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const dispatch = useDispatch()
  const reviewCompleted = useSelector(selectReviewCompleted)

  const isCompleted = reviewCompleted.map((item) => item.date).includes(date)

  const handleDatePress = () => {
    dispatch(addReviewCompleted(date))
  }

  return (
    <View style={styles.listItem}>
      {/* Value */}
      <View style={styles.listItemValue}>
        <Text
          style={styles.listItemValueText}
          numberOfLines={isExpanded ? 0 : 1}
          onPress={() => {
            setIsExpanded(!isExpanded)
          }}
          ellipsizeMode="tail"
        >
          {value}
        </Text>
      </View>

      {/* Date */}
      <View style={styles.listItemDate}>
        <TouchableOpacity onPress={handleDatePress}>
          <Text
            style={[
              styles.listItemDateText,
              isCompleted && styles.listItemDateTextCompleted,
            ]}
          >
            {date}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const ReviewList = () => {
  const completed = useSelector(selectCompleted)
  const copy = [...completed]

  // sort by date, latest first
  const sortedCompleted = copy.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <>
      <View style={styles.listContainer}>
        {sortedCompleted.map((item, index) => {
          return (
            <Item key={index} date={item.date} value={item.value as string} />
          )
        })}
      </View>
    </>
  )
}

export default ReviewList

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: "100%",
    // backgroundColor: "#f1f1f1",
  },
  listItemDateTextCompleted: {
    textDecorationLine: "line-through",
  },
  listItemDateText: {
    fontSize: 12,
    lineHeight: 28,
    color: "#666",
  },
  listItemValueText: {
    fontSize: 18,
    lineHeight: 28,
    color: "#333",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  listItemDate: {
    width: 100,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  listItemValue: {
    flex: 1,
    marginLeft: 10,
  },
})
