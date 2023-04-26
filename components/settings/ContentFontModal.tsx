// content font modal

import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  selectContentFont,
  selectContentType,
  setContentFont,
} from "../../redux/settingsSlice"
import {
  contentFontNames,
  contentFonts,
  contentFontsJP,
} from "../../constants/Fonts"
import { useFonts } from "expo-font"
import SettingsModal from "./SettingsModal"
import SettingsOptions from "./SettingsOptions"

const typeMapFont = {
  en: {
    values: contentFonts,
    label: "I love this world",
  },
  jp: {
    values: contentFontsJP,
    label: "私はこの世界が好きです",
  },
  zh: {
    values: contentFonts,
    label: "我爱这个世界",
  },
}

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
  const selectedContentType = useSelector(selectContentType)
  const dispatch = useDispatch()

  const toggleModal = () => {
    onDismiss()
  }

  const handleSelect = (font: string) => {
    dispatch(setContentFont(font))
  }

  const font = typeMapFont[selectedContentType]
  const options = font.values.map((f) => {
    return {
      label: font.label,
      value: f,
      textStyle: {
        fontFamily: f,
      },
    }
  })

  return (
    <SettingsModal
      visible={visible}
      onDismiss={toggleModal}
      modalBodyContent={
        <SettingsOptions
          options={options}
          selectedValue={selectedContentFont}
          onSelect={handleSelect}
        />
      }
    />
  )
}
