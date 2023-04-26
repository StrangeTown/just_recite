// settings options

import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import Colors from "../../constants/Colors"

interface SettingsOption {
  label: string
  value: string
  textStyle?: any
}
interface SettingsOptionsProps {
  options: SettingsOption[]
  selectedValue: string
  onSelect: (value: string) => void
}

export default function SettingsOptions({
  options,
  selectedValue,
  onSelect,
}: SettingsOptionsProps) {
  return (
    <View>
      {options.map((option) => {
        return (
          <TouchableOpacity
            key={option.value}
            style={styles.option}
            onPress={() => onSelect(option.value)}
          >
            <Text
              style={[
                styles.optionText,
                option.textStyle,
                selectedValue === option.value && styles.optionTextSelected,
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  option: {
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    color: Colors.light.valueColor,
  },
  optionTextSelected: {
    color: "#248bcc",
  },
})
