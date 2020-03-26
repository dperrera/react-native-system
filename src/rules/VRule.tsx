import React, { useContext } from 'react'
import { ViewStyle } from 'react-native'
import { ThemeContext } from '../ThemeProvider'
import { View } from '../views/View'

export interface VRuleProps {
  color?: ViewStyle['backgroundColor']
  height?: ViewStyle['height']
  size?: ViewStyle['width']
}

export const VRule: React.FC<VRuleProps> = ({ color, height, size = 1 }) => {
  const { mode } = useContext(ThemeContext)

  return (
    <View
      style={{
        alignSelf: height ? 'center' : 'stretch',
        backgroundColor: color || mode.muted,
        height,
        width: size,
      }}
    />
  )
}
