import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Button, ButtonProps } from "./widgets/Button";
import {
  BorderRadius,
  PaddingMargin,
  Sizes,
  SpaceGaps,
} from "@/constants/Theme";
import EditableWrapper from "./widgets/EditableWrapper";

// Interface para o Container
interface ContainerProps {
  children: React.ReactNode;
  isEditing?: boolean;
  onToggleEditing?: () => void; // Prop para o EditableWrapper
  actions?: React.ReactNode; // Prop para o EditableWrapper
  style?: StyleProp<ViewStyle>;
}

// Subcomponente: Container
const Container: React.FC<ContainerProps> = ({
  children,
  isEditing,
  onToggleEditing,
  actions,
  style,
}) => {
  const editingBackground = useThemeColor({}, "surfaceContainer");

  return (
    <EditableWrapper
      onToggleEditing={onToggleEditing || (() => {})} // Repassa a prop
      actions={actions} // Repassa os actions
      isEditing={isEditing} // Repassa a prop isEditing
      style={[
        styles.container,
        style, // Repassa o style
        {},
      ]}
    >
      {children}
    </EditableWrapper>
  );
};

// Subcomponente: Content
const Content: React.FC<{
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>; // Aceita a propriedade style
}> = ({ children, style }) => {
  return (
    <View style={[styles.content, style]}>{children}</View> // Repassa o style
  );
};
const Actions: React.FC<{
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>; // Aceita a propriedade style
}> = ({ children, style }) => {
  return (
    <View style={[styles.contentActions, style]}>{children}</View> // Repassa o style
  );
};

// Subcomponente: Tags
const ProductTags: React.FC<{
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>; // Aceita a propriedade style
}> = ({ children, style }) => {
  return <View style={[styles.tagContainer, style]}>{children}</View>;
};

// Subcomponente: MainButton
const MainButton: React.FC<ButtonProps> = (props) => {
  return (
    <View style={{ marginVertical: "auto", marginLeft: "auto" }}>
      <Button {...props} />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    padding: PaddingMargin.md,
    borderRadius: BorderRadius.md,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    gap: SpaceGaps.sm,
    alignItems: "flex-start",
  },
  tagContainer: {
    flexDirection: "row",
    gap: SpaceGaps.sm,
    alignItems: "center",
  },
  contentActions: {
    flexDirection: "row",
    gap: SpaceGaps.md,
    paddingHorizontal: PaddingMargin.md,
    justifyContent: "flex-end",
    width: "100%",
  },
});

// Exportação dos subcomponentes
export const ProductItemCard = {
  Container,
  Content,
  Actions,
  Tags: ProductTags,
  MainButton,
};
