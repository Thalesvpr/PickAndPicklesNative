import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Texts } from "../widgets/Texts";
import { Gaps, PaddingMargin } from "@/constants/Theme";

interface HeaderProps {
  title: string;
  navigation: any; // Tipo pode ser ajustado conforme necessário
  showBackButton?: boolean;
  rightActions?: React.ReactNode[];
}

export const Header = ({
  title,
  navigation,
  showBackButton = false,
  rightActions,
}: HeaderProps) => {
  const backgroundColor = useThemeColor({}, "surface");
  const iconColor = useThemeColor({}, "onSurface");

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* Botão de voltar */}
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={20} color={iconColor} />
        </TouchableOpacity>
      )}

      <Texts.Headline style={styles.title}>{title}</Texts.Headline>

      {/* Ações à direita */}
      {rightActions?.map((action, index) => (
        <View key={index} style={styles.rightActions}>
          {action}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 86,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: Gaps.md,
    paddingHorizontal: PaddingMargin.md,
    paddingVertical: PaddingMargin.md,
  },
  title: {
    flex: 1, // Ensure the title takes up the available space
    marginLeft: Gaps.md, // Add some margin if needed
  },
  rightActions: {
    marginLeft: "auto",
  },
});
