import React, { useState } from "react";
import { View, TextInput, StyleSheet, Platform } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "./ThemedText";
import {
  BorderRadius,
  FontSizes,
  FontWeights,
  LineHeights,
  PaddingMargin,
  Sizes,
} from "@/constants/Theme";
import { Texts } from "./Texts";

interface TextFieldProps {
  label: string;
  placeholder: string;
  helperText?: string;
  maxLength: number;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  helperText,
  maxLength,
  value,
  onChangeText,
  keyboardType = "default",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const characterCount = value.length;
  const textColor = useThemeColor({}, `onSurface`);
  const outlineColor = useThemeColor({}, `outline`);
  const outlineVariantColor = useThemeColor({}, `outlineVariant`);
  const backgroundColor = useThemeColor({}, "surfaceContainer");

  return (
    <View style={styles.container}>
      {/* Label */}
      <Texts.Label style={{ color: textColor, marginBottom: 8 }}>
        {label}
      </Texts.Label>

      {/* Input */}
      <TextInput
        style={[
          styles.input,
          {
            borderColor: isFocused ? outlineVariantColor : "transparent",
            color: textColor,
            backgroundColor: backgroundColor,
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={outlineVariantColor}
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength}
        keyboardType={keyboardType}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        underlineColorAndroid="transparent"
        // Additional properties to control focus appearance
      />

      {/* Helper Text */}
      {helperText && (
        <ThemedText
          fontSize={FontSizes.xs}
          fontWeight={FontWeights.normal}
          lineHeight={LineHeights.xs}
          style={{ color: outlineVariantColor, marginTop: 4 }}
        >
          {helperText}
        </ThemedText>
      )}

      {/* Character Counter */}
      <ThemedText
        fontSize={FontSizes.xs}
        fontWeight={FontWeights.normal}
        lineHeight={LineHeights.xs}
        style={{ color: outlineVariantColor, textAlign: "right" }}
      >
        {characterCount}/{maxLength}
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    height: Sizes.touchMinimal,
    borderWidth: 2,
    borderRadius: BorderRadius.full,
    padding: PaddingMargin.sm,
    paddingHorizontal: PaddingMargin.md,
    fontSize: FontSizes.sm,
  },
});

export default TextField;
