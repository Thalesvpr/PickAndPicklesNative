import React from "react";
import { View, StyleSheet, TouchableOpacity, Vibration } from "react-native";
import { Texts } from "./widgets/Texts";
import Button from "./widgets/Button";
import { useThemeColor } from "@/hooks/useThemeColor";
import Tag from "./widgets/Tag";
import ListCount from "./widgets/ListCount";
import {
  BorderRadius,
  PaddingMargin,
  Sizes,
  SpaceGaps,
} from "@/constants/Theme";
import { RainbowBaseColors } from "@/constants/VariantCalors";

interface ProductItemCardProps {
  id: number;
  name: string;
  quantity: string;
  value: number;
  tagText: string;
  tagRainbowColor: RainbowBaseColors;
  isEditing: boolean;
  onToggleEditing: () => void;
  onEdit: () => void;
  onDelete: () => void;
  showAdd?: boolean;
}

const ProductItemCard: React.FC<ProductItemCardProps> = ({
  name,
  quantity,
  value,
  tagText,
  tagRainbowColor,
  isEditing,
  onToggleEditing,
  onEdit,
  onDelete,
  showAdd = true,
}) => {
  const editingBackground = useThemeColor({}, "surfaceContainer");

  return (
    <View style={[styles.wrapper, isEditing && styles.editingWrapper]}>
      <TouchableOpacity
        onLongPress={() => {
          onToggleEditing(); // Ativa a edição
          Vibration.vibrate(50); // Vibra por 50ms
        }}
        activeOpacity={0.8}
        delayLongPress={300} // Delay para evitar conflitos
      >
        <View
          style={[
            styles.container,
            isEditing && { backgroundColor: editingBackground },
          ]}
        >
          <View style={styles.contentContainer}>
            {isEditing && (
              <View style={{ marginVertical: "auto" }}>
                <Button icon="density-large" raw />
              </View>
            )}
            <View style={styles.textContainer}>
              <Texts.Subheadline>{name}</Texts.Subheadline>
              <Texts.SupportingText>{quantity}</Texts.SupportingText>
            </View>

            <View style={styles.tagsContainer}>
              <Tag text={tagText} rainbowColor={tagRainbowColor} />
              <ListCount count={value} />
            </View>
          </View>
          {value == 0 && !isEditing && showAdd && (
            <View style={{ marginVertical: "auto", marginLeft: "auto" }}>
              <Button
                icon="basket-plus-outline"
                iconSource="materialCommunity"
                iconPosition="right"
                onPress={onDelete}
                themeColor="tertiary"
                outline
              />
            </View>
          )}
        </View>
      </TouchableOpacity>
      {isEditing && (
        <View style={styles.actionButtonsContainer}>
          <Button
            icon="delete-outline"
            onPress={onDelete}
            themeColor="error"
            outline
          />
          <Button
            icon="pencil-outline"
            iconSource="materialCommunity"
            onPress={onEdit}
            outline
          />
          <Button
            icon="basket-plus-outline"
            iconSource="materialCommunity"
            iconPosition="right"
            onPress={onDelete}
            themeColor="tertiary"
            outline
            title="Comprar"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  editingWrapper: {},
  container: {
    padding: PaddingMargin.md,
    borderRadius: BorderRadius.md,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: SpaceGaps.md,
    alignItems: "flex-start",
    height: Sizes.smallContainerHeight,
  },
  textContainer: {
    gap: SpaceGaps.md,
    flex: 1,
  },
  tagsContainer: {
    flexDirection: "row",
    gap: SpaceGaps.sm,
    alignItems: "center",
  },
  actionButtonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "center",
    gap: SpaceGaps.lg,
    marginTop: SpaceGaps.md,
  },
});

export default ProductItemCard;
