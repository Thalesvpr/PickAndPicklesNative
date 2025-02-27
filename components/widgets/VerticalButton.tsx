import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  GestureResponderEvent,
} from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import {
  BaseColors,
  ContainerColors,
  getForwardsColor,
  getOnColor,
  getOnContainerColor,
} from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import Badge from "./Badge";
import {
  BorderRadius,
  FontSizes,
  FontWeights,
  Gaps,
  PaddingMargin,
} from "@/constants/Theme";
import { TextStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import ListCount from "./ListCount";

interface VerticalButtonProps {
  title?: string;
  themeColor?: BaseColors;
  backwardsColor?: BaseColors | ContainerColors | "surface";
  icon: keyof typeof MaterialIcons.glyphMap | string;
  badge?: number;
  onPress?: (event: GestureResponderEvent) => void; // Add event parameter
  selected: boolean;
}

const VerticalButton: React.FC<VerticalButtonProps> = ({
  title,
  icon,
  themeColor = "primary",
  badge,
  backwardsColor = "surface",
  onPress,
  selected,
}) => {
  const backgroundColor = useThemeColor({}, `${themeColor}Container`);
  const selectedBackgroundColor = "transparent";

  const textColor = useThemeColor({}, getForwardsColor(backwardsColor));

  const iconColor = useThemeColor({}, `${getOnContainerColor(themeColor)}`);
  const selectedIconColor = useThemeColor({}, getForwardsColor(backwardsColor));

  // Cores do Badge
  const badgeBackgroundColor = useThemeColor({}, "errorContainer");
  const badgeTextColor = useThemeColor({}, "onErrorContainer");

  return (
    <Pressable
      style={[
        styles.buttonBase,
        // Estilo específico para botão com apenas texto
      ]}
      onPress={onPress}
    >
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: selected
              ? backgroundColor
              : selectedBackgroundColor,
          },
        ]}
      >
        <View style={[styles.icon]}>
          <MaterialIcons
            name={icon as keyof typeof MaterialIcons.glyphMap}
            size={20}
            color={selected ? iconColor : selectedIconColor}
          />
          {badge && <ListCount count={badge} />}
        </View>
      </View>

      {title && (
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: Gaps.sm,
  },
  text: {
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.normal,
  },
  iconContainer: {
    borderRadius: BorderRadius.full,
    paddingVertical: PaddingMargin.xs,
    paddingHorizontal: PaddingMargin.md,
  },
  icon: {
    position: "relative",
  },
});

export default VerticalButton;
