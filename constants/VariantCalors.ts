export const RainbowColors = {
  light: {
    red: {
      color: "#904b40",
      onColor: "#ffffff",
      colorContainer: "#ffdad4",
      onColorContainer: "#73342a",
    },
    orange: {
      color: "#8c4e29",
      onColor: "#ffffff",
      colorContainer: "#ffdbca",
      onColorContainer: "#6f3714",
    },
    yellow: {
      color: "#6d5e0f",
      onColor: "#ffffff",
      colorContainer: "#f8e287",
      onColorContainer: "#6d5e0f",
    },
    green: {
      color: "#43664e",
      onColor: "#ffffff",
      colorContainer: "#c0efb0",
      onColorContainer: "#2c4e38",
    },
    blue: {
      color: "#c5ecce",
      onColor: "#ffffff",
      colorContainer: "#d6e3ff",
      onColorContainer: "#284777",
    },
    indigo: {
      color: "#6f528a",
      onColor: "#ffffff",
      colorContainer: "#f0dbff",
      onColorContainer: "#563a70",
    },
  },
  dark: {
    red: {
      color: "#ffb4a8",
      onColor: "#561e16",
      colorContainer: "#73342a",
      onColorContainer: "#ffdad4",
    },
    orange: {
      color: "#ffb68e",
      onColor: "#532201",
      colorContainer: "#6f3714",
      onColorContainer: "#ffdbca",
    },
    yellow: {
      color: "#dbc66e",
      onColor: "#3a3000",
      colorContainer: "#534600",
      onColorContainer: "#f8e287",
    },
    green: {
      color: "#a9d0b3",
      onColor: "#143723",
      colorContainer: "#2c4e38",
      onColorContainer: "#c5ecce",
    },
    blue: {
      color: "#aac7ff",
      onColor: "#0a305f",
      colorContainer: "#284777",
      onColorContainer: "#d6e3ff",
    },
    indigo: {
      color: "#dbb9f9",
      onColor: "#3f2458",
      colorContainer: "#563a70",
      onColorContainer: "#f0dbff",
    },
  },
};

// Tipos para cores base
export type RainbowBaseColors =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo";

// Tipos para cores de container
export type RainbowContainerColors = `${RainbowBaseColors}Container`;

// Tipos para cores "on" (texto sobre as cores base)
export type RainbowOnColors = `on${Capitalize<RainbowBaseColors>}`;

// Tipos para cores "onContainer" (texto sobre os containers)
export type RainbowOnContainerColors =
  `on${Capitalize<RainbowBaseColors>}Container`;

// Função utilitária para capitalizar a primeira letra de uma string
function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Função principal para obter cores correspondentes
export function getRainbowForwardsColor(
  backwardsColor: RainbowBaseColors | RainbowContainerColors
): RainbowOnColors | RainbowOnContainerColors {
  if (backwardsColor.endsWith("Container")) {
    return `on${capitalizeFirstLetter(
      backwardsColor.replace("Container", "")
    )}Container` as RainbowOnContainerColors;
  }

  return `on${capitalizeFirstLetter(backwardsColor)}` as RainbowOnColors;
}

// Implementação de getContainerColor
export function getRainbowContainerColor(
  baseColor: RainbowBaseColors
): RainbowContainerColors {
  return `${baseColor}Container` as RainbowContainerColors;
}

// Implementação de getOnColor
export function getRainbowOnColor(
  baseColor: RainbowBaseColors
): RainbowOnColors {
  return getRainbowForwardsColor(baseColor) as RainbowOnColors;
}

// Implementação de getOnContainerColor
export function getRainbowOnContainerColor(
  baseColor: RainbowBaseColors
): RainbowOnContainerColors {
  const containerColor = getRainbowContainerColor(baseColor);
  return getRainbowForwardsColor(containerColor) as RainbowOnContainerColors;
}
