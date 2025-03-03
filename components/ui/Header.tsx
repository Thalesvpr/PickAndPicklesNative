import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Texts } from "../widgets/Texts";
import { PaddingMargin, SpaceGaps } from "@/constants/Theme";

interface HeaderProps {
  title?: string;
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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexGrow: 1,
        }}
      >
        {/* Botão de voltar */}
        {showBackButton && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios" size={20} color={iconColor} />
          </TouchableOpacity>
        )}

        {title && <Texts.Headline style={styles.title}>{title}</Texts.Headline>}

        {/* Ações à direita */}
        <View style={styles.rightActions}>
          {rightActions?.map((action, index) => (
            <View key={index} style={styles.rightActionsItem}>
              {action}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: SpaceGaps.md,
    paddingHorizontal: PaddingMargin.lg,
    paddingVertical: PaddingMargin.md,
  },
  title: {
    flex: 1, // Ensure the title takes up the available space
    marginLeft: SpaceGaps.md, // Add some margin if needed
  },
  rightActions: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: SpaceGaps.md,
  },
  rightActionsItem: {
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
