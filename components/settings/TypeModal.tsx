import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Colors from "../../constants/Colors"
import { ContentTypes } from "../../types"
import { useDispatch, useSelector } from "react-redux"
import { selectContentType, setContentType } from "../../redux/settingsSlice"
import { Feather } from "@expo/vector-icons"

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
    label: "英语内容",
  },
  // {
  //   type: "zh",
  //   label: "中文内容",
  // },
  {
    type: "jp",
    label: "日语内容",
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
  }

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={toggleModal}
      presentationStyle="pageSheet"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={styles.modalBody}>
            {types.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.modalBodyItem}
                  key={item.type}
                  onPress={() => {
                    handleSelect(item.type)
                  }}
                >
                  <Text
                    style={[
                      styles.modalBodyItemText,
                      selectedContentType === item.type &&
                        styles.modalBodyItemTextSelected,
                    ]}
                  >
                    {item.label}
                  </Text>
                  {/* Divider */}
                  {index !== types.length - 1 && (
                    <View style={styles.modalBodyItemDivider} />
                  )}
                </TouchableOpacity>
              )
            })}
          </View>
          <View style={styles.modalFooter}>
            <TouchableOpacity
              style={styles.modalFooterButton}
              onPress={toggleModal}
            >
              {/* down icon */}
              <Feather
                name="chevron-down"
                size={24}
                color={Colors.light.valueColor}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBodyItemDivider: {
    height: 1,
    backgroundColor: "#eee",
    width: 10,
    position: "absolute",
    bottom: 0,
  },
  modalFooterButton: {
    padding: 10,
  },
  modalBodyItem: {
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBodyItemText: {
    fontSize: 14,
    color: Colors.light.valueColor,
  },
  modalBodyItemTextSelected: {
    color: "#248bcc",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 100,
    justifyContent: "space-between",
  },
  modalBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#ddd",
  },
  modalFooter: {
    flexDirection: "row",
    justifyContent: "center",
  },
})
