import { GroceriesIconSet } from "@/components/GroceriesIconSet";
import React, { createContext, useState, useContext } from "react";
import { groceryDataSet } from "./groceryDataSet";
import { RainbowBaseColors } from "@/constants/VariantColors";

// Definição das Tags
interface CategoryTag {
  type: "category";
  value: "fruta" | "legume" | "verdura" | "limpeza" | "higiene" | "outros";
}

interface PriorityTag {
  type: "priority";
  value:
    | "essencial"
    | "não essencial"
    | "alta"
    | "média"
    | "baixa"
    | "opcional";
}

type Tag = CategoryTag | PriorityTag;

// Mapeamento de Tags para Cores (baseado no value)
type TagColorMap = Record<Tag["value"], RainbowBaseColors>;

// Exemplo de Mapeamento
const tagColorMap: TagColorMap = {
  fruta: "red",
  legume: "orange",
  verdura: "yellow",
  limpeza: "green",
  higiene: "blue",
  outros: "indigo",
  essencial: "red",
  "não essencial": "orange",
  alta: "yellow",
  média: "green",
  baixa: "blue",
  opcional: "indigo",
};

// Função para obter a cor de uma tag
export function getTagColor(tag: Tag): RainbowBaseColors {
  return tagColorMap[tag.value];
}

// Definição do Item
export interface GroceryItem {
  id: number; // ID único para cada item
  name: string;
  volumes: number; // Quantidade atual em estoque
  quantityPerUnit: { quantity: number; unit: string }; // Quantidade por unidade (ex: 1 kg)
  description?: string; // Descrição opcional
  priorityTag: PriorityTag; // Tag de prioridade
  categoryTag: CategoryTag; // Tag de categoria
}

// Definição da Lista
export interface GroceryList {
  id: number;
  listName: string;
  icon: keyof typeof GroceriesIconSet; // Ícone da lista
  supportingText: string; // Texto de apoio
  items: GroceryItem[]; // Itens da lista
  itemsToBuy: (GroceryItem & { volumesToBuy: number })[]; // Itens para comprar com volumesToBuy
}

// Tipo do contexto
interface GroceriesContextType {
  groceriesLists: GroceryList[];
  addGroceryList: (newList: GroceryList) => void;
  updateGroceryList: (id: number, updatedList: GroceryList) => void;
  deleteGroceryList: (id: number) => void;
}

// Criando o contexto
const GroceriesContext = createContext<GroceriesContextType | undefined>(
  undefined
);

// Hook personalizado para usar o contexto
export const useGroceries = () => {
  const context = useContext(GroceriesContext);
  if (!context) {
    throw new Error("useGroceries must be used within a GroceriesProvider");
  }
  return context;
};

const initialData: GroceryList[] = groceryDataSet;

// Componente Provedor
export const GroceriesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [groceriesLists, setGroceriesLists] =
    useState<GroceryList[]>(initialData);

  // Função para adicionar uma nova lista
  const addGroceryList = (newList: GroceryList) => {
    setGroceriesLists((prev) => [...prev, newList]);
  };

  // Função para atualizar uma lista existente
  const updateGroceryList = (id: number, updatedList: GroceryList) => {
    setGroceriesLists((prev) =>
      prev.map((list) => (list.id === id ? updatedList : list))
    );
  };

  // Função para deletar uma lista
  const deleteGroceryList = (id: number) => {
    setGroceriesLists((prev) => prev.filter((list) => list.id !== id));
  };

  return (
    <GroceriesContext.Provider
      value={{
        groceriesLists,
        addGroceryList,
        updateGroceryList,
        deleteGroceryList,
      }}
    >
      {children}
    </GroceriesContext.Provider>
  );
};
