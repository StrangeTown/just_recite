// display some import part named as keypoints of a pargraph

import React from "react"
import { Modal, StyleSheet, Text, View } from "react-native"
import Colors from "../../constants/Colors"

interface KeyPointsModalProps {
  visible: boolean
  setVisible: (visible: boolean) => void
  keyPoints: string[]
}
const KeyPointsModal = ({
  visible,
  setVisible,
  keyPoints,
}: KeyPointsModalProps) => {

  if (!keyPoints) {
    return null
  }

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
            <Text style={styles.modalTitleText}>Key Points:</Text>
          </View>
          <View style={styles.modalBody}>
            {keyPoints.map((keyPoint, index) => {
              return (
                <View style={styles.modalBodyItem} key={index}>
                  <Text style={styles.modalBodyItemText}>{keyPoint}</Text>
                </View>
              )
            })}
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
    fontSize: 12,
    lineHeight: 28,
    color: Colors.light.valueColor,
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
    marginBottom: 20,
    backgroundColor: "#f2f4f2",
    padding: 10,
  },
  modalBodyItemText: {
    lineHeight: 22,
    fontSize: 16,
    color: Colors.light.valueColor,
  },
})

export default KeyPointsModal
