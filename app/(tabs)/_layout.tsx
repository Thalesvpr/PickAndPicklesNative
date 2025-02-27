import { Tabs } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";
import VerticalButton from "@/components/widgets/VerticalButton";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function TabLayout() {
  const backgroundColor = useThemeColor({}, "surface");

  // Cria uma View com a cor do tema para ser usada como tabBarBackground
  const TabBarBackgroundWithTheme = () => (
    <View
      style={{
        backgroundColor: "green", // Usa a cor do tema
        justifyContent: "center",
      }}
    />
  );

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarButton: (props) => {
          const title = props.accessibilityLabel || "";
          const icon = props.accessibilityLabel || "question-mark";
          const selected = props.accessibilityState?.selected || false;

          return (
            <View style={[{ marginVertical: "auto" }]}>
              <VerticalButton
                title={title}
                icon={icon}
                selected={selected}
                onPress={props.onPress}
                themeColor="primary"
              />
            </View>
          );
        },
        // tabBarBackground: () => <TabBarBackgroundWithTheme />, // Passa a View com a cor do tema
        tabBarStyle: {
          height: 80,
          outline: "none",
          backgroundColor: backgroundColor,
          borderTopWidth: 0,
          ...Platform.select({
            ios: {
              position: "absolute",
            },
            default: {},
          }),
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarAccessibilityLabel: "home",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarAccessibilityLabel: "explore",
        }}
      />
    </Tabs>
  );
}
