import { useDispatch, useSelector } from "react-redux"
import { ContentTypes, DataItem } from "../types"
import { addItem } from "../redux/customSlice"
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native"
import { useEffect, useState } from "react"
import { Feather } from "@expo/vector-icons"
import * as Speech from "expo-speech"
import AddItemModal from "./recite/AddItemModal"
import TranslationModal from "./recite/TranslationModal"
import get from "lodash.get"
import KeyPointsModal from "./recite/KeyPointsModal"
import { selectContentType } from "../redux/settingsSlice"

const iconSize = 20
interface ReciteOptionsProps {
  item?: DataItem
}
const ReciteOptions = ({ item }: ReciteOptionsProps) => {
  const value = get(item, "value", "")
  const zh = get(item, "zh", "")
  const keyPoints = get(item, "keyPoints", [])
  const isCustom = get(item, "isCustom", false)
  const contentType: ContentTypes = useSelector(selectContentType)

  const [AddItemVisible, setAddItemVisible] = useState(false)
  const [TranslationModalVisible, setTranslationModalVisible] = useState(false)
  const [KeyPointsVisible, setKeyPointsVisible] = useState(false)
  const dispatch = useDispatch()

  const handleAddItem = (item: DataItem) => {
    dispatch(addItem(item))
    setAddItemVisible(false)
  }
  const handleSpeakButtonPress = async () => {
    const typeLanguageMap = {
      en: {
        language: "en-US",
        voice: "com.apple.ttsbundle.Samantha-compact",
      },
      zh: {
        language: "zh-CN",
        voice: "com.apple.ttsbundle.Ting-Ting-compact",
      },
      jp: {
        language: "ja-JP",
        voice: "com.apple.ttsbundle.Kyoko-compact",
      }
    }
    const option = typeLanguageMap[contentType]
    Speech.speak(value, {
      language: option.language,
      voice: option.voice,
    })

  }
  useEffect(() => {
    return () => {
      Speech.stop()
    }
  }, [])

  const handleTranslationButtonPress = () => {
    if (!zh) {
      Alert.alert("当前内容无翻译")
      return
    }
    setTranslationModalVisible(true)
  }

  const noKeyPoints = !keyPoints || !keyPoints.length
  const handleKeyPointsButtonPress = () => {
    if (noKeyPoints) {
      Alert.alert("当前内容无关键点")
      return
    }
    setKeyPointsVisible(true)
  }

  const keyPointsButtonVisible = !isCustom && !noKeyPoints
  const speakButtonVisible = !isCustom && !!value
  const translationButtonVisible = !isCustom && !!zh

  return (
    <View style={styles.options}>
      {/* Translation */}
      {translationButtonVisible && (
        <TouchableOpacity
          style={styles.option}
          onPress={() => {
            handleTranslationButtonPress()
          }}
        >
          <Feather name="globe" size={iconSize} color="#ddd" />
        </TouchableOpacity>
      )}

      {/* Key Points */}
      {keyPointsButtonVisible && (
        <TouchableOpacity
          style={styles.option}
          onPress={() => {
            handleKeyPointsButtonPress()
          }}
        >
          <Feather name="check-circle" size={iconSize} color="#ddd" />
        </TouchableOpacity>
      )}

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
      {speakButtonVisible && (
        <TouchableOpacity
          style={styles.option}
          onPress={handleSpeakButtonPress}
        >
          <Feather name="volume-2" size={iconSize} color="#ddd" />
        </TouchableOpacity>
      )}

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

      {/* KeyPointsModal */}
      <KeyPointsModal
        visible={KeyPointsVisible}
        keyPoints={keyPoints}
        setVisible={setKeyPointsVisible}
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
