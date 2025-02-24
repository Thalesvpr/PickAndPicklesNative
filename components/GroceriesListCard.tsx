import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ListCount from "./widgets/ListCount"; // Importando o componente ListCount
import { MaterialIcons } from "@expo/vector-icons";
import Button from "./widgets/Button";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "./widgets/ThemedText";
import { GroceriesIconSet } from "./GroceriesIconSet";

interface GroceriesListCardProps {
  listName: string;
  itemCount: number;
  supportingText: string;
  onAddItem: () => void;
  icon: keyof typeof GroceriesIconSet;
}

const GroceriesListCard: React.FC<GroceriesListCardProps> = ({
  listName,
  itemCount,
  supportingText,
  onAddItem,
  icon,
}) => {
  const backgroundColor = useThemeColor({}, "surfaceContainer");
  const IconComponent = GroceriesIconSet[icon];
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
        <View>
          <ThemedText style={styles.listName}>{listName}</ThemedText>
          <ThemedText style={styles.supportingText}>
            {supportingText}
          </ThemedText>
        </View>
        <ListCount count={itemCount} />
      </View>

      {/* Botão outline com ícone à direita */}
      <View style={styles.actions}>
        <Button title="Ver Estoque" outline />
        <Button icon="shopping-cart" badge={1} />
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
    maxWidth: 380,
    height: 200,
    alignItems: "flex-start",
    borderRadius: 8,
    padding: 16,
    justifyContent: "space-between",
  },

  listName: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 8,
  },
  supportingText: {
    fontSize: 14,
    color: "#888",
    marginBottom: 16,
  },
  actions: {
    flexDirection: "row",
    gap: 10,
  },
  icon: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});

export default GroceriesListCard;
