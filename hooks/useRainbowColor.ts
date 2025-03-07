import { useColorScheme } from "@/hooks/useColorScheme";
import { useManualTheme } from "@/contexts/ManualThemeContext";
import { RainbowBaseColors, RainbowColors } from "@/constants/VariantCalors";

export function useRainbowColor(colorName: RainbowBaseColors) {
  const systemTheme = useColorScheme() ?? "light"; // Tema do sistema
  const { manualTheme } = useManualTheme(); // Tema manual

  // Usa o tema manual se estiver definido; caso contrário, usa o tema do sistema
  const theme = manualTheme ?? systemTheme;

  return RainbowColors[theme][colorName];
}
