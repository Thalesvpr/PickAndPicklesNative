import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import GenericModal from "../widgets/GenericModal";
import { PaddingMargin, BorderRadius, SpaceGaps } from "@/constants/Theme";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Button } from "../widgets/Button";

interface AddItemModalProps {
  visible: boolean;
  onClose: () => void;
  onAddItem: () => void;
}

const staps = [];

const AddItemModal: React.FC<AddItemModalProps> = ({
  visible,
  onClose,
  onAddItem,
}) => {
  const surfaceColor = useThemeColor({}, "surfaceContainerHigh");
  const textColor = useThemeColor({}, "onSurface");

  const hendleOnClose = () => {
    onClose();
  };

  return (
    <GenericModal
      visible={visible}
      onClose={onClose}
      headerTitle={`Adcionar Item`}
      showCloseButton={true}
      actions={[
        <Button
          icon="add"
          title="Adcionar"
          onPress={hendleOnClose}
          themeColor="tertiary"
        />,
      ]}
    >
      <View style={styles.container}></View>
    </GenericModal>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: PaddingMargin.md,
  },
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

export default AddItemModal;
