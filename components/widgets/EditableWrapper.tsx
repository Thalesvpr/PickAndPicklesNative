import { SpaceGaps } from "@/constants/Theme";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import {
  TouchableOpacity,
  Vibration,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";

interface EditableWrapperProps {
  onToggleEditing: () => void;
  children: React.ReactNode;
  actions?: React.ReactNode; // Actions que serão exibidos abaixo
  style?: StyleProp<ViewStyle>; // Estilo personalizado
  isEditing?: boolean; // Prop do Container
}

const EditableWrapper: React.FC<EditableWrapperProps> = ({
  onToggleEditing,
  children,
  actions,
  style,
  isEditing,
}) => {
  const editingBackgroundColor = useThemeColor({}, "surfaceContainer");
  return (
    <View style={{ gap: SpaceGaps.md }}>
      <TouchableOpacity
        onLongPress={() => {
          onToggleEditing();
          Vibration.vibrate(50);
        }}
        activeOpacity={0.8}
        delayLongPress={300}
      >
        <View
          style={[
            isEditing && { backgroundColor: editingBackgroundColor },
            style,
          ]}
        >
          {children}
        </View>
      </TouchableOpacity>
      {isEditing && actions && <View>{actions}</View>}
      {/* Actions abaixo do TouchableOpacity */}
    </View>
  );
};

export default EditableWrapper;
