import { Tabs } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";
import VerticalButton from "@/components/widgets/VerticalButton";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons"; // Importe a biblioteca de ícones

export default function TabLayout() {
  const backgroundColor = useThemeColor({}, "surface");

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: (props) => {
          const title = props.accessibilityLabel || "";
          const selected = props.accessibilityState?.selected || false;

          // Defina os ícones com base no nome da aba
          let icon;
          switch (props.accessibilityLabel) {
            case "home":
              icon = "home";
              break;
            case "friends":
              icon = "people";
              break;
            default:
              icon = "question-mark";
              break;
          }

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
        name="friends"
        options={{
          title: "Friends",
          tabBarAccessibilityLabel: "friends",
        }}
      />
    </Tabs>
  );
}
