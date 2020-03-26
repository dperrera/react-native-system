import React from 'react'
import { TouchableOpacity } from 'react-native'
import { HSpacer, RowView, Text, useTheme } from '../../dist'

const Header = () => {
  const { mode, setMode } = useTheme()

  const toggleMode = () => {
    if (mode.name === 'light') setMode('dark')
    if (mode.name === 'dark') setMode('light')
  }

  return (
    <RowView pa="3" justifyContent="space-between" alignItems="center">
      <RowView alignItems="baseline">
        <Text fontWeight="500">React Native System</Text>
        <HSpacer width="2" />
        <Text fontFamily="monospace" fontSize="2" color={mode.accent}>
          0.1
        </Text>
      </RowView>
      <TouchableOpacity onPress={toggleMode}>
        <Text fontSize="6">{mode.name === 'light' ? '🌑' : '☀️'}</Text>
      </TouchableOpacity>
    </RowView>
  )
}

export default Header
