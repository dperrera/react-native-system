import React, { useContext } from 'react'
import { StyleSheet, View as RNView } from 'react-native'
import { ThemeContext } from '../ThemeProvider'
import { ViewProps } from '../types'
import { scaleOrValue } from '../utils'

export const RowView: React.FC<ViewProps> = ({
  children,
  bg,
  flex,
  alignItems,
  alignContent,
  alignSelf,
  justifyContent,
  pa,
  ph,
  pv,
  pt,
  pb,
  pl,
  pr,
  ma,
  mh,
  mv,
  mt,
  mb,
  ml,
  mr,
  height,
  width,
  style,
  ...rest
}) => {
  const { theme, mode } = useContext(ThemeContext)

  const styles = StyleSheet.create({
    view: {
      backgroundColor: bg || mode.background,
      flex,
      flexDirection: 'row',
      alignItems,
      alignContent,
      alignSelf,
      justifyContent,
      padding: pa ? scaleOrValue(pa, theme.space) : undefined,
      paddingHorizontal: ph ? scaleOrValue(ph, theme.space) : undefined,
      paddingVertical: pv ? scaleOrValue(pv, theme.space) : undefined,
      paddingTop: pt ? scaleOrValue(pt, theme.space) : undefined,
      paddingBottom: pb ? scaleOrValue(pb, theme.space) : undefined,
      paddingLeft: pl ? scaleOrValue(pl, theme.space) : undefined,
      paddingRight: pr ? scaleOrValue(pr, theme.space) : undefined,
      margin: ma ? scaleOrValue(ma, theme.space) : undefined,
      marginHorizontal: mh ? scaleOrValue(mh, theme.space) : undefined,
      marginVertical: mv ? scaleOrValue(mv, theme.space) : undefined,
      marginTop: mt ? scaleOrValue(mt, theme.space) : undefined,
      marginBottom: mb ? scaleOrValue(mb, theme.space) : undefined,
      marginLeft: ml ? scaleOrValue(ml, theme.space) : undefined,
      marginRight: mr ? scaleOrValue(mr, theme.space) : undefined,
      height: height ? scaleOrValue(height, theme.space) : undefined,
      width: width ? scaleOrValue(width, theme.space) : undefined,
    },
  })
  const flattenedStyles = StyleSheet.flatten([styles.view, style])

  return (
    <RNView style={flattenedStyles} {...rest}>
      {children}
    </RNView>
  )
}
