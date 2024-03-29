import { Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Colors from "../constants/Colors"
import * as Sharing from "expo-sharing"
import { useState } from "react"
import AboutModal from "../components/settings/AboutModal"
import { Feather } from "@expo/vector-icons"
import TypeModal from "../components/settings/TypeModal"
import ContentFontModal from "../components/settings/ContentFontModal"

const settingsList = [
  {
    value: "font",
    label: "背诵内容字体",
  },
  // {
  //   value: "theme",
  //   label: "更换主题",
  // },
  {
    value: 'type',
    label: "背诵内容类型",
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
const itunesItemId = 6446614143
// Settings Page
export default function SettingsScreen() {
  const [aboutModalVisible, setAboutModalVisible] = useState(false)
  const [typeModalVisible, setTypeModalVisible] = useState(false)
  const [contentFontModalVisible, setContentFontModalVisible] = useState(false)

  const openMail = () => {
    const recipient = "yinxingdyx@163.com"
    const subject = "关于小背英语的使用"

    Linking.openURL(`mailto:${recipient}?subject=${subject}`)
  }
  const showRate = () => {
    Linking.openURL(
      `itms-apps://itunes.apple.com/app/viewContentsUserReviews/id${itunesItemId}?action=write-review`
    )
  }
  const showShare = async () => {
    await Sharing.shareAsync(
      `https://apps.apple.com/cn/app/%E5%8D%8E%E4%B8%BA%E5%8D%8E%E8%AF%AD%E5%AD%A6%E4%B9%A0%E5%AE%A4/id${itunesItemId}`
    )
  }
  const handleSettingsItemPress = (value: string) => {
    switch (value) {
      case "rate":
        showRate()
        break
      case "share":
        showShare()
        break
      case "feedback":
        openMail()
        break
      case "about":
        setAboutModalVisible(true)
        break
      case "type":
        setTypeModalVisible(true)
        break
      case "font":
        setContentFontModalVisible(true)
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

          <View style={styles.rightIconContainer}>
            <Feather
              name="chevron-right"
              size={12}
              color={Colors.light.valueColor}
              style={styles.rightIcon}
            />
          </View>
        </TouchableOpacity>
      ))}

      {/* About Modal */}
      <AboutModal
        visible={aboutModalVisible}
        onDismiss={() => {
          setAboutModalVisible(false)
        }}
      />

      {/* Type Modal */}
      <TypeModal
        visible={typeModalVisible}
        onDismiss={() => {
          setTypeModalVisible(false)
        }}
      />

      {/* Content Font Modal */}
      <ContentFontModal
        visible={contentFontModalVisible}
        onDismiss={() => {
          setContentFontModalVisible(false)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  rightIcon: {
    marginLeft: 1,
  },
  rightIconContainer: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: '#f2f4f2',
  },
  settingsItem: {
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  settingsItemText: {
    fontSize: 14,
    color: Colors.light.valueColor,
    fontWeight: "500",
  },
  container: {
    paddingTop: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#f2f4f2",
  },
})
