// screens/HomeScreen.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Biblioteca de ícones
import { Switch } from "@/components/widgets/Switch"; // Importe o componente Switch
import { useManualTheme } from "@/contexts/ManualThemeContext"; // Importe o hook useManualTheme
import { useThemeColor } from "@/hooks/useThemeColor"; // Importe o hook useThemeColor
import GroceriesListCard from "@/components/GroceriesListCard";
import Divider from "@/components/widgets/Divider";

export default function HomeScreen() {
  const { manualTheme, setManualTheme } = useManualTheme();
  const [isSwitchOn, setIsSwitchOn] = useState(manualTheme !== "dark");
  const handleSwitchToggle = (value: boolean) => {
    const newTheme = value ? "dark" : "light";
    setIsSwitchOn(value);
    setManualTheme(newTheme); // Alterna o tema manualmente
    console.log("Tema manual:", newTheme);
  };

  // Usa o useThemeColor para obter as cores do tema atual
  const backgroundColor = useThemeColor({}, "surface");
  const textColor = useThemeColor({}, "onSurface");

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>
        O Tema atual é: {manualTheme === "light" ? "Claro" : "Escuro"}
      </Text>
      <Divider />

      {/* Usando o Switch para alternar o tema */}
      <Switch
        value={isSwitchOn}
        onValueChange={handleSwitchToggle}
        themeColor={"tertiary"}
        size="large" // Tamanho grande
        iconOn={<MaterialIcons name="dark-mode" size={16} color="#FFF" />} // Ícone quando ligado
        iconOff={<MaterialIcons name="light-mode" size={16} color="#FFF" />} // Ícone quando desligado
      />
      <GroceriesListCard
        listName="Compras do Mês"
        icon="Abobora"
        itemCount={100}
        supportingText="Itens essenciais para o mês"
        onAddItem={() => console.log("Compras do Mês")}
      />
      <GroceriesListCard
        listName="Compras do Mês"
        icon="Desenfetante"
        itemCount={0}
        supportingText="Itens essenciais para o mês"
        onAddItem={() => console.log("Compras do Mês")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
