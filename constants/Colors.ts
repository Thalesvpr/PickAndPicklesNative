export const Colors = {
  light: {
    primary: "#4c662b",
    onPrimary: "#ffffff",
    primaryContainer: "#cdeda3",
    onPrimaryContainer: "#354e15",

    secondary: "#586249",
    onSecondary: "#ffffff",
    secondaryContainer: "#dce7c7",
    onSecondaryContainer: "#404a33",

    tertiary: "#386663",
    onTertiary: "#ffffff",
    tertiaryContainer: "#bcece7",
    onTertiaryContainer: "#1f4e4b",

    error: "#ba1a1a",
    onError: "#ffffff",
    errorContainer: "#ffdad6",
    onErrorContainer: "#93000a",

    surfaceDim: "#dadbd0",
    surface: "#f9faef",
    surfaceBright: "#f9faef",
    surfaceContainerLowest: "#ffffff",
    surfaceContainerLow: "#f3f4e9",
    surfaceContainer: "#f3f4e9",
    surfaceContainerHigh: "#e8e9de",
    surfaceContainerHighest: "#e2e3d8",

    onSurface: "#1a1c16",
    onSurfaceVariant: "#44483d",

    outline: "#75796c",
    outlineVariant: "#c5c8ba",

    inverseSurface: "#2f312a",
    inverseOnSurface: "#f1f2e6",
    inversePrimary: "#b2d189",

    scrim: "#000000",
    shadow: "#000000",
  },
  dark: {
    primary: "#b2d189",
    onPrimary: "#203701",
    primaryContainer: "#354e15",
    onPrimaryContainer: "#cdeda3",

    secondary: "#c0cbac",
    onSecondary: "#2a331e",
    secondaryContainer: "#404a33",
    onSecondaryContainer: "#dce7c7",

    tertiary: "#a0d0cb",
    onTertiary: "#003734",
    tertiaryContainer: "#1f4e4b",
    onTertiaryContainer: "#bcece7",

    error: "#ffb4ab",
    onError: "#690005",
    errorContainer: "#93000a",
    onErrorContainer: "#ffdad6",

    surfaceDim: "#12140e",
    surface: "#12140e",
    surfaceBright: "#383a32",
    surfaceContainerLowest: "#0d0f09",
    surfaceContainerLow: "#1a1c16",
    surfaceContainer: "#1e201a",
    surfaceContainerHigh: "#282b24",
    surfaceContainerHighest: "#33362e",

    onSurface: "#e2e3d8",
    onSurfaceVariant: "#c5c8ba",

    outline: "#8f9285",
    outlineVariant: "#44483d",

    inverseSurface: "#e2e3d8",
    inverseOnSurface: "#2f312a",
    inversePrimary: "#4c662b",

    scrim: "#000000",
    shadow: "#000000",
  },
};

// Tipos para cores base
export type BaseColors = "primary" | "secondary" | "tertiary" | "error";

// Tipos para cores de container
export type ContainerColors = `${BaseColors}Container`;

// Tipos para cores "on" (texto sobre as cores base)
export type OnColors = `on${Capitalize<BaseColors>}`;

// Tipos para cores "onContainer" (texto sobre os containers)
export type OnContainerColors = `on${Capitalize<BaseColors>}Container`;

// Tipos para cores de superfície
export type SurfaceColors = Pick<
  typeof Colors.light,
  | "surfaceDim"
  | "surface"
  | "surfaceBright"
  | "surfaceContainerLowest"
  | "surfaceContainerLow"
  | "surfaceContainer"
  | "surfaceContainerHigh"
  | "surfaceContainerHighest"
>;

// Tipos para cores de texto
export type TextColors = Pick<
  typeof Colors.light,
  "onSurface" | "onSurfaceVariant"
>;

// Tipos para cores de borda
export type OutlineColors = Pick<
  typeof Colors.light,
  "outline" | "outlineVariant"
>;

// Tipos para cores inversas
export type InverseColors = Pick<
  typeof Colors.light,
  "inverseSurface" | "inverseOnSurface" | "inversePrimary"
>;

// Tipos para cores de sombra
export type ShadowColors = Pick<typeof Colors.light, "scrim" | "shadow">;

// Função utilitária para capitalizar a primeira letra de uma string
function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Função principal para obter cores correspondentes
export function getForwardsColor(
  backwardsColor: BaseColors | ContainerColors | "surface"
): OnColors | "onSurface" | OnContainerColors {
  if (backwardsColor === "surface") {
    return "onSurface"; // Caso especial para "surface"
  }

  if (backwardsColor.endsWith("Container")) {
    return `on${capitalizeFirstLetter(
      backwardsColor.replace("Container", "")
    )}Container` as OnContainerColors;
  }

  return `on${capitalizeFirstLetter(backwardsColor)}` as OnColors;
}

// Implementação de getContainerColor usando lógica similar à getForwardsColor
export function getContainerColor(baseColor: BaseColors): ContainerColors {
  return `${baseColor}Container` as ContainerColors;
}

// Implementação de getOnColor usando getForwardsColor
export function getOnColor(baseColor: BaseColors): OnColors {
  return getForwardsColor(baseColor) as OnColors;
}

// Implementação de getOnContainerColor usando getForwardsColor e getContainerColor
export function getOnContainerColor(baseColor: BaseColors): OnContainerColors {
  // Primeiro obtém o container, depois obtém o "on" correspondente
  const containerColor = getContainerColor(baseColor);
  return getForwardsColor(containerColor) as OnContainerColors;
}
