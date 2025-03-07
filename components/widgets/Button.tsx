import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import {
  BaseColors,
  getForwardsColor,
  getOnContainerColor,
} from "@/constants/Colors";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Badge from "./Badge";
import { BorderRadius, PaddingMargin, Sizes } from "@/constants/Theme";
import { Texts } from "./Texts";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";

interface ButtonProps {
  title?: string;
  themeColor?: BaseColors;
  outline?: boolean;
  icon?:
    | keyof typeof MaterialIcons.glyphMap
    | keyof typeof MaterialCommunityIcons.glyphMap;
  iconSource?: "material" | "materialCommunity";
  iconPosition?: "left" | "right";
  badge?: number;
  onPress?: () => void;
  disabled?: boolean;
  raw?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  outline = false,
  icon,
  iconSource = "material",
  themeColor = "primary",
  iconPosition = "left",
  badge,
  onPress,
  disabled = false,
  raw,
}) => {
  const backgroundColor = useThemeColor({}, `${themeColor}Container`);
  const textColor = useThemeColor(
    {},
    `${getForwardsColor(`${themeColor}Container`)}`
  );
  const borderColor = themeColor && useThemeColor({}, "outlineVariant");
  const borderVariantColor = useThemeColor({}, "outline");

  // Verifica se o botão contém apenas o ícone
  const isIconOnly = !title && icon;

  // Determina a direção da row com base na posição do ícone
  const contentDirection = iconPosition === "left" ? "row" : "row-reverse";

  return (
    <Pressable
      style={[
        styles.buttonBase,
        outline
          ? { backgroundColor: "transparent", borderColor, borderWidth: 2 }
          : raw
          ? {
              backgroundColor: "transparent",
              borderWidth: 0,
            }
          : { backgroundColor },
        isIconOnly && styles.iconOnlyButton, // Estilo específico para botão com apenas ícone
        title && !icon && styles.textButton, // Estilo específico para botão com apenas texto
        title && icon && styles.textButton,
        disabled && { opacity: 0.5 },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={[styles.content, { flexDirection: contentDirection }]}>
        {icon && (
          <View style={styles.iconContainer}>
            {iconSource === "material" ? (
              <MaterialIcons
                name={icon as keyof typeof MaterialIcons.glyphMap}
                size={20}
                color={textColor}
              />
            ) : (
              <MaterialCommunityIcons
                name={icon as keyof typeof MaterialCommunityIcons.glyphMap}
                size={20}
                color={textColor}
              />
            )}
            {badge ? (
              <View style={styles.badgeWrapper}>
                <Badge value={badge} themeColor="primary" />
              </View>
            ) : null}
          </View>
        )}
        {title && (
          <Texts.Button backwardsColor={`${themeColor}Container`}>
            {title}
          </Texts.Button>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    height: Sizes.touchMinimal,
    borderRadius: BorderRadius.full,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "relative",
  },
  content: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
  },
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
  },
  badgeWrapper: {
    position: "absolute",
    top: -15,
    left: 20,
    zIndex: 1,
  },
  iconOnlyButton: {
    width: 40,
    padding: 0,
  },
  textButton: {
    paddingHorizontal: PaddingMargin.md,
  },
});

export default Button;
