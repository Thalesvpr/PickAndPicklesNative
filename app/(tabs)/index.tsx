import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Switch } from "@/components/widgets/Switch";
import { useManualTheme } from "@/contexts/ManualThemeContext";
import { useThemeColor } from "@/hooks/useThemeColor";
import GroceriesListCard from "@/components/GroceriesListCard";
import Divider from "@/components/widgets/Divider";
import { ScrollView } from "react-native-gesture-handler";
import { GroceriesIconSet } from "@/components/GroceriesIconSet";
import { groceriesListsDataSet } from "@/constants/dataset";

interface GList {
  id: number;
  listName: string;
  icon: keyof typeof GroceriesIconSet;
  itemCount: number;
  supportingText: string;
}
// Dados dos cards
const groceriesLists = groceriesListsDataSet;

export default function HomeScreen() {
  const { manualTheme, setManualTheme } = useManualTheme();
  const [isSwitchOn, setIsSwitchOn] = useState(manualTheme !== "dark");

  const handleSwitchToggle = (value: boolean) => {
    const newTheme = value ? "dark" : "light";
    setIsSwitchOn(value);
    setManualTheme(newTheme);
    console.log("Tema manual:", newTheme);
  };

  const backgroundColor = useThemeColor({}, "surface");
  const textColor = useThemeColor({}, "onSurface");

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.content}>
        <Text style={[styles.text, { color: textColor }]}>
          O Tema atual é: {manualTheme === "light" ? "Claro" : "Escuro"}
        </Text>
        <Divider />
        <Switch
          value={isSwitchOn}
          onValueChange={handleSwitchToggle}
          themeColor={"tertiary"}
          size="large"
          iconOn={<MaterialIcons name="dark-mode" size={16} color="#FFF" />}
          iconOff={<MaterialIcons name="light-mode" size={16} color="#FFF" />}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {groceriesLists.map((list) => (
          <GroceriesListCard
            id={list.id}
            listName={list.listName}
            icon={list.icon}
            badgeValue={270}
            itemCount={list.items.length}
            supportingText={list.supportingText}
            onAddItem={() => console.log(list.listName)}
            key={list.id}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  content: {
    paddingHorizontal: 20,
    gap: 10,
  },
  scrollContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    flexGrow: 1,
    paddingVertical: 20,
    gap: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
