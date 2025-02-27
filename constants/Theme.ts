import { TextStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export const FontSizes = {
  xs: 10,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
};

export const Gaps = {
  sm: 5,
  md: 10,
  lg: 20,
};

export const BorderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 16,
  full: 9999,
};

export const LineHeights = {
  xs: 16, // lineHeight para fontSize xs (12)
  sm: 20, // lineHeight para fontSize sm (14)
  md: 24, // lineHeight para fontSize md (16)
  lg: 28, // lineHeight para fontSize lg (18)
  xl: 32, // lineHeight para fontSize xl (20)
  xxl: 40, // lineHeight para fontSize xxl (24)
};

export const FontWeights = {
  light: "300" as TextStyle["fontWeight"],
  normal: "400" as TextStyle["fontWeight"],
  medium: "500" as TextStyle["fontWeight"],
  semibold: "600" as TextStyle["fontWeight"],
  bold: "700" as TextStyle["fontWeight"],
  extrabold: "800" as TextStyle["fontWeight"],
};

export const PaddingMargin = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
};
