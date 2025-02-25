import { tkn } from "@/constants/Theme";
import { ThemedText, type ThemedTextProps } from "./ThemedText"; // Importe o ThemedText e seus tipos

// Objeto Texts com Composition Pattern
export const Texts = {
  Headline: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={tkn.fs.xl} // fontSize 20
      fontWeight={tkn.fw.medium} // fontWeight medium
    />
  ),
  Subheadline: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={tkn.fs.xl} // fontSize 20
      fontWeight={tkn.fw.medium} // fontWeight 600
      lineHeight={tkn.lh.xl} // lineHeight 32
    />
  ),
  SupportingText: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={tkn.fs.sm} // fontSize 16
      fontWeight={tkn.fw.normal} // fontWeight normal
      lineHeight={tkn.lh.sm} // lineHeight 24
    />
  ),
  Caption: (props: ThemedTextProps) => (
    <ThemedText
      {...props}
      fontSize={tkn.fs.xs} // fontSize 12
      fontWeight={tkn.fw.medium} // fontWeight normal
      lineHeight={tkn.lh.xs} // lineHeight 16
    />
  ),
};
