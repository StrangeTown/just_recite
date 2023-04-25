// content font modal

import React from "react"
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { selectContentFont, setContentFont } from "../../redux/settingsSlice"
import { contentFonts } from "../../constants/Fonts"
import { Feather } from "@expo/vector-icons"
import Colors from "../../constants/Colors"

interface ContentFontModalProps {
  visible: boolean
  onDismiss: () => void
}
export default function ContentFontModal({
  visible,
  onDismiss,
}: ContentFontModalProps) {
  if (!visible) {
    return null
  }
  const selectedContentFont = useSelector(selectContentFont)
  const dispatch = useDispatch()

  const toggleModal = () => {
    onDismiss()
  }

  const handleSelect = (font: string) => {
    dispatch(setContentFont(font))
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
            {contentFonts.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.modalBodyItem}
                  key={item}
                  onPress={() => {
                    handleSelect(item)
                  }}
                >
                  <Text
                    style={[
                      styles.modalBodyItemText,
                      selectedContentFont === item &&
                        styles.modalBodyItemTextSelected,
                    ]}
                  >
                    {item}
                  </Text>

                  {/* Divider */}
                  {index !== contentFonts.length - 1 && (
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    flex: 1,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
    justifyContent: "space-between",
    paddingVertical: 100,
  },
  modalBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  modalBodyItem: {
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBodyItemText: {
    fontSize: 16,
    color: Colors.light.valueColor,
  },
  modalBodyItemTextSelected: {
    color: "#248bcc",
  },
  modalFooter: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  modalFooterButton: {
    padding: 10,
  },
  modalFooterButtonText: {
    fontSize: 16,
    color: "#fff",
  },
})
