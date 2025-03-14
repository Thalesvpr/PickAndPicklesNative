import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Switch } from "@/components/widgets/Switch";
import { useManualTheme } from "@/contexts/ManualThemeContext";
import GroceriesListCard from "@/components/GroceriesListCard";
import Divider from "@/components/widgets/Divider";
import { Scaffold } from "@/components/ui/Scaffold";
import { Header } from "@/components/ui/Header";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@/components/widgets/Button";
import VerticalButton from "@/components/widgets/VerticalButton";
import Badge from "@/components/widgets/Badge";
import { SpaceGaps, PaddingMargin } from "@/constants/Theme";
import { router } from "expo-router";
import { GroceryList, useGroceries } from "@/contexts/GroceriesContext"; // Importe o hook useGroceries
import ColorBar from "@/components/widgets/ColorBar";
import InputBar from "@/components/widgets/InputBar";

export default function HomeScreen() {
  const { manualTheme, setManualTheme } = useManualTheme();
  const [isSwitchOn, setIsSwitchOn] = useState(manualTheme !== "dark");
  const navigation = useNavigation();
  const { groceriesLists } = useGroceries(); // Use o hook useGroceries

  const handleSwitchToggle = (value: boolean) => {
    const newTheme = value ? "dark" : "light";
    setIsSwitchOn(value);
    setManualTheme(newTheme);
    console.log("Tema manual:", newTheme);
  };

  const handleShoppingPress = () => {
    router.push("/shopping");
  };

  const handleAddPress = () => {
    router.push("/new-groceries-list");
  };

  // Função para calcular o badgeValue
  const calculateBadgeValue = (list: GroceryList): number => {
    const itemsWithZeroVolume = list.items.filter((item) => item.volumes === 0);
    const itemsNotInItemsToBuy = itemsWithZeroVolume.filter(
      (item) => !list.itemsToBuy.some((i) => i.id === item.id)
    );
    return itemsNotInItemsToBuy.length;
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
          icon="basket-outline"
          iconSource="materialCommunity"
          title="Compras"
          themeColor="tertiary"
          onPress={handleShoppingPress}
        />
        <Button icon="add" onPress={handleAddPress} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* <ColorBar /> */}
        <InputBar
          onSearch={function (text: string): void {
            throw new Error("Function not implemented.");
          }}
        />
        {groceriesLists.map((list) => (
          <GroceriesListCard
            id={list.id}
            listName={list.listName}
            icon={list.icon}
            badgeValue={calculateBadgeValue(list)} // Passa o badgeValue calculado
            itemCount={list.items.length}
            supportingText={list.supportingText}
            onAddItem={() => console.log(list.listName)}
            key={list.id}
          />
        ))}
      </ScrollView>
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
  scrollContainer: {
    gap: SpaceGaps.md,
    paddingHorizontal: PaddingMargin.md,
  },
});
