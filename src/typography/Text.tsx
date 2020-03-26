import React, { useContext } from 'react'
import { StyleSheet, Text as RNText } from 'react-native'
import { ThemeContext } from '../ThemeProvider'
import { TextProps } from '../types'
import { scaleOrValue } from '../utils'

export const Text: React.FC<TextProps> = ({
  children,
  color,
  fontSize,
  fontFamily,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  textTransform,
  style,
  ...rest
}) => {
  const { theme, mode } = useContext(ThemeContext)

  const styles = StyleSheet.create({
    text: {
      fontFamily,
      fontSize: fontSize ? scaleOrValue(fontSize, theme.fontSizes) : undefined,
      fontWeight,
      color: color || mode.text,
      letterSpacing: letterSpacing
        ? scaleOrValue(letterSpacing, theme.tracking)
        : undefined,
      lineHeight: lineHeight
        ? scaleOrValue(lineHeight, theme.lineHeights)
        : undefined,
      textAlign,
      textTransform,
    },
  })
  const flattenedStyles = StyleSheet.flatten([styles.text, style])

  return (
    <RNText style={flattenedStyles} {...rest}>
      {children}
    </RNText>
  )
}
