import { Text, type TextProps, StyleSheet, type TextStyle } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import {
  ContainerColors,
  BaseColors,
  getForwardsColor,
} from "@/constants/Colors";

// Definindo os tipos de cores
export type ThemedTextProps = TextProps & {
  backwardsColor?: BaseColors | ContainerColors | "surface";
  themeColor?: BaseColors | ContainerColors | "surface" | "outline";
  fontSize?: number;
  fontWeight?: TextStyle["fontWeight"]; // Tipo correto para fontWeight
  lineHeight?: number;
  style?: TextProps["style"];
  nowrap?: boolean; // Propriedade para evitar quebra de linha
};

export function ThemedText({
  style,
  themeColor,
  backwardsColor = "surface",
  fontSize,
  fontWeight,
  lineHeight,
  nowrap,
  ...rest
}: ThemedTextProps) {
  // Obtém a cor do tema com base na chave determinada
  const forwordsThemeColor = useThemeColor(
    {},
    getForwardsColor(backwardsColor)
  );
  const color = useThemeColor({}, themeColor ? themeColor : "error");

  return (
    <Text
      style={[
        styles.defaultText, // Estilo padrão
        {
          color: themeColor ? color : forwordsThemeColor, // A cor é aplicada dinamicamente
          fontSize,
          fontWeight, // Agora é do tipo correto
          lineHeight,
          fontFamily: "Inter",
          flexShrink: nowrap ? 0 : 1, // Impede que o texto encolha se nowrap for true
        },
        style, // Estilos personalizados passados como prop
      ]}
      {...rest}
    />
  );
}

// Estilos do componente
const styles = StyleSheet.create({
  defaultText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
