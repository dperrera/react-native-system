import React, { useContext } from 'react'
import { SpaceScaleOrNumber } from '../types'
import { View } from '../views/View'
import { ThemeContext } from '../ThemeProvider'
import { scaleOrValue } from '../utils'

export interface HSpacerProps {
  width?: SpaceScaleOrNumber
}

export const HSpacer: React.FC<HSpacerProps> = ({ width }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <View
      style={{
        flexGrow: width ? 0 : 1,
        flexShrink: 0,
        height: 0,
        width: width ? scaleOrValue(width, theme.space) : 0,
      }}
    />
  )
}
