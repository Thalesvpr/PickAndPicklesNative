import React, { ReactNode, useRef } from "react";
import {
  View,
  Modal as RNModal,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
  StyleProp,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from "../../hooks/useThemeColor";
import Button from "./Button";
import { Texts } from "./Texts";

// Interface principal do modal
interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  modalStyle?: StyleProp<ViewStyle>;
  closeOnBackdropPress?: boolean;
  actions?: ReactNode[]; // Array de ReactNode para permitir componentes personalizados
  showActions?: boolean;
  showCloseButton?: boolean;
  closeButtonColor?: string;
  headerTitle?: string;
  headerTitleStyle?: StyleProp<TextStyle>;
  actionsContainerStyle?: StyleProp<ViewStyle>; // Estilo para o container das ações
  bgOpacity?: number; // Nova propriedade para controlar a opacidade do fundo
}

const GenericModal: React.FC<ModalProps> = ({
  visible,
  onClose,
  children,
  containerStyle,
  modalStyle,
  closeOnBackdropPress = true,
  actions,
  showCloseButton = true,
  closeButtonColor,
  headerTitle,
  showActions = true,
  headerTitleStyle,
  actionsContainerStyle,
  bgOpacity = 0.5, // Valor padrão para a opacidade do fundo
}) => {
  const containerBackgroundColor = useThemeColor({}, "shadow");
  const modalBackgroundColor = useThemeColor({}, "surfaceContainerLow");
  const textColor = useThemeColor({}, "onSurface");
  const modalRef = useRef<View>(null);

  // Ações padrão que serão usadas se nenhuma ação for fornecida
  const defaultActions: ReactNode[] = [
    <Button key="cancel" title="Cancelar" onPress={onClose} />,
    <Button
      key="submit"
      title="Concluir"
      onPress={() => {
        console.log("Ação concluída");
        onClose();
      }}
    />,
  ];

  const modalActions = actions || defaultActions;

  const handleBackdropPress = (event: any) => {
    if (!closeOnBackdropPress) return;

    // Verificar se o clique foi fora do modal
    const { locationX, locationY } = event.nativeEvent;
    modalRef.current?.measure(
      (
        x: number,
        y: number,
        width: number,
        height: number,
        pageX: number,
        pageY: number
      ) => {
        if (
          locationX < pageX ||
          locationX > pageX + width ||
          locationY < pageY ||
          locationY > pageY + height
        ) {
          onClose();
        }
      }
    );
  };

  // Função para converter a cor hexadecimal para rgba com opacidade
  const hexToRgba = (hex: string, opacity: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  // Aplica a opacidade à cor de fundo
  const backgroundColorWithOpacity = hexToRgba(
    containerBackgroundColor,
    bgOpacity
  );

  return (
    <RNModal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={handleBackdropPress}>
        <View
          style={[
            styles.container,
            { backgroundColor: backgroundColorWithOpacity }, // Aplica a cor com opacidade
            containerStyle,
          ]}
        >
          <TouchableWithoutFeedback>
            <View
              ref={modalRef}
              style={[
                styles.modal,
                { backgroundColor: modalBackgroundColor },
                modalStyle,
              ]}
            >
              {/* Header */}
              <View style={styles.header}>
                {headerTitle && (
                  <Texts.Subheadline style={{ maxWidth: 200 }}>
                    {headerTitle}
                  </Texts.Subheadline>
                )}
                {showCloseButton && (
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={onClose}
                  >
                    <Ionicons
                      name="close"
                      size={24}
                      color={closeButtonColor || textColor}
                    />
                  </TouchableOpacity>
                )}
              </View>

              {/* Content */}
              <View style={styles.content}>{children}</View>

              {/* Actions */}
              {showActions && (
                <View style={[styles.actions, actionsContainerStyle]}>
                  {modalActions.map((action, index) => (
                    <React.Fragment key={index}>{action}</React.Fragment>
                  ))}
                </View>
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modal: {
    width: "90%",
    borderRadius: 10,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  closeButton: {
    padding: 5,
  },
  content: {
    marginBottom: 20,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default GenericModal;
