import React, { useContext } from 'react'
import { SpaceScaleOrNumber } from '../types'
import { View } from '../views/View'
import { scaleOrValue } from '../utils'
import { ThemeContext } from '../ThemeProvider'

export interface VSpacerProps {
  height?: SpaceScaleOrNumber
}

export const VSpacer: React.FC<VSpacerProps> = ({ height }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <View
      style={{
        flexGrow: height ? 0 : 1,
        flexShrink: 0,
        height: height ? scaleOrValue(height, theme.space) : 0,
        width: 0,
      }}
    />
  )
}
