import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Colors from "../../constants/Colors"
import { ContentTypes } from "../../types"
import { useDispatch, useSelector } from "react-redux"
import { selectContentType, setContentType } from "../../redux/settingsSlice"
import { Feather } from "@expo/vector-icons"
import SettingsModal from "./SettingsModal"
import SettingsOptions from "./SettingsOptions"
import { resetTodayState, setDefaultFont } from "../../services"

interface TypeModalProps {
  visible: boolean
  onDismiss: () => void
}

interface TypeItem {
  type: ContentTypes
  label: string
}
const types: TypeItem[] = [
  {
    type: "en",
    label: "英语内容（English）",
  },
  // {
  //   type: "zh",
  //   label: "中文内容（中文）",
  // },
  {
    type: "jp",
    label: "日语内容（日本語）",
  },
]

// type modal
export default function TypeModal({ visible, onDismiss }: TypeModalProps) {
  if (!visible) {
    return null
  }
  const selectedContentType = useSelector(selectContentType)
  const dispatch = useDispatch()

  const toggleModal = () => {
    onDismiss()
  }

  const handleSelect = (type: ContentTypes) => {
    dispatch(setContentType(type))
    resetTodayState()
    setDefaultFont(type)
  }

  return (
    <SettingsModal
      visible={visible}
      onDismiss={toggleModal}
      modalBodyContent={
        <SettingsOptions
          options={types.map((t) => {
            return {
              label: t.label,
              value: t.type,
            }
          })}
          selectedValue={selectedContentType}
          onSelect={(val) => {
            handleSelect(val as ContentTypes)
          }}
        />
      }
    />
  )
}

