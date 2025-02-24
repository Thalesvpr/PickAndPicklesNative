import React, { useState } from "react";
import {
  Pressable,
  View,
  Animated,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { BaseColors } from "@/constants/Colors";

export type SwitchProps = {
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  themeColor?: BaseColors;
  size?: "small" | "medium" | "large";
  iconOn?: React.ReactNode;
  iconOff?: React.ReactNode;
  align?: "left" | "right";
};

export function Switch({
  value = false,
  onValueChange,
  themeColor = "primary", // Cor base padrão
  size = "medium",
  iconOn,
  iconOff,
  align = "left",
}: SwitchProps) {
  const [isOn, setIsOn] = useState(value);

  // Obtém as cores base e container automaticamente
  const thumbColorOff = useThemeColor({}, "outline");
  const thumbColorOn = useThemeColor({}, themeColor); // Cor base
  const trackColorOn = useThemeColor({}, `${themeColor}Container`); // Container correspondente
  const trackColorOff = useThemeColor({}, "outlineVariant");

  const getSizeValues = () => {
    switch (size) {
      case "small":
        return { width: 40, height: 24, thumbSize: 18, translation: 16 };
      case "large":
        return { width: 60, height: 36, thumbSize: 28, translation: 24 };
      default: // medium
        return { width: 50, height: 30, thumbSize: 22, translation: 20 };
    }
  };

  const sizeValues = getSizeValues();
  const translateX = new Animated.Value(isOn ? sizeValues.translation : 0);
  const colorAnimation = new Animated.Value(isOn ? 1 : 0);

  const toggleSwitch = () => {
    const newValue = !isOn;
    setIsOn(newValue);

    Animated.parallel([
      Animated.timing(translateX, {
        toValue: newValue ? sizeValues.translation : 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(colorAnimation, {
        toValue: newValue ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();

    onValueChange?.(newValue);
  };

  const thumbAnimatedColor = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [thumbColorOff, thumbColorOn],
  });

  const icon = isOn ? iconOn : iconOff;

  const containerStyle: ViewStyle = {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: align === "right" ? "flex-end" : "flex-start",
  };

  const switchStyles = [
    styles.switch,
    {
      width: sizeValues.width,
      height: sizeValues.height,
      backgroundColor: isOn ? trackColorOn : trackColorOff,
    },
  ];

  const thumbStyles = [
    styles.thumb,
    {
      width: sizeValues.thumbSize,
      height: sizeValues.thumbSize,
      borderRadius: sizeValues.thumbSize / 2,
      backgroundColor: thumbAnimatedColor,
      transform: [{ translateX }],
    },
  ];

  return (
    <View style={containerStyle}>
      <Pressable onPress={toggleSwitch} style={switchStyles}>
        <Animated.View style={thumbStyles}>
          {icon && <View style={styles.iconContainer}>{icon}</View>}
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  switch: {
    borderRadius: 99,
    justifyContent: "center",
  },
  thumb: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    margin: 4,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});