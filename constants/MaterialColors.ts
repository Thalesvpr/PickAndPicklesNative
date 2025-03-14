import {
  argbFromHex,
  themeFromSourceColor,
} from "@material/material-color-utilities";

// Função para converter ARGB em HEX
function argbToHex(argb: number): string {
  const red = (argb >> 16) & 0xff;
  const green = (argb >> 8) & 0xff;
  const blue = argb & 0xff;
  return `#${red.toString(16).padStart(2, "0")}${green
    .toString(16)
    .padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
}

// Função para gerar cores dinamicamente
function generateColors(sourceColorHex: string, isDark: boolean) {
  const sourceColorArgb = argbFromHex(sourceColorHex);
  const theme = themeFromSourceColor(sourceColorArgb);
  const { primary, secondary, tertiary, neutral, error } = theme.palettes;

  return {
    primary: argbToHex(primary.tone(isDark ? 80 : 40)),
    onPrimary: argbToHex(primary.tone(isDark ? 20 : 100)),
    primaryContainer: argbToHex(primary.tone(isDark ? 30 : 90)),
    onPrimaryContainer: argbToHex(primary.tone(isDark ? 90 : 10)),

    secondary: argbToHex(secondary.tone(isDark ? 80 : 40)),
    onSecondary: argbToHex(secondary.tone(isDark ? 20 : 100)),
    secondaryContainer: argbToHex(secondary.tone(isDark ? 30 : 90)),
    onSecondaryContainer: argbToHex(secondary.tone(isDark ? 90 : 10)),

    tertiary: argbToHex(tertiary.tone(isDark ? 80 : 40)),
    onTertiary: argbToHex(tertiary.tone(isDark ? 20 : 100)),
    tertiaryContainer: argbToHex(tertiary.tone(isDark ? 30 : 90)),
    onTertiaryContainer: argbToHex(tertiary.tone(isDark ? 90 : 10)),

    error: argbToHex(error.tone(isDark ? 80 : 40)),
    onError: argbToHex(error.tone(isDark ? 20 : 100)),
    errorContainer: argbToHex(error.tone(isDark ? 30 : 90)),
    onErrorContainer: argbToHex(error.tone(isDark ? 90 : 10)),

    surfaceDim: argbToHex(neutral.tone(isDark ? 87 : 6)),
    surface: argbToHex(neutral.tone(isDark ? 98 : 6)),
    surfaceBright: argbToHex(neutral.tone(isDark ? 98 : 24)),
    surfaceContainerLowest: argbToHex(neutral.tone(isDark ? 100 : 4)),
    surfaceContainerLow: argbToHex(neutral.tone(isDark ? 96 : 10)),
    surfaceContainer: argbToHex(neutral.tone(isDark ? 94 : 12)),
    surfaceContainerHigh: argbToHex(neutral.tone(isDark ? 92 : 17)),
    surfaceContainerHighest: argbToHex(neutral.tone(isDark ? 90 : 22)),

    onSurface: argbToHex(neutral.tone(isDark ? 90 : 10)),
    onSurfaceVariant: argbToHex(neutral.tone(isDark ? 80 : 30)),

    outline: argbToHex(neutral.tone(isDark ? 60 : 50)),
    outlineVariant: argbToHex(neutral.tone(isDark ? 30 : 80)),

    inverseSurface: argbToHex(neutral.tone(isDark ? 90 : 20)),
    inverseOnSurface: argbToHex(neutral.tone(isDark ? 20 : 95)),
    inversePrimary: argbToHex(primary.tone(isDark ? 40 : 80)),

    scrim: argbToHex(neutral.tone(isDark ? 0 : 0)),
    shadow: argbToHex(neutral.tone(isDark ? 0 : 0)),
  };
}

// Cores para o tema claro
export const lightColors = generateColors("#4c662b", false);

// Cores para o tema escuro
export const darkColors = generateColors("#4c662b", true);

// Exporta as cores
export const Colors = {
  light: lightColors,
  dark: darkColors,
};
