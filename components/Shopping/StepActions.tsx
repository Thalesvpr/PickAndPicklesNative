import React from "react";
import { View, StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { BaseColors, getForwardsColor } from "@/constants/Colors";
import {
  FontSizes,
  LineHeights,
  PaddingMargin,
  SpaceGaps,
} from "@/constants/Theme";
import { BodyTexts, Texts } from "../widgets/Texts";
import { Button } from "../widgets/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Divider from "../widgets/Divider";

interface StepActionsProps {}

const StepActions: React.FC<StepActionsProps> = () => {
  const surfaceColor = useThemeColor({}, "surfaceContainerHigh");
  const textColor = useThemeColor({}, "onSurface");
  return (
    <View style={styles.stepContainer}>
      <BodyTexts.Title>Ações Rápidas</BodyTexts.Title>

      <View style={styles.actionContainer}>
        <MaterialCommunityIcons
          name="gesture-tap-hold"
          size={40}
          color={textColor}
        />
        <BodyTexts.Description themeColor="secondary">
          Pressione e segure um item para ver as opções.
        </BodyTexts.Description>
      </View>
      <Divider />
      {/* Ação: Editar */}
      {/* Ação: Editar */}
      <View style={styles.actionContainer}>
        <Button icon="pencil-outline" iconSource="materialCommunity" raw />
        <BodyTexts.Description>
          <Texts.Subheadline themeColor="primary">Edite</Texts.Subheadline> o
          nome, quantidade ou outros detalhes.
        </BodyTexts.Description>
      </View>

      {/* Ação: Excluir */}
      <View style={styles.actionContainer}>
        <Button icon="delete-outline" themeColor="error" raw />
        <BodyTexts.Description>
          <Texts.Subheadline themeColor="error">Exclua</Texts.Subheadline> o
          item da lista de compras atual.
        </BodyTexts.Description>
      </View>

      {/* Ação: Comprar */}
      <View style={styles.actionContainer}>
        <Button
          icon="basket-plus-outline"
          iconSource="materialCommunity"
          iconPosition="right"
          themeColor="tertiary"
          raw
        />
        <BodyTexts.Description>
          <Texts.Subheadline themeColor="tertiary">Adicione</Texts.Subheadline>{" "}
          o item ao carrinho de compras.
        </BodyTexts.Description>
      </View>
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
    alignItems: "center",
    marginBottom: SpaceGaps.md,
  },
});

export default StepActions;
