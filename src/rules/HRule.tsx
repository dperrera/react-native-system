import React, { useContext } from 'react'
import { ViewStyle } from 'react-native'
import { ThemeContext } from '../ThemeProvider'
import { View } from '../views/View'

export interface HRuleProps {
  color?: ViewStyle['backgroundColor']
  size?: ViewStyle['height']
  width?: ViewStyle['width']
}

export const HRule: React.FC<HRuleProps> = ({ color, size = 1, width }) => {
  const { mode } = useContext(ThemeContext)

  return (
    <View
      style={{
        alignSelf: width ? 'auto' : 'stretch',
        backgroundColor: color || mode.muted,
        height: size,
        width,
      }}
    />
  )
}
