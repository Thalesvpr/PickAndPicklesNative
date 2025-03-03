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
import { Scaffold } from "@/components/ui/Scaffold";
import { Header } from "@/components/ui/Header";
import { useNavigation } from "@react-navigation/native";
import Button from "@/components/widgets/Button";
import VerticalButton from "@/components/widgets/VerticalButton";
import Badge from "@/components/widgets/Badge";
import { SpaceGaps, PaddingMargin } from "@/constants/Theme";
import { router } from "expo-router";

interface GList {
  id: number;
  listName: string;
  icon: keyof typeof GroceriesIconSet;
  itemCount: number;
  supportingText: string;
}

const groceriesLists = groceriesListsDataSet;

export default function HomeScreen() {
  const { manualTheme, setManualTheme } = useManualTheme();
  const [isSwitchOn, setIsSwitchOn] = useState(manualTheme !== "dark");
  const navigation = useNavigation();

  const handleSwitchToggle = (value: boolean) => {
    const newTheme = value ? "dark" : "light";
    setIsSwitchOn(value);
    setManualTheme(newTheme);
    console.log("Tema manual:", newTheme);
  };

  const handleShoppingPress = () => {
    console.log("Compras pressionado");
  };

  const handleAddPress = () => {
    router.push("/new-groceries-list");
  };

  return (
    <Scaffold
      header={
        <Header
          title="Home"
          navigation={navigation}
          rightActions={[
            <Switch
              value={isSwitchOn}
              onValueChange={handleSwitchToggle}
              themeColor={"tertiary"}
              size="large"
              iconOn={<MaterialIcons name="dark-mode" size={16} color="#000" />}
              iconOff={
                <MaterialIcons name="light-mode" size={16} color="#FFF" />
              }
            />,
            <Button icon="person" />,
          ]}
        />
      }
    >
      <View style={styles.container}>
        <Button
          icon="shopping-basket"
          title="Compras"
          themeColor="tertiary"
          onPress={handleShoppingPress}
        />
        <Button icon="add" onPress={handleAddPress} />
      </View>
      {groceriesLists.map((list) => (
        <GroceriesListCard
          id={list.id}
          listName={list.listName}
          icon={list.icon}
          badgeValue={100}
          itemCount={list.items.length}
          supportingText={list.supportingText}
          onAddItem={() => console.log(list.listName)}
          key={list.id}
        />
      ))}
    </Scaffold>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: PaddingMargin.md,
    flexDirection: "row",
    width: "100%",
    gap: SpaceGaps.md,
    alignItems: "flex-start",
  },
});
