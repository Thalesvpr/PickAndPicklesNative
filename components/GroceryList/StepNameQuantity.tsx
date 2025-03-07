import React from "react";
import { View, StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { BaseColors, getForwardsColor } from "@/constants/Colors";
import {
  BorderRadius,
  FontSizes,
  LineHeights,
  PaddingMargin,
  SpaceGaps,
} from "@/constants/Theme";
import { BodyTexts, Texts } from "../widgets/Texts";
import Button from "../widgets/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Divider from "../widgets/Divider";

interface StepNameQuantityProps {}

const StepNameQuantity: React.FC<StepNameQuantityProps> = () => {
  const surfaceColor = useThemeColor({}, "surfaceContainerHigh");
  const textColor = useThemeColor({}, "onSurface");
  return (
    <View style={styles.stepContainer}>
      <BodyTexts.Title style={styles.title}>
        Nome do Item e Quantidade
      </BodyTexts.Title>
      <View
        style={[
          styles.exampleBox,
          {
            backgroundColor: surfaceColor,
          },
        ]}
      >
        <Texts.Headline>Nome Exemplo</Texts.Headline>
        <Texts.Subheadline>000g</Texts.Subheadline>
      </View>
      <Divider />

      <BodyTexts.Description>
        O{" "}
        <Texts.Subheadline themeColor="primary">nome do item</Texts.Subheadline>{" "}
        é o que você deseja comprar. Ele ajuda a identificar o produto na lista.
      </BodyTexts.Description>
      <BodyTexts.Description>
        A <Texts.Subheadline themeColor="primary">quantidade</Texts.Subheadline>{" "}
        indica quanto você precisa do item. Pode ser em gramas, litros,
        unidades, etc.
      </BodyTexts.Description>
    </View>
  );
};

const styles = StyleSheet.create({
  stepContainer: {
    marginBottom: SpaceGaps.xl,
    gap: SpaceGaps.lg,
  },
  title: {
    maxWidth: 200,
  },
  exampleBox: {
    padding: PaddingMargin.lg,
    borderTopStartRadius: BorderRadius.lg,
    gap: SpaceGaps.lg,
    minHeight: 80,
    justifyContent: "center",
  },
  tagAndCountContainer: {
    flexDirection: "row",
    gap: SpaceGaps.md,
    justifyContent: "flex-end",
    marginRight: PaddingMargin.lg,
  },
  actionContainer: {
    flexDirection: "row",
    gap: SpaceGaps.md,
    marginBottom: SpaceGaps.md,
  },
});

export default StepNameQuantity;
