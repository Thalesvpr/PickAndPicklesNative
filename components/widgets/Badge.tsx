import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { BaseColors, getForwardsColor, getOnColor } from "@/constants/Colors";
import { Texts } from "./Texts";
import { ThemedText } from "./ThemedText";
import { FontSizes, LineHeights } from "@/constants/Theme";

interface BadgeProps {
  value: number | string;
  themeColor?: BaseColors;
}

const Badge: React.FC<BadgeProps> = ({ value, themeColor = "error" }) => {
  const backgroundColor = useThemeColor({}, themeColor);
  const textColor = useThemeColor({}, getForwardsColor(themeColor));

  // Convert value to string to check length
  const valueStr = value.toString();

  // Dynamically adjust font size based on content length
  const fontSize = valueStr.length > 2 ? 8 : 10;

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor,
          // Add horizontal padding for longer text
          paddingHorizontal: valueStr.length > 2 ? 4 : 2,
        },
      ]}
    >
      <ThemedText
        numberOfLines={1}
        fontSize={FontSizes.xs}
        lineHeight={LineHeights.sm}
        backwardsColor={themeColor}
      >
        {value}
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    minWidth: 18,
    height: 18,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 2,
  },
  badgeText: {
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Badge;