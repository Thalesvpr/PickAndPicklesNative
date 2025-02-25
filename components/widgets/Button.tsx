import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { BaseColors, getOnContainerColor } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import Badge from "./Badge";
import { tkn } from "@/constants/Theme";

interface ButtonProps {
  title?: string;
  themeColor?: BaseColors;
  outline?: boolean;
  icon?: keyof typeof MaterialIcons.glyphMap | string;
  iconPosition?: "left" | "right";
  badge?: number | string;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  outline = false,
  icon,
  themeColor = "primary",
  iconPosition = "left",
  badge,
  onPress,
}) => {
  const backgroundColor = useThemeColor({}, `${themeColor}Container`);
  const textColor = useThemeColor({}, `${getOnContainerColor(themeColor)}`);
  const borderColor = useThemeColor({}, "outlineVariant");
  const borderVariantColor = useThemeColor({}, "outline");

  // Cores do Badge
  const badgeBackgroundColor = useThemeColor({}, "errorContainer");
  const badgeTextColor = useThemeColor({}, "onErrorContainer");

  // Determina a cor do ícone com base no estado do botão
  const contentColor = outline ? borderVariantColor : textColor;

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
          : { backgroundColor },
        isIconOnly && styles.iconOnlyButton, // Estilo específico para botão com apenas ícone
        title && !icon && styles.textButton, // Estilo específico para botão com apenas texto
      ]}
      onPress={onPress}
    >
      <View style={[styles.content, { flexDirection: contentDirection }]}>
        {icon && (
          <View style={styles.iconContainer}>
            <MaterialIcons
              name={icon as keyof typeof MaterialIcons.glyphMap}
              size={20}
              color={contentColor}
            />
            {badge && (
              <Badge
                value={badge}
              />
            )}
          </View>
        )}
        {title && (
          <Text style={[styles.text, { color: contentColor }]}>{title}</Text>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    height: 40,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
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
    position: "relative",
  },
  iconOnlyButton: {
    width: 40,
    padding: 0, // Remove o padding padrão
  },
  textButton: {
    paddingHorizontal: tkn.pm.md, // Ajuste de padding para botão com apenas texto
  },
});

export default Button;