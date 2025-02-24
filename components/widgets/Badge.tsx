import { BaseColors, getOnContainerColor } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface BadgeProps {
  value: number | string; // Valor exibido no badge (pode ser número ou texto)
  size?: "small" | "medium" | "large"; // Tamanho do badge
  themeColor?: BaseColors;
}

const Badge: React.FC<BadgeProps> = ({
  value,
  size = "medium",
  themeColor = "tertiary",
}) => {
  const backgroundColor = useThemeColor({}, `${themeColor}Container`);
  const textColor = useThemeColor({}, `${getOnContainerColor(themeColor)}`);

  // Define o tamanho do badge com base na prop `size`
  const getSize = () => {
    switch (size) {
      case "small":
        return {
          padding: 6,
          borderRadius: 9,
          fontSize: 10,
          minWidth: 18,
          maxHeight: 18,
        }; // Pequeno
      case "medium":
        return {
          padding: 8,
          borderRadius: 12,
          fontSize: 12,
          minWidth: 24,
          maxHeight: 24,
        }; // Médio
      case "large":
        return {
          padding: 10,
          borderRadius: 16,
          fontSize: 14,
          minWidth: 32,
          maxHeight: 32,
        }; // Grande
      default:
        return {
          padding: 8,
          borderRadius: 12,
          fontSize: 12,
          minWidth: 24,
          maxHeight: 24,
        }; // Padrão (médio)
    }
  };

  const { padding, borderRadius, fontSize, minWidth, maxHeight } = getSize();

  return (
    <View
      style={[
        styles.badgeContainer,
        { backgroundColor, padding, borderRadius, minWidth, maxHeight }, // Adicionado minWidth e maxHeight
      ]}
    >
      <Text style={[styles.badgeText, { fontSize, color: textColor }]}>
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", // Permite sobrepor outros elementos
    left: 15, // Posicionamento à esquerda
    bottom: 15, // Posicionamento na parte inferior
  },
  badgeText: {
    fontWeight: "600", // Fonte semi-negrito
  },
});

export default Badge;
