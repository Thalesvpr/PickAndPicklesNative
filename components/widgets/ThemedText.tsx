import { Text, type TextProps, StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import {
  Colors,
  OnColors,
  ContainerColors,
  BaseColors,
  OnContainerColors,
} from "@/constants/Colors";

// Definindo os tipos de cores
export type ThemedTextProps = TextProps & {
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  colorType?: BaseColors | ContainerColors | "surface";
};

export function ThemedText({
  style,
  type = "default",
  colorType = "surface", // Valor padrão é "surface"
  ...rest
}: ThemedTextProps) {
  // Função para determinar a cor com base no tipo
  const getColorKey = (): OnColors | "onSurface" | OnContainerColors => {
    if (colorType === "surface") {
      return "onSurface"; // Caso especial para "surface"
    }

    if (colorType.endsWith("Container")) {
      return `on${capitalizeFirstLetter(
        colorType.replace("Container", "")
      )}Container` as OnContainerColors;
    }

    return `on${capitalizeFirstLetter(colorType)}` as OnColors;
  };

  // Obtém a cor do tema com base na chave determinada
  const color = useThemeColor({}, getColorKey());

  return (
    <Text
      style={[
        { color }, // A cor é aplicada dinamicamente
        type === "default" && styles.default,
        type === "title" && styles.title,
        type === "defaultSemiBold" && styles.defaultSemiBold,
        type === "subtitle" && styles.subtitle,
        type === "link" && styles.link,
        style,
      ]}
      {...rest}
    />
  );
}

// Função auxiliar para capitalizar a primeira letra de uma string
function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Estilos do componente
const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
  },
});
