import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { BaseColors, getOnContainerColor } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import Badge from "./Badge";

interface ButtonProps {
  title?: string;
  themeColor?: BaseColors;
  outline?: boolean;
  icon?: keyof typeof MaterialIcons.glyphMap | string; // Restringe a prop `icon` às chaves válidas do MaterialIcons
  iconPosition?: "left" | "right";
  badge?: number | string; // Prop para o badge
  onPress?: () => void; // Nova prop para o evento de clique
}

const Button: React.FC<ButtonProps> = ({
  title,
  outline = false,
  icon,
  themeColor = "primary",
  iconPosition = "left",
  badge, // Prop para o badge
  onPress, // Prop para o evento de clique
}) => {
  const backgroundColor = useThemeColor({}, `${themeColor}Container`);
  const textColor = useThemeColor({}, `${getOnContainerColor(themeColor)}`);
  const borderColor = useThemeColor({}, "outlineVariant");
  const borderVariantColor = useThemeColor({}, "outline");

  // Cores do Badge
  const badgeBackgroundColor = useThemeColor({}, "errorContainer"); // Cor de fundo do Badge
  const badgeTextColor = useThemeColor({}, "onErrorContainer"); // Cor do texto do Badge

  // Determina a cor do ícone com base no estado do botão
  const contentColor = outline ? borderVariantColor : textColor;

  // Verifica se o botão contém apenas o ícone
  const isIconOnly = !title && icon;

  // Estilo específico para quando o botão contém apenas o ícone
  const containerOnlyIconStyle = isIconOnly
    ? {
        width: 40, // Tamanho fixo para o botão
        height: 40, // Tamanho fixo para o botão
        padding: 0, // Remove o padding padrão
      }
    : {};

  return (
    <Pressable
      style={[
        styles.button,
        outline
          ? { backgroundColor: "transparent", borderColor, borderWidth: 2 }
          : { backgroundColor },
        containerOnlyIconStyle, // Aplica o estilo específico para ícone sozinho
      ]}
      onPress={onPress} // Adiciona o evento de clique
    >
      <View style={styles.content}>
        {icon && iconPosition === "left" && (
          <View style={styles.icon}>
            <MaterialIcons
              name={icon as keyof typeof MaterialIcons.glyphMap} // Passa o nome do ícone
              size={20} // Tamanho padrão do ícone
              color={contentColor} // Cor do ícone baseada no tema
            />
            {badge && <Badge value={badge} />}
          </View>
        )}
        {title && (
          <Text style={[styles.text, { color: contentColor }]}>{title}</Text>
        )}
        {icon && iconPosition === "right" && (
          <View style={styles.icon}>
            <MaterialIcons
              name={icon as keyof typeof MaterialIcons.glyphMap} // Passa o nome do ícone
              size={20} // Tamanho padrão do ícone
              color={contentColor} // Cor do ícone baseada no tema
            />
            {badge && <Badge value={badge} />}
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
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
  icon: {
    position: "relative", // Permite posicionar o badge corretamente
  },
});

export default Button;