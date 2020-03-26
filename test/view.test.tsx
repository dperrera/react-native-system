import { render } from '@testing-library/react-native'
import React from 'react'
import { View } from '../dist'

describe('View', () => {
  it('renders without crashing', () => {
    const { queryByTestId } = render(<View pa={3} testID="my-view" />)
    expect(queryByTestId('my-view')).toBeTruthy()
  })
})
