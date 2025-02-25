import { BaseColors, ContainerColors, getOnContainerColor } from "@/constants/Colors";
import { tkn } from "@/constants/Theme";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { View, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { Texts } from "./Texts";

interface BadgeProps {
  value: number | string; // Valor exibido no badge (pode ser número ou texto)
  themeColor?: BaseColors;
}

const Badge: React.FC<BadgeProps> = ({
  value,
  themeColor = "tertiary",
}) => {
  const backgroundColor = useThemeColor({}, `${themeColor}Container`);
  const textColor = useThemeColor({}, `${getOnContainerColor(themeColor)}`);

  // Converte o valor para string para verificar o comprimento
  const valueString = value.toString();

  return (
    <View
      style={[
        styles.badgeContainer,
        {
          backgroundColor,
          paddingHorizontal: valueString.length > 2 ? 8 : 0, // Ajusta o padding para valores maiores
          borderRadius: 12, // Metade da altura para garantir que fique redondinho
        }
      ]}
    >
      <Texts.Caption
        backwardsColor="surface"
      
        numberOfLines={1} // Impede que o texto quebre
      >
        {value}
      </Texts.Caption>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    minWidth: 24, // Largura mínima para valores pequenos
    minHeight: 24, // Altura fixa
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", // Permite sobrepor outros elementos
    left: 15, // Posicionamento à esquerda
    bottom: 15, // Posicionamento na parte inferior
  },
});

export default Badge;