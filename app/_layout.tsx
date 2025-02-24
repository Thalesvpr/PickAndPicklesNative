// app/_layout.tsx
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { ManualThemeProvider } from "@/contexts/ManualThemeContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme(); // Tema do sistema
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ManualThemeProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          {/* Tela inicial (tabs) */}
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false }} // Oculta o cabeçalho
          />

          {/* Tela do Carrinho */}
          <Stack.Screen
            name="cart"
            options={{
              title: "Carrinho", // Título da tela
              headerStyle: {
                backgroundColor: colorScheme === "dark" ? "#000" : "#FFF", // Cor de fundo do cabeçalho
              },
              headerTintColor: colorScheme === "dark" ? "#FFF" : "#000", // Cor do texto do cabeçalho
            }}
          />

          {/* Tela de "Não Encontrado" */}
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      </ThemeProvider>
    </ManualThemeProvider>
  );
}