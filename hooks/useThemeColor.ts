// hooks/useThemeColor.ts
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useManualTheme } from "@/contexts/ManualThemeContext";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const systemTheme = useColorScheme() ?? "light"; // Tema do sistema
  const { manualTheme } = useManualTheme(); // Tema manual

  // Usa o tema manual se estiver definido; caso contrário, usa o tema do sistema
  const theme = manualTheme ?? systemTheme;

  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
