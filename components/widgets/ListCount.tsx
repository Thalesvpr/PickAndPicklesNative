import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor"; // Supondo que esse hook já exista

interface ListCountProps {
  count: number;
}

const ListCount: React.FC<ListCountProps> = ({ count }) => {
  const backgroundColor = useThemeColor({}, "tertiaryContainer");
  const textColor = useThemeColor({}, "onTertiaryContainer");
  const backgroundColorZero = useThemeColor({}, "errorContainer");
  const textColorZero = useThemeColor({}, "onErrorContainer");

  // Verifica se o count é zero e aplica as cores correspondentes
  const currentBackgroundColor =
    count === 0 ? backgroundColorZero : backgroundColor;
  const currentTextColor = count === 0 ? textColorZero : textColor;

  return (
    <View
      style={[styles.container, { backgroundColor: currentBackgroundColor }]}
    >
      <Text style={[styles.itemCount, { color: currentTextColor }]}>
        {count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 99,
    alignSelf: "flex-start",
  },
  itemCount: {
    fontSize: 12,
    fontWeight: "500",
  },
});

export default ListCount;
