import React from 'react'
import { useTheme, View, ScrollView, RowView, Text } from '../../dist'
import Header from './Header'
import { Linking } from 'react-native'

const Nav = () => {
  return (
    <View width={250}>
      <Header />
      <ScrollView>
        <RowView ph="3" pv="2">
          <Text onPress={() => Linking.openURL(`#getting-started`)}>
            Getting Started
          </Text>
        </RowView>

        <RowView ph="3" pv="2">
          <Text onPress={() => Linking.openURL(`#components`)}>Components</Text>
        </RowView>

        <RowView ph="3" pv="2">
          <Text onPress={() => Linking.openURL(`#theme`)}>Theme & Modes</Text>
        </RowView>
      </ScrollView>
    </View>
  )
}

export default Nav
