import { useContext, useEffect, useState } from "react"
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { DataItem } from "../../types"
import Colors from "../../constants/Colors"

interface AddItemModalProps {
  visible: boolean
  onDismiss: () => void
  onAdd: (item: DataItem) => void
}
const AddItemModal: React.FC<AddItemModalProps> = ({
  visible,
  onDismiss,
  onAdd,
}) => {
  const [value, setValue] = useState("")

  const handleAddPress = () => {
    // date format: '2021-01-01'
    const item: DataItem = {
      date: new Date().toISOString().slice(0, 10),
      value: value,
      isCustom: true,
    }

    onAdd(item)
    setValue("")
    onDismiss()
  }

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onDismiss}
      presentationStyle="fullScreen"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={styles.modalBody}>
            <View style={styles.modalBodyItem}>
              <TextInput
                style={styles.modalBodyItemInput}
                onChangeText={setValue}
                value={value}
                placeholder="将要背诵的内容粘贴在此处"
                numberOfLines={5}
                multiline
              />
            </View>
          </View>
          <View style={styles.modalFooter}>
            <TouchableOpacity
              style={styles.modalFooterButton}
              onPress={onDismiss}
            >
              <Text style={styles.modalFooterButtonText}>取消</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalFooterButton}
              onPress={handleAddPress}
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
    marginBottom: 20,
  },
  modalBodyItemInput: {
    lineHeight: 22,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.light.primaryColor,
    borderRadius: 5,
    padding: 10,
    height: 200,
  },
  modalFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  modalFooterButton: {
    marginLeft: 10,
    backgroundColor: Colors.light.primaryColor,
    borderRadius: 5,
    padding: 10,
  },
  modalFooterButtonText: {
    color: "#fff",
  },
})

export default AddItemModal
