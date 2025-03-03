import React, { useState } from "react";
import { View, StyleSheet } from "react-native"; // Importe View e StyleSheet
import GroceriesListCard from "@/components/GroceriesListCard";
import { Header } from "@/components/ui/Header";
import { Scaffold } from "@/components/ui/Scaffold";
import { useNavigation } from "expo-router";
import TextField from "@/components/widgets/TextField";
import { ScrollView } from "react-native-gesture-handler";
import Button from "@/components/widgets/Button";
import IconSelect from "@/components/IconSelect";
import { GroceriesIconSet } from "@/components/GroceriesIconSet";
import Divider from "@/components/widgets/Divider";
import { SpaceGaps } from "@/constants/Theme";

const NewGroceriesListScreen: React.FC = () => {
  const navigation = useNavigation();
  const [listName, setListName] = useState<string>("");
  const [supportingText, setSupportingText] = useState<string>("");
  const [icon, setIcon] = useState<keyof typeof GroceriesIconSet>("Abobora");
  const handleAddItem = () => {
    // Implemente a lógica para adicionar um item
    console.log("Item added");
  };

  return (
    <Scaffold
      header={
        <Header
          navigation={navigation}
          showBackButton
          title="Novo Grupo"
          rightActions={[<Button icon={"info"} themeColor="tertiary" />]}
        />
      }
    >
      {/* Exibe o GroceriesListCard com os valores preenchidos */}
      <GroceriesListCard
        listName={listName ? listName : `"Compras do Mês"`} // Texto padrão
        itemCount={99} // Valor padrão
        supportingText={
          supportingText
            ? supportingText
            : `"grupo de compras para o mês atual"`
        } // Texto padrão
        onAddItem={handleAddItem}
        icon={icon} // Ícone padrão
        id={1} // Valor fixo
        badgeValue={0} // Valor padrão
        disabled
      />
      <ScrollView>
        {/* Envolva o conteúdo em uma View e aplique o estilo */}
        <View style={styles.container}>
          {/* Campo para o nome da grupo */}
          <TextField
            label="Nome da grupo*"
            placeholder="Digite o nome da grupo"
            helperText="Ex: Compras do mês"
            value={listName}
            onChangeText={setListName}
            maxLength={30}
          />

          {/* Campo para o texto de suporte */}
          <TextField
            label="Descrição"
            placeholder="Digite a Descrição"
            helperText="Informações adicionais"
            value={supportingText}
            onChangeText={setSupportingText}
            maxLength={100}
          />

          <IconSelect onSelect={(category) => setIcon(category)} />

          <Divider />

          <Button themeColor="primary" title="Criar grupo" icon="add" />
        </View>
      </ScrollView>
    </Scaffold>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: SpaceGaps.lg, // Espaçamento entre os elementos
    flexDirection: "column", // Alinhamento vertical
    alignItems: "stretch", // Centraliza os itens horizontalmente
    justifyContent: "center", // Centraliza os itens verticalmente
  },
});

export default NewGroceriesListScreen;
