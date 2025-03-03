import { SpaceGaps } from "@/constants/Theme";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

interface ScaffoldProps {
  children: React.ReactNode;
  header?: React.ReactNode; // Header personalizado (opcional)
}

export const Scaffold = ({ children, header }: ScaffoldProps) => {
  const backgroundColor = useThemeColor({}, "surface");

  return (
    <View style={styles.container}>
      {/* Header */}
      {header && <View>{header}</View>}

      {/* Conteúdo principal com ScrollView */}
      <ScrollView contentContainerStyle={[styles.content, { backgroundColor }]}>
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    padding: 16,
    gap: SpaceGaps.lg,
  },
});
