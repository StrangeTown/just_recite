import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { selectCompleted } from "../redux/reviewSlice"
import {
  toggleReviewCompleted,
  selectReviewCompleted,
} from "../redux/todaySlice"
import Colors from "../constants/Colors"

interface ItemProps {
  date: string
  value: string
  id: string
}

const Item = ({ date, value, id }: ItemProps) => {
  const dispatch = useDispatch()
  const reviewCompleted = useSelector(selectReviewCompleted)

  const isCompleted = reviewCompleted.map((item) => item.id).includes(id)

  const handleItemPress = () => {
    dispatch(toggleReviewCompleted({ id }))
  }

  return (
    <TouchableOpacity style={styles.listItem} onPress={handleItemPress}>
      {/* Date */}
      <View style={styles.listItemDate}>
          <Text
            style={[
              styles.listItemDateText,
              isCompleted && styles.listItemDateTextCompleted,
            ]}
          >
            {date}
          </Text>
      </View>

      {/* Value */}
      <View style={styles.listItemValue}>
        <Text style={styles.listItemValueText} ellipsizeMode="tail">
          {value}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const EmptyList = () => {
  return (
    <View style={styles.emptyList}>
      <Text style={styles.emptyListText}>
        背过的内容会在这里显示
      </Text>
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
        {sortedCompleted.length === 0 && <EmptyList />}
        {sortedCompleted.map((item, index) => {
          return (
            <Item
              key={index}
              date={item.date}
              value={item.value as string}
              id={item.id}
            />
          )
        })}
      </View>
    </>
  )
}

export default ReviewList

const styles = StyleSheet.create({
  emptyList: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyListText: {
    fontSize: 15,
    color: "#666",
  },
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
    fontFamily: "Ubuntu Light Italic",
  },
  listItemValueText: {
    fontSize: 18,
    lineHeight: 28,
    color: Colors.light.valueColor,
    fontFamily: "Ubuntu Regular",
  },
  listItem: {
    marginBottom: 6,
    padding: 10,
    paddingBottom: 20,
    borderRadius: 4,
    backgroundColor: "#fff",
    position: "relative",
    display: "flex",
  },
  listItemDate: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    // backgroundColor: "#ddd",
  },
  listItemValue: {},
})
