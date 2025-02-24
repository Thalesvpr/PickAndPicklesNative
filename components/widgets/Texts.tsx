import { ThemedText, type ThemedTextProps } from "./ThemedText"; // Importe o ThemedText e seus tipos

// Objeto Texts com Composition Pattern
export const Texts = {
  Headline: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={24}
      fontWeight="bold"
      lineHeight={32}
    />
  ),
  Subheadline: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={20}
      fontWeight="600"
      lineHeight={28}
    />
  ),
  SupportingText: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={16}
      fontWeight="normal"
      lineHeight={24}
    />
  ),
  Caption: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={12}
      fontWeight="normal"
      lineHeight={16}
    />
  ),
};