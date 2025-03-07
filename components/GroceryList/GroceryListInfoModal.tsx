import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import GenericModal from "../widgets/GenericModal";
import { BodyTexts, Texts } from "../widgets/Texts";
import { PaddingMargin, BorderRadius, SpaceGaps } from "@/constants/Theme";
import { useThemeColor } from "@/hooks/useThemeColor";
import Tag from "../widgets/Tag";
import ListCount from "../widgets/ListCount";
import Button from "../widgets/Button";
import Divider from "../widgets/Divider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import StepActions from "./StepActions";
import StepTagCount from "./StepTagCount";
import StepNameQuantity from "./StepNameQuantity";

interface GroceryListInfoModalProps {
  visible: boolean;
  onClose: () => void;
}

const staps = [];

const GroceryListInfoModal: React.FC<GroceryListInfoModalProps> = ({
  visible,
  onClose,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const surfaceColor = useThemeColor({}, "surfaceContainerHigh");
  const textColor = useThemeColor({}, "onSurface");

  const hendleOnClose = () => {
    setCurrentStep(0);
    onClose();
  };
  // Função para renderizar o conteúdo do passo atual
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <StepActions />;
      case 1:
        return <StepNameQuantity />;
      case 2:
        return <StepTagCount />;
      default:
        return null;
    }
  };

  const handleNext = () => {
    if (currentStep < 2) setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const actions = [
    currentStep > 0 && (
      <Button
        key="previous"
        title="Anterior"
        onPress={handlePrevious}
        outline
      />
    ),
    currentStep < 2 ? (
      <Button key="next" title="Próximo" onPress={handleNext} />
    ) : (
      <Button
        key="finish"
        title="Concluir"
        onPress={hendleOnClose}
        themeColor="tertiary"
      />
    ),
  ].filter(Boolean);

  return (
    <GenericModal
      visible={visible}
      onClose={onClose}
      headerTitle={`Passo ${currentStep + 1} de 3`}
      showCloseButton={true}
      actions={actions}
    >
      <View style={styles.container}>
        {/* Conteúdo Principal */}
        {renderStepContent()}
      </View>
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

export default GroceryListInfoModal;
