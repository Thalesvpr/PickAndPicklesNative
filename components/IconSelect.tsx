import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { GroceriesIconSet } from "./GroceriesIconSet"; // Importe o conjunto de ícones
import { useThemeColor } from "@/hooks/useThemeColor"; // Importe o hook useThemeColor
import {
  BorderRadius,
  FontSizes,
  PaddingMargin,
  Sizes,
  SpaceGaps,
} from "@/constants/Theme";
import { ThemedText } from "./widgets/ThemedText";
import Divider from "./widgets/Divider";
import { Texts } from "./widgets/Texts";
import { MaterialIcons } from "@expo/vector-icons";

interface IconSelectProps {
  onSelect: (category: keyof typeof GroceriesIconSet) => void; // Função chamada quando um ícone é selecionado
}

const IconSelect: React.FC<IconSelectProps> = ({ onSelect }) => {
  const [selectedIcon, setSelectedIcon] = useState<
    keyof typeof GroceriesIconSet | null
  >("Abobora");
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a abertura/fechamento
  const [selectedOnce, setSelectedOnce] = useState(false); // Estado para controlar a abertura/fechamento

  // Obtém as cores do tema atual
  const backgroundColor = useThemeColor({}, "surfaceContainer");
  const selectedColor = useThemeColor({}, "surfaceBright");

  const textColor = useThemeColor({}, "onSurface");
  const borderColor = useThemeColor({}, "outlineVariant");
  const selectedBackgroundColor = useThemeColor({}, "surfaceDim");

  const primaryColor = useThemeColor({}, "primary");
  const secondaryColor = useThemeColor({}, "secondary");
  const IconSelectedComponent =
    GroceriesIconSet[selectedIcon as keyof typeof GroceriesIconSet];

  // Função para lidar com a seleção de um ícone
  const handleSelect = (category: keyof typeof GroceriesIconSet) => {
    setSelectedIcon(category);
    setSelectedOnce(true);
    onSelect(category); // Chama a função passada via prop com a categoria selecionada
    toggleItems();
  };

  // Função para abrir/fechar os itens
  const toggleItems = () => {
    setIsOpen(!isOpen); // Alterna entre abrir e fechar
  };

  return (
    <View style={[styles.container]}>
      <Texts.Label style={[{ color: textColor }]}>
        Selecione um ícone:
      </Texts.Label>
      <TouchableOpacity
        style={[
          styles.iconButton,
          {
            backgroundColor: backgroundColor,
            borderWidth: 0,
            borderColor: borderColor,
          },
          isOpen && {},
        ]}
        onPress={toggleItems} // Abre/fecha os itens ao pressionar
      >
        <IconSelectedComponent
          width={50}
          height={50}
          style={styles.iconComponent}
        />
        <ThemedText
          fontSize={FontSizes.sm}
          style={{ color: selectedOnce ? textColor : borderColor }}
        >
          {selectedIcon}
        </ThemedText>

        {isOpen ? (
          <MaterialIcons name="keyboard-arrow-up" color={textColor} size={20} />
        ) : (
          <MaterialIcons
            name="keyboard-arrow-down"
            color={textColor}
            size={20}
          />
        )}
      </TouchableOpacity>
      {isOpen && (
        <ScrollView
          contentContainerStyle={styles.iconsContainer}
          style={styles.scrollView}
        >
          <Divider />
          {Object.keys(GroceriesIconSet).map((category) => {
            const IconComponent =
              GroceriesIconSet[category as keyof typeof GroceriesIconSet];
            return (
              <TouchableOpacity
                key={category}
                style={[
                  styles.iconButtonItem,
                  {
                    backgroundColor: backgroundColor,
                  },
                  selectedIcon === category && {
                    backgroundColor: selectedColor,
                  },
                ]}
                onPress={() =>
                  handleSelect(category as keyof typeof GroceriesIconSet)
                }
              >
                <IconComponent
                  width={50}
                  height={50}
                  style={styles.iconComponent}
                  fill={selectedIcon === category ? primaryColor : textColor}
                />
                <ThemedText fontSize={FontSizes.sm}>{category}</ThemedText>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: SpaceGaps.md,
    flex: 1, // Adicionado para garantir que o container ocupe todo o espaço disponível
  },
  scrollView: {
    //maxHeight: 200, // Define uma altura máxima para o ScrollView
  },
  iconsContainer: {
    gap: SpaceGaps.lg,
    paddingBottom: PaddingMargin.md, // Adiciona um padding no final para garantir que o último item não fique cortado
  },
  iconButton: {
    height: Sizes.touchMinimal,
    paddingHorizontal: PaddingMargin.lg,
    borderRadius: BorderRadius.full,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    gap: SpaceGaps.md,
  },
  iconButtonItem: {
    height: 60,
    paddingHorizontal: PaddingMargin.lg,
    borderRadius: BorderRadius.full,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    gap: SpaceGaps.md,
  },
  iconComponent: {
    position: "absolute",
    right: 0,
    top: "50%", // Move o elemento para 50% do topo
    transform: [{ translateY: -50 }],
    width: "auto",
  },
});

export default IconSelect;
