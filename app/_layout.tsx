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
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Importe o GestureHandlerRootView

import { useColorScheme } from "@/hooks/useColorScheme";
import { ManualThemeProvider } from "@/contexts/ManualThemeContext";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";
import { Header } from "@/components/ui/Header";
import Button from "@/components/widgets/Button";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme(); // Tema do sistema
  const isDarkTheme = colorScheme === "dark";
  const [loaded] = useFonts({
    Inter: require("../assets/fonts/Inter-Regular.ttf"),
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ManualThemeProvider>
        <ThemeProvider value={isDarkTheme ? DarkTheme : DefaultTheme}>
          <Stack>
            {/* Tela inicial (tabs) */}
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

            {/* Tela do Carrinho */}
            <Stack.Screen name="cart" options={{ headerShown: false }} />
            {/* Tela de New Groceries List */}
            <Stack.Screen
              name="new-groceries-list"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="grocery-list"
              options={{ headerShown: false }}
            />

            {/* Tela de "Não Encontrado" */}
            <Stack.Screen name="+not-found" options={{ headerShown: false }} />
          </Stack>
          <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
        </ThemeProvider>
      </ManualThemeProvider>
    </GestureHandlerRootView>
  );
}
