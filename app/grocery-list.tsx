import React, { useState } from "react";
import { Alert, StyleSheet, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Scaffold } from "@/components/ui/Scaffold";
import { Header } from "@/components/ui/Header";
import Button from "@/components/widgets/Button";
import {
  BorderRadius,
  FontSizes,
  FontWeights,
  PaddingMargin,
  Sizes,
  SpaceGaps,
} from "@/constants/Theme";
import ProductItemCard from "@/components/ProductItemCard";
import { RainbowBaseColors } from "@/constants/VariantCalors";
import { ThemedText } from "@/components/widgets/ThemedText";
import { GroceriesIconSet } from "@/components/GroceriesIconSet";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Switch } from "@/components/widgets/Switch";
import GroceryListInfoModal from "@/components/GroceryList/GroceryListInfoModal";

interface Product {
  id: number;
  name: string;
  quantity: string;
  count: number;
  tagText: string;
  tagColor: RainbowBaseColors;
}

export default function ProductListScreen() {
  const navigation = useNavigation();
  const [autoAdd, setAutoAdd] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Leite em pó",
      quantity: "500g",
      count: 100,
      tagText: "Avulso",
      tagColor: "indigo",
    },
    {
      id: 2,
      name: "Arroz",
      quantity: "1kg",
      count: 50,
      tagText: "Importante",
      tagColor: "red",
    },
    {
      id: 3,
      name: "Feijão",
      quantity: "1kg",
      count: 80,
      tagText: "Avulso",
      tagColor: "indigo",
    },
    {
      id: 4,
      name: "Café",
      quantity: "250g",
      count: 0,
      tagText: "Comum",
      tagColor: "blue",
    },
    {
      id: 5,
      name: "Açúcar",
      quantity: "1kg",
      count: 40,
      tagText: "Opcional",
      tagColor: "yellow",
    },
    {
      id: 6,
      name: "Macarrão",
      quantity: "500g",
      count: 60,
      tagText: "Essencial",
      tagColor: "green",
    },
    {
      id: 7,
      name: "Farinha",
      quantity: "1kg",
      count: 45,
      tagText: "Urgente",
      tagColor: "orange",
    },
  ]);

  const totalCount = products.reduce((sum, product) => sum + product.count, 0);

  const listHeadBackgroundColor = useThemeColor({}, "surfaceContainerLowest");
  const switchBackgroundColor = useThemeColor({}, "surfaceContainer");

  const [editingProductId, setEditingProductId] = useState<number | null>(null);
  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false); // Estado para controlar o modal

  const listIcon: keyof typeof GroceriesIconSet = "Abobora";
  const ListIconComponent =
    GroceriesIconSet[listIcon as keyof typeof GroceriesIconSet];

  const handleDelete = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
    if (editingProductId === id) {
      setEditingProductId(null);
    }
  };

  const handleEdit = (id: number) => {
    Alert.alert("Editar", `Editar produto ${id}`);
  };

  const toggleEditing = (id: number) => {
    setEditingProductId(editingProductId === id ? null : id);
  };

  return (
    <Scaffold
      header={
        <Header
          title="Nome da Lista"
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
              {products.length}
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
          <Button title="Novo Item" icon="add" />
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
        {products.map((product) => (
          <ProductItemCard
            tagText={product.tagText}
            tagRainbowColor={product.tagColor}
            key={product.id}
            isEditing={editingProductId === product.id}
            onToggleEditing={() => toggleEditing(product.id)}
            onEdit={() => handleEdit(product.id)}
            onDelete={() => handleDelete(product.id)}
            id={product.id}
            name={product.name}
            quantity={product.quantity}
            value={product.count}
            showAdd={!autoAdd}
          />
        ))}
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
  },
});
