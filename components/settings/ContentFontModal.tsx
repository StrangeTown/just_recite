// content font modal

import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectContentFont, setContentFont } from "../../redux/settingsSlice"
import { contentFontNames, contentFonts } from "../../constants/Fonts"
import { useFonts } from "expo-font"
import SettingsModal from "./SettingsModal"
import SettingsOptions from "./SettingsOptions"

interface ContentFontModalProps {
  visible: boolean
  onDismiss: () => void
}
export default function ContentFontModal({
  visible,
  onDismiss,
}: ContentFontModalProps) {
  if (!visible) {
    return null
  }
  const selectedContentFont = useSelector(selectContentFont)
  const dispatch = useDispatch()

  const toggleModal = () => {
    onDismiss()
  }

  const handleSelect = (font: string) => {
    dispatch(setContentFont(font))
  }

  const [fontsLoaded] = useFonts({
    "Ubuntu Regular": require("../../assets/fonts/Ubuntu/Ubuntu-Regular.ttf"),
    [contentFontNames.Caveat]: require("../../assets/fonts/Caveat/static/Caveat-Regular.ttf"),
    [contentFontNames.DancingScript]: require("../../assets/fonts/Dancing_Script/static/DancingScript-Regular.ttf"),
    [contentFontNames.PlayfairDisplay]: require("../../assets/fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf"),
    [contentFontNames.Roboto]: require("../../assets/fonts/Roboto/Roboto-Regular.ttf"),
    [contentFontNames.Satisfy]: require("../../assets/fonts/Satisfy/Satisfy-Regular.ttf"),
    [contentFontNames.Ysabeau]: require("../../assets/fonts/Ysabeau/static/Ysabeau-Regular.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <SettingsModal
      visible={visible}
      onDismiss={toggleModal}
      modalBodyContent={
        <SettingsOptions
          options={contentFonts.map((font) => {
            return {
              label: font,
              value: font,
              textStyle: {
                fontFamily: font,
              },
            }
          })}
          selectedValue={selectedContentFont}
          onSelect={handleSelect}
        />
      }
    />
  )
}

