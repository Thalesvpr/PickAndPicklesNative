import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "./widgets/Button";
import { useThemeColor } from "@/hooks/useThemeColor";
import { GroceriesIconSet } from "./GroceriesIconSet";
import { router } from "expo-router";
import { BorderRadius, SpaceGaps, PaddingMargin } from "@/constants/Theme";
import { Texts } from "./widgets/Texts";
import Tag from "./widgets/Tag";

interface GroceriesListCardProps {
  listName: string;
  itemCount: number;
  supportingText: string;
  onAddItem: () => void;
  icon: keyof typeof GroceriesIconSet;
  id: number;
  badgeValue: number;
  disabled?: boolean;
}

const GroceriesListCard: React.FC<GroceriesListCardProps> = ({
  id,
  listName,
  itemCount,
  supportingText,
  onAddItem,
  badgeValue,
  icon,
  disabled = false,
}) => {
  const backgroundColor = useThemeColor({}, "surfaceContainer");
  const IconComponent = GroceriesIconSet[icon];
  const handleNavigateToCart = (id: number) => {
    router.push(`/grocery-list?id=${id}`);
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
        <Tag text={itemCount} color="tertiary" />
      </View>

      {/* Botão outline com ícone à direita */}
      <View style={styles.actions}>
        <Button
          icon="file-cabinet"
          iconSource="materialCommunity"
          badge={badgeValue}
          badgeThemeColor="error"
          iconPosition="right"
          title="Ver Estoque"
          onPress={() => handleNavigateToCart(id)}
          disabled={disabled}
          outline
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
    // backgroundColor: "red",
    gap: 10,
    maxWidth: 200,
  },
  actions: {
    flexDirection: "row",
    gap: SpaceGaps.md,
  },
  icon: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});

export default GroceriesListCard;
