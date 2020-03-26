import {
  ViewProps as RNViewProps,
  ScrollViewProps as RNScrollViewProps,
  TextProps as RNTextProps,
  TextStyle,
  ViewStyle,
  FlexStyle,
} from 'react-native'
import { theme } from './theme'

/**
 * Scales
 */

export type SpaceScaleOrNumber =
  | Extract<keyof typeof theme.space, string>
  | number

export type FontSizeScaleOrNumber =
  | Extract<keyof typeof theme.fontSizes, string>
  | number

export type LineHeightScaleOrNumber =
  | Extract<keyof typeof theme.lineHeights, string>
  | number

export type TrackingScaleOrNumber =
  | Extract<keyof typeof theme.tracking, string>
  | number

/**
 * Views
 */

export interface ViewProps extends RNViewProps {
  bg?: ViewStyle['backgroundColor']
  flex?: FlexStyle['flex']
  alignItems?: FlexStyle['alignItems']
  alignContent?: FlexStyle['alignContent']
  alignSelf?: FlexStyle['alignSelf']
  justifyContent?: FlexStyle['justifyContent']
  pa?: SpaceScaleOrNumber
  ph?: SpaceScaleOrNumber
  pv?: SpaceScaleOrNumber
  pt?: SpaceScaleOrNumber
  pb?: SpaceScaleOrNumber
  pl?: SpaceScaleOrNumber
  pr?: SpaceScaleOrNumber
  ma?: SpaceScaleOrNumber
  mh?: SpaceScaleOrNumber
  mv?: SpaceScaleOrNumber
  mt?: SpaceScaleOrNumber
  mb?: SpaceScaleOrNumber
  ml?: SpaceScaleOrNumber
  mr?: SpaceScaleOrNumber
  height?: SpaceScaleOrNumber
  width?: SpaceScaleOrNumber
  style?: ViewStyle
}

export interface ScrollViewProps extends RNScrollViewProps {
  bg?: ViewStyle['backgroundColor']
  flex?: FlexStyle['flex']
  pa?: SpaceScaleOrNumber
  ph?: SpaceScaleOrNumber
  pv?: SpaceScaleOrNumber
  pt?: SpaceScaleOrNumber
  pb?: SpaceScaleOrNumber
  pl?: SpaceScaleOrNumber
  pr?: SpaceScaleOrNumber
  ma?: SpaceScaleOrNumber
  mh?: SpaceScaleOrNumber
  mv?: SpaceScaleOrNumber
  mt?: SpaceScaleOrNumber
  mb?: SpaceScaleOrNumber
  ml?: SpaceScaleOrNumber
  mr?: SpaceScaleOrNumber
  height?: SpaceScaleOrNumber
  width?: SpaceScaleOrNumber
  style?: ViewStyle
}

export interface FlexViewProps extends RNViewProps {
  alignItems?: FlexStyle['alignItems']
  justifyContent?: FlexStyle['justifyContent']
  flexWrap?: FlexStyle['flexWrap']
}

/**
 * Text
 */

export interface TextProps extends RNTextProps {
  color?: TextStyle['color']
  fontSize?: FontSizeScaleOrNumber
  fontFamily?: TextStyle['fontFamily']
  fontWeight?: TextStyle['fontWeight']
  lineHeight?: LineHeightScaleOrNumber
  letterSpacing?: TrackingScaleOrNumber
  textAlign?: TextStyle['textAlign']
  textTransform?: TextStyle['textTransform']
  style?: TextStyle
}
