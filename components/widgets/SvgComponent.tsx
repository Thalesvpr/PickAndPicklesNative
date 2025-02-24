import React from "react";
import { SvgProps } from "react-native-svg";
import { View, StyleSheet, ViewStyle } from "react-native";

interface SvgComponentProps {
  SvgComponent: React.FC<SvgProps>;
  width?: number;
  height?: number;
  color?: string;
  style?: ViewStyle;
}

const SvgIcon: React.FC<SvgComponentProps> = ({
  SvgComponent,
  width = 24,
  height = 24,
  color = "black",
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <SvgComponent width={width} height={height} fill={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SvgIcon;
