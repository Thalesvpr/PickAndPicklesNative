import { FontSizes, FontWeights, LineHeights } from "@/constants/Theme";
import { ThemedText, type ThemedTextProps } from "./ThemedText"; // Importe o ThemedText e seus tipos

// Objeto Texts com Composition Pattern
export const Texts = {
  Headline: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={FontSizes.xl} // fontSize 20
      fontWeight={FontWeights.medium} // fontWeight medium
    />
  ),
  Subheadline: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={FontSizes.xl} // fontSize 20
      fontWeight={FontWeights.medium} // fontWeight 600
      lineHeight={LineHeights.xl} // lineHeight 32
    />
  ),
  SupportingText: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={FontSizes.sm} // fontSize 16
      fontWeight={FontWeights.normal} // fontWeight normal
      lineHeight={LineHeights.sm} // lineHeight 24
    />
  ),
  Caption: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={FontSizes.xs} // fontSize 12
      fontWeight={FontWeights.medium} // fontWeight normal
      lineHeight={LineHeights.xs} // lineHeight 16
    />
  ),
  Button: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={FontSizes.sm}
      fontWeight={FontWeights.normal} // fontWeight normal
    />
  ),
};
