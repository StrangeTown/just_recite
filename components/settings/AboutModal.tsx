// About modal

import {
  Image,
  Linking,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import Colors from "../../constants/Colors"
import { Feather } from "@expo/vector-icons"

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
      animationType="slide"
      visible={visible}
      onRequestClose={toggleModal}
      presentationStyle="pageSheet"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={styles.modalBody}>
            {/* icon */}
            <View style={styles.modalBodyItemIconWrap}>
              <Image
                style={styles.modalBodyItemIcon}
                source={require("../../assets/images/icon.png")}
              />
            </View>

            {/* version */}
            <View style={styles.modalBodyItem}>
              <Text style={styles.modalBodyItemText}>版本号：v1.0.2</Text>
            </View>

            {/* author */}
            <View style={styles.modalBodyItem}>
              <Text style={styles.modalBodyItemText}>作者：尹星</Text>
            </View>

            {/* email */}
            <View style={styles.modalBodyItem}>
              <Text style={styles.modalBodyItemText}>
                邮箱：
                <Text
                  style={styles.modalBodyItemEmail}
                  onPress={() => {
                    Linking.openURL("mailto:yinxingdyx@163.com")
                  }}
                >
                  yinxingdyx@163.com
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.modalFooter}>
            <TouchableOpacity
              style={styles.modalFooterButton}
              onPress={toggleModal}
            >
              {/* down icon */}
              <Feather name="chevron-down" size={24} color={Colors.light.valueColor} />
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
    flex: 1,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingTop: 100,
    paddingBottom: 100,
    justifyContent: "space-between",
  },
  modalBody: {
    marginBottom: 20,
  },
  modalBodyItem: {
    alignItems: "center",
    marginBottom: 20,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  modalBodyItemText: {
    alignSelf: "flex-start",
    color: Colors.light.valueColor,
    fontSize: 14,
  },
  modalBodyItemIconWrap: {
    alignItems: "center",
    marginBottom: 40,
  },
  modalBodyItemIcon: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  modalBodyItemEmail: {
    color: "#6c94cd",
  },
  modalFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  modalFooterButton: {
    padding: 10,
  },
})
