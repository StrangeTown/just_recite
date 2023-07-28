import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Colors from "../constants/Colors"

interface ActionProps {
  title: string
  tip: string
  onPress: () => void
  backgroundColor?: string
}
const Action = ({ title, tip, onPress, backgroundColor }: ActionProps) => {
  return (
    <View style={[styles.action]}>
      <TouchableOpacity
        style={[
          styles.actionBtn,
          {
            backgroundColor: backgroundColor || "#fff",
          },
        ]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{title}</Text>
        <View style={styles.divider}></View>
        <View style={styles.buttonTip}>
          <Text style={styles.buttonTipText}>{tip}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const actions = [
  {
    count: 3,
    tip: "无论如何，都可以完成的",
    color: "#d3d9d1",
  },
  {
    count: 9,
    tip: "保持节奏，不断积累",
    color: "#a6c8c7",
  },
  {
    count: 21,
    tip: "挑战一下吧",
    color: "#c89fa5",
  },
]

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        {actions.map((action, index) => (
          <Action
            key={index}
            title={`${action.count} Sentences`}
            tip={action.tip}
            onPress={() => {}}
            backgroundColor={action.color}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  divider: {
    width: "50%",
    height: 1,
    backgroundColor: "#fff",
    marginTop: 12,
  },
  actionBtn: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 180,
    borderRadius: 10,
    paddingVertical: 14,
    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 1,
  },
  actions: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  action: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 6,
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "PingFangSC-Semibold",
  },
  buttonTip: {
    marginTop: 4,
    width: "100%",
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTipText: {
    fontSize: 12,
    color: "#fff",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    // backgroundColor: ''
  },
})
