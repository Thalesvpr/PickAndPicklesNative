import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor"; // Assuming this hook exists
import { useRainbowColor } from "@/hooks/useRainbowColor";
import {
  BaseColors,
  ContainerColors,
  getForwardsColor,
} from "@/constants/Colors";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { RainbowBaseColors, RainbowColor } from "@/constants/VariantColors";
import {
  BorderRadius,
  FontSizes,
  PaddingMargin,
  SpaceGaps,
} from "@/constants/Theme";

interface TagProps {
  text: string | number;
  icon?:
    | keyof typeof MaterialIcons.glyphMap
    | keyof typeof MaterialCommunityIcons.glyphMap;
  iconSource?: "material" | "materialCommunity";
  iconPosition?: "left" | "right";
  color: RainbowBaseColors | BaseColors;
}

const Tag: React.FC<TagProps> = ({
  text,
  color,
  icon,
  iconSource = "material",
  iconPosition = "right",
}) => {
  const isRainbowColor = Object.keys(RainbowColor).includes(color as string);

  const { colorContainer, onColorContainer } = isRainbowColor
    ? useRainbowColor(color as RainbowBaseColors)
    : {
        colorContainer: useThemeColor(
          {},
          `${color}Container` as ContainerColors
        ),
        onColorContainer: useThemeColor(
          {},
          getForwardsColor(`${color}Container` as ContainerColors)
        ),
      };

  const renderIcon = () => {
    const iconSize = FontSizes.md;
    if (!icon) return null;
    return iconSource === "material" ? (
      <MaterialIcons
        name={icon as keyof typeof MaterialIcons.glyphMap}
        size={iconSize}
        color={onColorContainer}
      />
    ) : (
      <MaterialCommunityIcons
        name={icon as keyof typeof MaterialCommunityIcons.glyphMap}
        size={iconSize}
        color={onColorContainer}
      />
    );
  };

  return (
    <View style={[styles.container]}>
      {iconPosition === "left" && renderIcon()}
      <View style={[styles.tagContainer, { backgroundColor: colorContainer }]}>
        <Text style={[styles.text, { color: onColorContainer }]}>{text}</Text>
      </View>
      {iconPosition === "right" && renderIcon()}
    </View>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: PaddingMargin.xs,
    paddingHorizontal: PaddingMargin.md,
    borderRadius: BorderRadius.full,
    alignSelf: "flex-start",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: SpaceGaps.sm,
    alignSelf: "flex-start",
  },
  text: {
    fontSize: FontSizes.xs,
    fontWeight: "500",
  },
});

export default Tag;
