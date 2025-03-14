import React, { useState } from "react";
import { Alert, StyleSheet, ScrollView, View } from "react-native";
import { useNavigation, useLocalSearchParams } from "expo-router"; // Usando Expo Router
import { Scaffold } from "@/components/ui/Scaffold";
import { Header } from "@/components/ui/Header";
import { Button } from "@/components/widgets/Button";
import {
  BorderRadius,
  FontSizes,
  FontWeights,
  PaddingMargin,
  Sizes,
  SpaceGaps,
} from "@/constants/Theme";
import { RainbowBaseColors } from "@/constants/VariantColors";
import { ThemedText } from "@/components/widgets/ThemedText";
import { GroceriesIconSet } from "@/components/GroceriesIconSet";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Switch } from "@/components/widgets/Switch";
import GroceryListInfoModal from "@/components/GroceryList/GroceryListInfoModal";
import {
  getTagColor,
  GroceryItem,
  useGroceries,
} from "@/contexts/GroceriesContext"; // Importando o contexto
import { ProductItemCard } from "@/components/ItemCard";
import Tag from "@/components/widgets/Tag";
import { Texts } from "@/components/widgets/Texts";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Props do componente Card
type CardProps = {
  product: GroceryItem;
  isEditing: boolean; // Estado de edição (seleção)
  onRemove: (productId: number) => void;
  onEdit: (productId: number) => void;
  onToggleEditing: (productId: number) => void; // Alterna o estado de edição
  isInItemsToBuy: boolean; // Indica se o item está em itemsToBuy
};

// Componente Card
const Card = ({
  product,
  isEditing,
  onRemove,
  onEdit,
  onToggleEditing,
  isInItemsToBuy,
}: CardProps) => {
  const getVolumesTagColor = (
    volumes: number,
    isInItemsToBuy: boolean
  ): "secondary" | "primary" | "error" | "tertiary" => {
    if (volumes <= 0) {
      return isInItemsToBuy ? "tertiary" : "error"; // Se estiver em itemsToBuy, usa "tertiary"
    }
    if (volumes < 2) return "secondary";
    return "primary";
  };

  const getVolumesTagIcon = (
    volumes: number,
    isInItemsToBuy: boolean
  ): keyof typeof MaterialCommunityIcons.glyphMap => {
    if (volumes <= 0) {
      return isInItemsToBuy ? "basket-check-outline" : "close"; // Se estiver em itemsToBuy, usa "basket"
    }
    if (volumes < 2) return "chili-alert";
    return "check";
  };

  return (
    <ProductItemCard.Container
      key={product.id}
      isEditing={isEditing} // Controla o estado visual de edição/seleção
      onToggleEditing={() => onToggleEditing(product.id)} // Alterna a edição ao clicar
      actions={
        <ProductItemCard.Actions>
          {product.volumes > 0 && (
            <Button
              icon="remove"
              title={"1"}
              themeColor="error"
              outline
              onPress={() => {}}
            />
          )}
          {product.volumes < 2 && !isInItemsToBuy && (
            <Button
              icon="basket-plus-outline"
              iconSource="materialCommunity"
              themeColor="tertiary"
              outline
              onPress={() => {}}
            />
          )}
          <Button
            icon="delete-outline"
            onPress={() => onRemove(product.id)}
            themeColor="error"
            outline
          />
          <Button
            icon="pencil"
            iconSource="materialCommunity"
            onPress={() => onEdit(product.id)}
            themeColor="secondary"
            outline
          />
        </ProductItemCard.Actions>
      }
    >
      <ProductItemCard.Content>
        <Texts.Subheadline>{product.name}</Texts.Subheadline>
        <Texts.SupportingText>
          {product.quantityPerUnit.quantity} {product.quantityPerUnit.unit}
        </Texts.SupportingText>
      </ProductItemCard.Content>
      <ProductItemCard.Tags>
        <Tag
          text={product.categoryTag.value}
          color={getTagColor(product.categoryTag)}
        />
        <Tag
          text={product.volumes}
          color={getVolumesTagColor(product.volumes, isInItemsToBuy)}
          icon={getVolumesTagIcon(product.volumes, isInItemsToBuy)}
          iconSource="materialCommunity"
        />
      </ProductItemCard.Tags>
    </ProductItemCard.Container>
  );
};

export default function ProductListScreen() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams(); // Obtendo o ID da lista da URL
  const { groceriesLists } = useGroceries(); // Usando o contexto

  // Encontrando a lista correspondente ao ID da URL
  const currentList = groceriesLists.find((list) => list.id === Number(id));

  const [autoAdd, setAutoAdd] = useState<boolean>(false);
  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false); // Estado para controlar o modal
  const [editingProductId, setEditingProductId] = useState<number | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]); // Armazena os IDs dos produtos selecionados

  const listHeadBackgroundColor = useThemeColor({}, "surfaceContainerLowest");
  const switchBackgroundColor = useThemeColor({}, "surfaceContainer");

  const ListIconComponent =
    GroceriesIconSet[currentList?.icon as keyof typeof GroceriesIconSet];

  const totalCount = currentList?.items.reduce(
    (sum, product) => sum + product.volumes,
    0
  );
  const totalZerosCount = currentList?.items.filter(
    (product) => product.volumes === 0
  ).length;

  const handleDelete = (id: number) => {
    Alert.alert("Remover", `Remover produto ${id}`);
  };

  const handleEdit = (id: number) => {
    Alert.alert("Editar", `Editar produto ${id}`);
  };

  const toggleEditing = (id: number) => {
    setEditingProductId(editingProductId === id ? null : id);
  };

  const toggleProductSelection = (productId: number) => {
    setSelectedProducts(
      (prevSelected) =>
        prevSelected.includes(productId)
          ? prevSelected.filter((id) => id !== productId) // Remove o produto se já estiver selecionado
          : [...prevSelected, productId] // Adiciona o produto se não estiver selecionado
    );
  };

  const handleConfirmAll = () => {
    // Lógica para confirmar todos os produtos selecionados
    setSelectedProducts([]); // Limpa a lista de produtos selecionados após a confirmação
  };

  if (!currentList) {
    return (
      <View>
        <ThemedText>Lista não encontrada</ThemedText>
      </View>
    );
  }

  return (
    <Scaffold
      header={
        <Header
          title={currentList.listName}
          showBackButton
          navigation={navigation}
          rightActions={[
            <Button
              key="info"
              icon="information-variant"
              iconSource="materialCommunity"
              onPress={() => setIsInfoModalVisible(true)} // Abre o modal
              outline
            />,
          ]}
        />
      }
    >
      <View
        style={[styles.listHead, { backgroundColor: listHeadBackgroundColor }]}
      >
        <View style={styles.listHeadTexts}>
          <View style={styles.listHeadLine}>
            <ThemedText
              fontSize={FontSizes.sm}
              backwardsColor="primaryContainer"
            >
              {currentList.items.length}
            </ThemedText>
            <ThemedText fontSize={FontSizes.sm}>{`produtos`}</ThemedText>
          </View>
          <View style={styles.listHeadLine}>
            <ThemedText
              fontSize={FontSizes.sm}
              backwardsColor="tertiaryContainer"
            >
              {totalCount}
            </ThemedText>
            <ThemedText fontSize={FontSizes.sm}>{`Itens no total`}</ThemedText>
          </View>
          <View style={styles.listHeadLine}>
            <ThemedText
              fontSize={FontSizes.sm}
              backwardsColor="tertiaryContainer"
            >
              {totalZerosCount}
            </ThemedText>
            <ThemedText fontSize={FontSizes.sm}>{`Itens zerados`}</ThemedText>
          </View>
          <Button title="Cadastrar Item" icon="add" iconPosition="right" />
        </View>
        <View style={{ position: "absolute", right: 0, bottom: 0 }}>
          <ListIconComponent />
        </View>
      </View>
      <View
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: PaddingMargin.md,
            padding: PaddingMargin.md,
            backgroundColor: switchBackgroundColor,
            borderRadius: BorderRadius.md,
            marginBottom: PaddingMargin.md,
          },
        ]}
      >
        <View style={{ maxWidth: 150 }}>
          <ThemedText
            fontSize={FontSizes.sm}
            backwardsColor="tertiaryContainer"
          >{`Repor automaticamente`}</ThemedText>
          <ThemedText
            fontSize={FontSizes.xs}
            themeColor="outline"
          >{`Produtos sem estoque vão para Compras automaticamente`}</ThemedText>
        </View>
        <Switch
          themeColor="tertiary"
          value={autoAdd}
          onValueChange={() => {
            setAutoAdd(!autoAdd);
          }}
        />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        style={styles.scrollView}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={true}
      >
        {currentList.items.map((product) => {
          const isInItemsToBuy = currentList.itemsToBuy.some(
            (item) => item.id === product.id
          );
          return (
            <Card
              key={product.id}
              product={product}
              isEditing={selectedProducts.includes(product.id)} // Passa o estado de edição/seleção
              onRemove={handleDelete} // Implemente a lógica de remoção
              onEdit={handleEdit} // Implemente a lógica de edição
              onToggleEditing={toggleProductSelection} // Alterna a seleção do produto
              isInItemsToBuy={isInItemsToBuy} // Passa se o item está em itemsToBuy
            />
          );
        })}
      </ScrollView>

      {/* Modal de Informações */}
      <GroceryListInfoModal
        visible={isInfoModalVisible}
        onClose={() => setIsInfoModalVisible(false)} // Fecha o modal
      />
    </Scaffold>
  );
}

const styles = StyleSheet.create({
  listHead: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 150,
    overflow: "hidden",
    paddingStart: PaddingMargin.md,
    paddingVertical: PaddingMargin.md,
    borderRadius: BorderRadius.md,
    margin: PaddingMargin.md,
  },
  listHeadLine: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: SpaceGaps.md,
  },
  listHeadTexts: {
    flexDirection: "column",
    height: "100%",
    gap: SpaceGaps.md,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: PaddingMargin.md,
    paddingBottom: 50,
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
