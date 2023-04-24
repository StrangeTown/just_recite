// About modal

import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Colors from "../../constants/Colors"

interface AboutModalProps {
  visible: boolean
  onDismiss: () => void
}
export default function AboutModal({ visible, onDismiss }: AboutModalProps) {
  if (!visible) {
    return null
  }

  const toggleModal = () => {
    onDismiss()
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={toggleModal}
      presentationStyle="fullScreen"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={styles.modalBody}>
            <Text>小背英语</Text>
            <Text>版本：1.0.0</Text>
            <Text>作者：yinxingdyx</Text>
            <Text>邮箱：yinxingdyx@163.com</Text>
          </View>
          <View style={styles.modalFooter}>
            <TouchableOpacity
              style={styles.modalFooterButton}
              onPress={toggleModal}
            >
              <Text style={styles.modalFooterButtonText}>确定</Text>
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
    backgroundColor: "#fff",
  },
  modal: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  modalBody: {
    marginBottom: 20,
  },
  modalFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalFooterButton: {
    marginLeft: 20,
    backgroundColor: Colors.light.primaryColor,
    borderRadius: 5,
    padding: 10,
  },
  modalFooterButtonText: {
    color: "#fff",
  },
})
