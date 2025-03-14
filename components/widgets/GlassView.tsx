import React from 'react';
import { View, StyleSheet, ViewProps, StyleProp, ViewStyle } from 'react-native';
import { BlurView } from '@react-native-community/blur';

// Função para converter cor hex para rgba
const hexToRgba = (hex: string, opacity: number): string => {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// Definindo as props do componente
interface GlassViewProps extends ViewProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  color?: string; // Cor hex (ex: "#ffffff")
  opacity?: number; // Opacidade (ex: 0.5)
  blurAmount?: number; // Intensidade do blur (ex: 10)
  blurType?: 'dark' | 'light' | 'xlight'; // Tipo de blur
}

const GlassView: React.FC<GlassViewProps> = ({
  children,
  style,
  color = '#ffffff', // Cor padrão: branco
  opacity = 0.5, // Opacidade padrão: 0.5
  blurAmount = 10, // Intensidade padrão do blur
  blurType = 'light', // Tipo padrão de blur
  ...props
}) => {
  // Converte a cor hex para rgba
  const backgroundColor = hexToRgba(color, opacity);

  return (
    <View style={[styles.glass, style]} {...props}>
      {/* Aplica o efeito de blur */}
      <BlurView
        style={StyleSheet.absoluteFill} // Preenche todo o espaço do componente
        blurAmount={blurAmount}
        blurType={blurType}
        reducedTransparencyFallbackColor="white"
      />
      {/* Conteúdo do componente */}
      <View style={[styles.content, { backgroundColor }]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  glass: {
    borderRadius: 10,
    overflow: 'hidden', // Garante que o blur não vaze para fora do container
  },
  content: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)', // Borda sutil
  },
});

export default GlassView;