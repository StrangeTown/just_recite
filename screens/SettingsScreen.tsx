import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import Colors from "../constants/Colors"

const settingsList = [
  {
    value: "font",
    label: "更换内容字体",
  },
  {
    value: "theme",
    label: "更换主题",
  },
  {
    value: "language",
    label: "更换语言",
  },
  {
    value: "about",
    label: "关于",
  },
  {
    value: "feedback",
    label: "反馈",
  },
  {
    value: "share",
    label: "分享",
  },
  {
    value: "rate",
    label: "评分",
  },
]
// Settings Page
export default function SettingsScreen() {
  const showRate = () => {
    const itunesItemId = 6446614143
    Linking.openURL(
      `itms-apps://itunes.apple.com/app/viewContentsUserReviews/id${itunesItemId}?action=write-review`
    )
  }
  const handleSettingsItemPress = (value: string) => {
    switch (value) {
      case "rate":
        showRate()
        break
      default:
        break
    }
  }
  return (
    <View style={styles.container}>
      {settingsList.map((item) => (
        <TouchableOpacity
          key={item.value}
          onPress={() => {
            handleSettingsItemPress(item.value)
          }}
          style={styles.settingsItem}
        >
          <Text style={styles.settingsItemText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  settingsItem: {
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 20,
    marginBottom: 10,
  },
  settingsItemText: {
    fontSize: 14,
    color: Colors.light.valueColor,
  },
  container: {
    paddingTop: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#f2f4f2",
  },
})
