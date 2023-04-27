// About modal

import { Image, Linking, StyleSheet, Text, View } from "react-native"
import Colors from "../../constants/Colors"
import SettingsModal from "./SettingsModal"

interface AboutModalProps {
  visible: boolean
  onDismiss: () => void
}
export default function AboutModal({ visible, onDismiss }: AboutModalProps) {
  if (!visible) {
    return null
  }

  return (
    <SettingsModal
      visible={visible}
      onDismiss={onDismiss}
      modalBodyContent={
        <>
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
            <Text style={styles.modalBodyItemText}>作者：Ian</Text>
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
        </>
      }
    />
  )
}

const styles = StyleSheet.create({
  modalBodyItem: {
    width: "60%",
    marginBottom: 20,
    borderBottomColor: "#eee",
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
