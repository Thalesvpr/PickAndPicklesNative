import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ListCount from "./widgets/ListCount"; // Importando o componente ListCount
import { MaterialIcons } from "@expo/vector-icons";
import Button from "./widgets/Button";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "./widgets/ThemedText";
import { GroceriesIconSet } from "./GroceriesIconSet";
import { router } from "expo-router";
import { BorderRadius, Gaps, PaddingMargin } from "@/constants/Theme";
import { Texts } from "./widgets/Texts";

interface GroceriesListCardProps {
  listName: string;
  itemCount: number;
  supportingText: string;
  onAddItem: () => void;
  icon: keyof typeof GroceriesIconSet;
  id: number;
  badgeValue: number;
}

const GroceriesListCard: React.FC<GroceriesListCardProps> = ({
  id,
  listName,
  itemCount,
  supportingText,
  onAddItem,
  badgeValue,
  icon,
}) => {
  const backgroundColor = useThemeColor({}, "surfaceContainer");
  const IconComponent = GroceriesIconSet[icon];
  const handleNavigateToCart = (id: number) => {
    router.push(`/cart?id=${id}`);
  };
  return (
    <View style={[styles.card, { backgroundColor: backgroundColor }]}>
      <View
        style={[
          {
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          },
        ]}
      >
        <View style={styles.texts}>
          <Texts.Headline>{listName}</Texts.Headline>
          <Texts.SupportingText>{supportingText}</Texts.SupportingText>
        </View>
        <ListCount count={itemCount} />
      </View>

      {/* Botão outline com ícone à direita */}
      <View style={styles.actions}>
        <Button title="Ver Estoque" outline />
        <Button
          icon="shopping-cart"
          badge={badgeValue}
          onPress={() => handleNavigateToCart(id)}
        />
      </View>

      <View style={styles.icon}>
        <IconComponent />
      </View>
    </View>
  );
};

// Estilos do GroceriesListCard
const styles = StyleSheet.create({
  card: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: 200,
    alignItems: "flex-start",
    borderRadius: BorderRadius.md,
    padding: PaddingMargin.md,
    justifyContent: "space-between",
  },
  texts: {
    gap: 10,
  },
  actions: {
    flexDirection: "row",
    gap: Gaps.md,
  },
  icon: {
  
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});

export default GroceriesListCard;
