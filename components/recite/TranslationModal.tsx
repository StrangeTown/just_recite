import React from "react"
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Colors from "../../constants/Colors"

interface TranslationModalProps {
  visible: boolean
  setVisible: (visible: boolean) => void
  translation?: string
}

const TranslationModal = ({
  visible,
  setVisible,
  translation,
}: TranslationModalProps) => {

  const handleEmptyClick = () => {
    setVisible(false)
  }
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={() => {
        setVisible(false)
      }}
      presentationStyle="fullScreen"
    >
      <View style={styles.modalContainer} onTouchEnd={handleEmptyClick}>
        <View style={styles.modal}>
          {/* title */}
          <View style={styles.modalTitle}>
            <Text style={styles.modalTitleText}>
              Translation:
            </Text>
          </View>
          <View style={styles.modalBody}>
            <View style={styles.modalBodyItem}>
              <Text style={styles.modalBodyItemText}>{translation}</Text>
            </View>
          </View>
          <View style={styles.closeTip}>
            {/* <Text style={styles.closeTipText}>点击空白处关闭</Text> */}
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalTitle: {
    marginBottom: 4,
  },
  modalTitleText: {
    fontSize: 14,
    lineHeight: 28,
    color: Colors.light.valueColor,
  },
  closeTip: {
    alignItems: "center",
  },
  closeTipText: {
    color: "#aaa",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  modalBody: {
    marginBottom: 20,
  },
  modalBodyItem: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#f2f4f2",
    borderRadius: 10,
  },
  modalBodyItemText: {
    fontSize: 16,
    lineHeight: 22,
    color: Colors.light.valueColor,
  },
})

export default TranslationModal
