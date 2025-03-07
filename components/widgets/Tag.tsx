import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor"; // Supondo que esse hook já exista
import { RainbowBaseColors } from "@/constants/VariantCalors";
import { useRainbowColor } from "@/hooks/useRainbowColor";

interface tagProps {
  text: string;
  rainbowColor: RainbowBaseColors;
}

const tag: React.FC<tagProps> = ({ text, rainbowColor }) => {
  const themeColor = useRainbowColor(rainbowColor);

  return (
    <View
      style={[styles.container, { backgroundColor: themeColor.colorContainer }]}
    >
      <Text style={[styles.itemCount, { color: themeColor.onColorContainer }]}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 99,
    alignSelf: "flex-start",
  },
  itemCount: {
    fontSize: 12,
    fontWeight: "500",
  },
});

export default tag;
