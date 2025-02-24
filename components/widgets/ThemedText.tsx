import { Text, type TextProps, StyleSheet, type TextStyle } from "react-native";
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
  backwardsColor?: BaseColors | ContainerColors | "surface";
  fontSize?: number;
  fontWeight?: TextStyle["fontWeight"]; // Tipo correto para fontWeight
  lineHeight?: number;
  style?: TextProps["style"];
};

export function ThemedText({
  style,
  backwardsColor = "surface",
  fontSize,
  fontWeight,
  lineHeight,
  ...rest
}: ThemedTextProps) {
  // Função para determinar a cor com base no tipo
  const getColorKey = (): OnColors | "onSurface" | OnContainerColors => {
    if (backwardsColor === "surface") {
      return "onSurface"; // Caso especial para "surface"
    }

    if (backwardsColor.endsWith("Container")) {
      return `on${capitalizeFirstLetter(
        backwardsColor.replace("Container", "")
      )}Container` as OnContainerColors;
    }

    return `on${capitalizeFirstLetter(backwardsColor)}` as OnColors;
  };

  // Obtém a cor do tema com base na chave determinada
  const color = useThemeColor({}, getColorKey());

  return (
    <Text
      style={[
        { 
          color, // A cor é aplicada dinamicamente
          fontSize,
          fontWeight, // Agora é do tipo correto
          lineHeight,
        },
        style, // Estilos personalizados passados como prop
      ]}
      {...rest}
    />
  );
}

// Função auxiliar para capitalizar a primeira letra de uma string
function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Estilos do componente (adicione estilos personalizados aqui, se necessário)
const styles = StyleSheet.create({
  // Exemplo de estilo padrão para o texto
  defaultText: {
    fontSize: 16,
    lineHeight: 24,
  },
});