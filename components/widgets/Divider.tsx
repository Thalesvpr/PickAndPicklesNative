import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor"; // Supondo que esse hook já exista

const Divider: React.FC = () => {
  const backgroundColor = useThemeColor({}, "surfaceContainer");

  return (
    <View
      style={[styles.container, { backgroundColor: backgroundColor }]}
    ></View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 4,
    width: "100%",
    maxWidth: 380,
    borderRadius: 10,
  },
});

export default Divider;
