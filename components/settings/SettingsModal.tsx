// content font modal

import React from "react"
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native"
import { Feather } from "@expo/vector-icons"
import Colors from "../../constants/Colors"

interface SettingsModalProps {
  visible: boolean
  onDismiss: () => void
  modalBodyContent: React.ReactNode
  modalBodyStyle?: object
}
export default function SettingsModal({
  visible,
  onDismiss,
  modalBodyContent,
  modalBodyStyle,
}: SettingsModalProps) {
  if (!visible) {
    return null
  }

  const toggleModal = () => {
    onDismiss()
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
          {/* Modal Body */}
          <View style={[styles.modalBody, modalBodyStyle]}>
            {/* Content */}
            {modalBodyContent}
          </View>

          {/* Modal Footer */}
          <View style={styles.modalFooter}>
            <TouchableOpacity
              style={styles.modalFooterButton}
              onPress={toggleModal}
            >
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
    width: "100%",
    // backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  modalFooter: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  modalFooterButton: {
    padding: 10,
  },
})
