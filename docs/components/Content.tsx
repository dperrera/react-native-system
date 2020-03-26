import React from 'react'
import { ScrollView, Text, VSpacer, View, useTheme } from '../../dist'

const Content = () => {
  const { mode, theme } = useTheme()
  return (
    <ScrollView pa="4">
      <Text accessibilityRole="header" fontSize="7">
        React Native System makes designing in React Native fast, fun, and
        consistent.
      </Text>

      <VSpacer height="5" />

      <Text fontSize="5" fontWeight="500" nativeID="getting-started">
        Getting Started
      </Text>
      <VSpacer height="2" />
      <View
        bg={mode.name === 'light' ? theme.color.black05 : theme.color.white05}
        flex={1}
        pa="3"
      >
        <Text fontFamily="monospace">yarn add react-native-system</Text>
      </View>

      <VSpacer height="5" />

      <Text fontSize="5" fontWeight="500" nativeID="components">
        Components
      </Text>
      <VSpacer height="2" />
      <Text>Coming soon...</Text>

      <VSpacer height="5" />

      <Text fontSize="5" fontWeight="500" nativeID="theme">
        Theme & Modes
      </Text>
      <VSpacer height="2" />
      <Text>Coming soon...</Text>
    </ScrollView>
  )
}

export default Content
