import React, { useRef, useState } from "react";
import { View, StyleSheet, PanResponder, Dimensions, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient"; // ou 'react-native-linear-gradient'
import { PaddingMargin } from "@/constants/Theme";
import { useThemeColor } from "@/hooks/useThemeColor";

const { width } = Dimensions.get("window");
const BAR_WIDTH = width - 40; // Largura da barra de cores
const BAR_HEIGHT = 20; // Altura da barra de cores
const BUTTON_SIZE = 30; // Tamanho do botão de seleção (30x30)

// Função para converter HSL para HEX
const hslToHex = (h: number, s: number, l: number): string => {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0"); // Converte para dois dígitos hexadecimais
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

interface ColorBarProps {
  onSelectColor?: (hexTarget: string) => void; // Função opcional para retornar a cor em HEX
}

const ColorBar: React.FC<ColorBarProps> = ({ onSelectColor }) => {
  const translateX = useSharedValue(0); // Posição horizontal do botão
  const [selectedColor, setSelectedColor] = useState("#FF0000"); // Cor selecionada
  const buttonBackgroundColor = useThemeColor({}, "surfaceContainerLowest");
  const buttonOutlineColor = useThemeColor({}, "outlineVariant");

  // Função para interpolar a cor com base na posição do botão
  const interpolateColor = (position: number) => {
    const hue = Math.round(position * 360); // Mapeia a posição para um valor de matiz (0-360)
    const hslColor = `hsl(${hue}, 100%, 50%)`; // Retorna uma cor no formato HSL
    const hexColor = hslToHex(hue, 100, 50); // Converte HSL para HEX
    return { hslColor, hexColor };
  };

  // Configuração do PanResponder para detectar o toque na barra
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const touchX = gestureState.moveX - (width - BAR_WIDTH) / 2; // Calcula a posição do toque relativa à barra
        const newX = Math.max(0, Math.min(touchX, BAR_WIDTH - BUTTON_SIZE)); // Limita o movimento do botão
        translateX.value = withSpring(newX, { damping: 20, stiffness: 100 }); // Atualiza a posição do botão
        const colorPosition = newX / (BAR_WIDTH - BUTTON_SIZE); // Calcula a posição relativa
        const { hslColor, hexColor } = interpolateColor(colorPosition); // Interpola a cor
        setSelectedColor(hslColor); // Atualiza a cor selecionada (em HSL)
        if (onSelectColor) {
          onSelectColor(hexColor); // Chama a função opcional com a cor em HEX
        }
      },
    })
  ).current;

  // Estilo animado para o botão
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={styles.container}>
      {/* Barra de cores com gradiente */}
      <View style={styles.colorBarContainer} {...panResponder.panHandlers}>
        <LinearGradient
          colors={["red", "yellow", "lime", "cyan", "blue", "magenta", "red"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.colorBar}
        />
      </View>
      {/* Botão de seleção (ignora toques) */}
      <Animated.View
        style={[
          styles.button,
          animatedStyle,
          {
            backgroundColor: buttonBackgroundColor,
            borderColor: buttonOutlineColor,
          },
        ]}
        pointerEvents="none" // Ignora toques
      />
      {/* Exibição da cor selecionada */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  colorBarContainer: {
    width: BAR_WIDTH,
    height: BAR_HEIGHT,
    borderRadius: BAR_HEIGHT / 2,
    marginVertical: PaddingMargin.md,
    overflow: "hidden", // Garante que o gradiente respeite o borderRadius
  },
  colorBar: {
    width: "100%",
    height: "100%",
  },
  button: {
    position: "absolute",
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    borderWidth: 5,
    top: (BAR_HEIGHT + PaddingMargin.md * 2 - BUTTON_SIZE) / 2, // Centraliza verticalmente com a barra
    left: -BUTTON_SIZE / 2, // Ajusta a posição inicial
  },
  selectedColorBox: {
    marginTop: 20,
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedColorText: {
    marginTop: 10,
    fontSize: 16,
    color: "#000",
  },
});

export default ColorBar;
