import * as React from 'react'
import 'react-app-polyfill/ie11'
import * as ReactDOM from 'react-dom'
import {
  RowView,
  ScrollView,
  Text,
  ThemeProvider,
  View,
  VRule,
  HSpacer,
  VSpacer,
} from '../dist'
import Nav from './components/Nav'
import { ColorPropType } from 'react-native'
import Content from './components/Content'

const App = () => {
  return (
    <ThemeProvider>
      <RowView bg={'red'} flex={1}>
        <Nav />
        <VRule />

        <Content />
      </RowView>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
