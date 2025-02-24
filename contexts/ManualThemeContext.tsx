import React, { createContext, useContext, useState } from "react";
import { ColorSchemeName } from "react-native";

type ManualThemeContextType = {
  manualTheme: ColorSchemeName;
  setManualTheme: (theme: ColorSchemeName) => void;
};

const ManualThemeContext = createContext<ManualThemeContextType | undefined>(
  undefined
);

export const ManualThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [manualTheme, setManualTheme] = useState<ColorSchemeName>(null); // Inicialmente, não há tema manual

  return (
    <ManualThemeContext.Provider value={{ manualTheme, setManualTheme }}>
      {children}
    </ManualThemeContext.Provider>
  );
};

export const useManualTheme = () => {
  const context = useContext(ManualThemeContext);
  if (!context) {
    throw new Error("useManualTheme must be used within a ManualThemeProvider");
  }
  return context;
};
