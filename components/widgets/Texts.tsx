import { FontSizes, FontWeights, LineHeights } from "@/constants/Theme";
import { ThemedText, type ThemedTextProps } from "./ThemedText"; // Importe o ThemedText e seus tipos

// Objeto Texts com Composition Pattern
export const Texts = {
  Headline: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={FontSizes.xl}
      fontWeight={FontWeights.medium}
    />
  ),
  Subheadline: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={FontSizes.md}
      fontWeight={FontWeights.medium}
      lineHeight={LineHeights.md}
    />
  ),
  SupportingText: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={FontSizes.sm}
      fontWeight={FontWeights.normal}
      lineHeight={LineHeights.sm}
    />
  ),
  Caption: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={FontSizes.xs}
      fontWeight={FontWeights.medium}
      lineHeight={LineHeights.xs}
    />
  ),
  Button: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={FontSizes.sm}
      fontWeight={FontWeights.normal}
    />
  ),
  Label: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={FontSizes.sm}
      fontWeight={FontWeights.normal}
      lineHeight={LineHeights.sm}
    />
  ),
};

// Objeto BodyTexts com Composition Pattern
export const BodyTexts = {
  Title: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={FontSizes.xl}
      fontWeight={FontWeights.normal}
      lineHeight={LineHeights.xl}
    />
  ),
  Subtitle: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={FontSizes.md} // 20
      fontWeight={FontWeights.semibold}
      lineHeight={LineHeights.md}
    />
  ),
  Description: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={FontSizes.sm}
      fontWeight={FontWeights.normal}
      lineHeight={LineHeights.sm}
    />
  ),
};
