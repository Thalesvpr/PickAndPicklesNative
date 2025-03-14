import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { GroceriesIconSet } from "@/components/GroceriesIconSet";
import { Scaffold } from "@/components/ui/Scaffold";
import { Header } from "@/components/ui/Header";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@/components/widgets/Button";
import {
  SpaceGaps,
  PaddingMargin,
  FontSizes,
  BorderRadius,
  Sizes,
} from "@/constants/Theme";
import { router } from "expo-router";
import {
  getTagColor,
  GroceryItem,
  useGroceries,
} from "@/contexts/GroceriesContext";
import { ThemedText } from "@/components/widgets/ThemedText";
import { ProductItemCard } from "@/components/ItemCard";
import Tag from "@/components/widgets/Tag";
import { Texts } from "@/components/widgets/Texts";
import Divider from "@/components/widgets/Divider";
import AddItemModal from "@/components/Shopping/AddItemModal";
import ShoppingInfoModal from "@/components/Shopping/ShoppingInfoModal";

// Props do componente Card
type CardProps = {
  itemToBuy: GroceryItem;
  volumesToBuy: number;
  isEditing: boolean; // Estado de edição (seleção)
  onRemove: (itemId: number) => void;
  onMarkAsPurchased: (itemId: number) => void;
  onToggleEditing: (itemId: number) => void; // Alterna o estado de edição
};

// Componente Card
const Card = ({
  volumesToBuy,
  itemToBuy,
  isEditing,
  onRemove,
  onMarkAsPurchased,
  onToggleEditing,
}: CardProps) => {
  return (
    <ProductItemCard.Container
      key={itemToBuy.id}
      isEditing={isEditing} // Controla o estado visual de edição/seleção
      onToggleEditing={() => onToggleEditing(itemToBuy.id)} // Alterna a edição ao clicar
      actions={
        isEditing && ( // Exibe ações apenas se o itemToBuy estiver em modo de edição
          <ProductItemCard.Actions>
            <Button
              icon="delete-outline"
              onPress={() => onRemove(itemToBuy.id)}
              themeColor="error"
              outline
            />
            <Button
              icon="check"
              iconSource="materialCommunity"
              onPress={() => onMarkAsPurchased(itemToBuy.id)}
              themeColor="secondary"
              outline
            />
          </ProductItemCard.Actions>
        )
      }
    >
      <ProductItemCard.Content>
        <Texts.Subheadline>{itemToBuy.name}</Texts.Subheadline>
        <Texts.SupportingText>
          {itemToBuy.quantityPerUnit.quantity} {itemToBuy.quantityPerUnit.unit}
        </Texts.SupportingText>
      </ProductItemCard.Content>
      <ProductItemCard.Tags>
        <Tag
          text={itemToBuy.priorityTag.value}
          color={getTagColor(itemToBuy.priorityTag)}
        />
        <Tag
          text={itemToBuy.categoryTag.value}
          color={getTagColor(itemToBuy.categoryTag)}
        />

        <Tag
          text={volumesToBuy.toString()}
          color={volumesToBuy >= 0 ? "tertiary" : "orange"}
        />
      </ProductItemCard.Tags>
    </ProductItemCard.Container>
  );
};

// Componente principal ShoppingScreen
export default function ShoppingScreen() {
  const navigation = useNavigation();
  const headlineBackgroundColor = useThemeColor({}, "surfaceContainerHigh");
  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false); // Estado para controlar o modal de informações
  const [isAddItemModalVisible, setIsAddItemModalVisible] = useState(false); // Estado para controlar o modal de adição de itens
  const { groceriesLists } = useGroceries();

  const [openLists, setOpenLists] = useState<number[]>([]); // Armazena os IDs das listas abertas
  const [selectedItems, setSelectedItems] = useState<number[]>([]); // Armazena os IDs dos itens selecionados

  // Função para alternar a abertura/fechamento de uma lista
  const toggleList = (listId: number) => {
    setOpenLists(
      (prevOpenLists) =>
        prevOpenLists.includes(listId)
          ? prevOpenLists.filter((id) => id !== listId) // Fecha a lista se já estiver aberta
          : [...prevOpenLists, listId] // Abre a lista se estiver fechada
    );
  };

  // Função para alternar a seleção de um item pelo ID
  const toggleItemSelection = (itemId: number) => {
    setSelectedItems(
      (prevSelected) =>
        prevSelected.includes(itemId)
          ? prevSelected.filter((id) => id !== itemId) // Remove o item se já estiver selecionado
          : [...prevSelected, itemId] // Adiciona o item se não estiver selecionado
    );
  };

  // Função para confirmar todos os itens selecionados
  const handleConfirmAll = () => {
    // markItemsAsPurchased(selectedItems); // Marca os itens selecionados como comprados
    setSelectedItems([]); // Limpa a lista de itens selecionados após a confirmação
  };

  // Função para adicionar um novo item à lista
  const handleAddItem = () => {
    setIsAddItemModalVisible(false); // Fecha o modal de adição de itens
  };

  // Verifica se há itens selecionados em uma lista específica
  const hasSelectedItemsInList = (listId: number) => {
    const list = groceriesLists.find((list) => list.id === listId);
    if (!list) return false;
    return list.itemsToBuy.some((item) => selectedItems.includes(item.id));
  };

  return (
    <Scaffold
      header={
        <Header
          title="Shopping"
          navigation={navigation}
          showBackButton
          rightActions={[
            <Button
              key="info"
              icon="information-variant"
              iconSource="materialCommunity"
              onPress={() => setIsInfoModalVisible(true)} // Abre o modal de informações
              outline
            />,
            <Button
              key="add"
              icon="plus"
              iconSource="materialCommunity"
              onPress={() => setIsAddItemModalVisible(true)} // Abre o modal de adição de itens
              outline
            />,
          ]}
        />
      }
    >
      {/* Modal de Informações */}
      <ShoppingInfoModal
        visible={isInfoModalVisible}
        onClose={() => setIsInfoModalVisible(false)}
      />

      {/* Modal de Adição de Itens */}
      <AddItemModal
        onAddItem={() => handleAddItem()}
        visible={isAddItemModalVisible}
        onClose={() => setIsAddItemModalVisible(false)}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {groceriesLists.map((list) => {
          const ListIconComponent = GroceriesIconSet[list.icon];
          const isListOpen = openLists.includes(list.id); // Verifica se a lista está aberta
          const hasSelectedItems = hasSelectedItemsInList(list.id); // Verifica se há itens selecionados na lista

          return (
            <View key={list.id}>
              <View
                style={[
                  styles.listHeadLine,
                  { backgroundColor: headlineBackgroundColor },
                ]}
              >
                <Button
                  onPress={() => toggleList(list.id)} // Alterna a abertura/fechamento da lista
                  icon={
                    isListOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"
                  }
                  themeColor="primary"
                  raw
                  disabled={hasSelectedItems} // Desabilita o botão se houver itens selecionados
                />
                <ThemedText fontSize={FontSizes.md} fontWeight={600}>
                  {list.listName}
                </ThemedText>
                <View style={{ position: "absolute", right: 0, bottom: -50 }}>
                  <ListIconComponent />
                </View>
              </View>

              {/* Itens da lista (visíveis apenas se a lista estiver aberta) */}
              {isListOpen && (
                <View style={styles.listItensContainer}>
                  <Divider />
                  {list.itemsToBuy.map((item) => (
                    <Card
                      key={item.id}
                      itemToBuy={item}
                      volumesToBuy={item.volumesToBuy}
                      isEditing={selectedItems.includes(item.id)} // Passa o estado de edição/seleção
                      onRemove={(itemId) => console.log("Remover:", itemId)} // Implemente a lógica de remoção
                      onMarkAsPurchased={(itemId) =>
                        console.log("Marcar como comprado:", itemId)
                      } // Implemente a lógica de marcação
                      onToggleEditing={toggleItemSelection} // Alterna a seleção do item
                    />
                  ))}
                  <Button
                    icon="unfold-less-horizontal"
                    iconSource="materialCommunity"
                    title={`Minimizar lista`}
                    onPress={() => toggleList(list.id)}
                    themeColor="secondary"
                    raw
                    disabled={hasSelectedItems} // Desabilita o botão se houver itens selecionados
                  />
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>

      {/* Botão "Confirmar Todos" (exibido condicionalmente) */}
      {selectedItems.length > 1 && (
        <View style={styles.confirmAllButtonContainer}>
          <Button
            icon="check"
            iconSource="materialCommunity"
            title="Confirmar Todos"
            onPress={handleConfirmAll}
            themeColor="secondary"
          />
        </View>
      )}
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
  listHeadLine: {
    padding: PaddingMargin.sm,
    flexDirection: "row",
    alignItems: "center",
    gap: SpaceGaps.md,
    borderRadius: BorderRadius.full,
    overflow: "hidden",
  },
  scrollContainer: {
    gap: SpaceGaps.md,
    paddingHorizontal: PaddingMargin.md,
    paddingBottom: 80,
  },
  listItensContainer: {
    marginTop: PaddingMargin.lg,
    gap: SpaceGaps.md,
  },
  confirmAllButtonContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: "center",
  },
});
