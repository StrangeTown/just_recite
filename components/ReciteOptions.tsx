import { useDispatch } from "react-redux"
import { DataItem } from "../types"
import { addItem } from "../redux/customSlice"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useEffect, useState } from "react"
import Colors from "../constants/Colors"
import { Feather } from "@expo/vector-icons"
import * as Speech from "expo-speech"
import AddItemModal from "./recite/AddItemModal"
import TranslationModal from "./recite/TranslationModal"
import get from "lodash.get"

const iconSize = 20
interface ReciteOptionsProps {
  item?: DataItem
}
const ReciteOptions = ({ item }: ReciteOptionsProps) => {
  const value = get(item, "value", "")
  const zh = get(item, "zh", "")
  const [AddItemVisible, setAddItemVisible] = useState(false)
  const [TranslationModalVisible, setTranslationModalVisible] = useState(false)
  const dispatch = useDispatch()

  const handleAddItem = (item: DataItem) => {
    dispatch(addItem(item))
    setAddItemVisible(false)
  }
  const handleSpeakButtonPress = async () => {
    Speech.speak(value, {
      language: "en-US",
      voice: "com.apple.ttsbundle.Samantha-compact",
    })
  }
  useEffect(() => {
    return () => {
      Speech.stop()
    }
  }, [])

  return (
    <View style={styles.options}>
      {/* Translation */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => {
          setTranslationModalVisible(true)
        }}
      >
        <Feather name="globe" size={iconSize} color="#ddd" />
      </TouchableOpacity>

      {/* Key Points */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => {
          console.log("Key Points")
        }}
      >
        <Feather name="check-circle" size={iconSize} color="#ddd" />
      </TouchableOpacity>

      {/* Custom */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => {
          setAddItemVisible(true)
        }}
      >
        <Feather name="edit-2" size={iconSize} color="#ddd" />
      </TouchableOpacity>

      {/* Speak */}
      <TouchableOpacity style={styles.option} onPress={handleSpeakButtonPress}>
        <Feather name="volume-2" size={iconSize} color="#ddd" />
      </TouchableOpacity>

      {/* AddItemModal */}
      <AddItemModal
        visible={AddItemVisible}
        onDismiss={() => {
          setAddItemVisible(false)
        }}
        onAdd={(item) => {
          handleAddItem(item)
        }}
      />

      {/* TranslationModal */}
      <TranslationModal
        visible={TranslationModalVisible}
        translation={zh}
        setVisible={setTranslationModalVisible}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  option: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#333",
    marginHorizontal: 5,
  },
  options: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-around",
    alignItems: "center",
    // width: "100%",
    padding: 10,
    // backgroundColor: '#ddd'
  },
})
export default ReciteOptions
