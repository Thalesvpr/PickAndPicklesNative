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
import ListCount from "../widgets/ListCount";
import Tag from "../widgets/Tag";

interface StepTagCountProps {}

const StepTagCount: React.FC<StepTagCountProps> = () => {
  const surfaceColor = useThemeColor({}, "surfaceContainerHigh");
  const textColor = useThemeColor({}, "onSurface");
  return (
    <View style={styles.stepContainer}>
      <BodyTexts.Title style={styles.title}>
        Classificação e Quantidade de Itens
      </BodyTexts.Title>
      <View
        style={[
          styles.exampleBox,
          {
            backgroundColor: surfaceColor,
            borderTopRightRadius: BorderRadius.lg,
          },
        ]}
      >
        <View
          style={[
            styles.tagAndCountContainer,
            { transform: [{ scale: 1.25 }] },
          ]}
        >
          <Tag text="Importante" rainbowColor="green" />
          <ListCount count={99} />
        </View>
      </View>
      <Divider />
      <BodyTexts.Description>
        A <Texts.Subheadline themeColor="primary">tag</Texts.Subheadline>{" "}
        classifica o item. Por exemplo, "Importante" para itens prioritários ou
        "Urgente" para compras imediatas.
      </BodyTexts.Description>
      <BodyTexts.Description>
        O <Texts.Subheadline themeColor="tertiary">contador</Texts.Subheadline>{" "}
        mostra quantos itens você precisa comprar.
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

export default StepTagCount;
