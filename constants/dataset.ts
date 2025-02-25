import { GroceriesIconSet } from "@/components/GroceriesIconSet";

interface GroceryItem {
  name: string; // Nome do item
  quantity: number; // Quantidade de unidades (ex: 2 caixas, 3 pacotes)
  sizePerUnit: {
    // Tamanho de cada unidade (ex: 200 ml, 500 g)
    amount: number;
    unit: string;
  };
  description?: string; // Descrição opcional
}

interface GroceryList {
  id: number;
  listName: string;
  icon: keyof typeof GroceriesIconSet;
  supportingText: string;
  items: GroceryItem[]; // Itens diretamente aninhados
}

export const groceriesListsDataSet: GroceryList[] = [
  {
    id: 1,
    listName: "Monthly Shopping",
    icon: "Abobora",
    supportingText: "Essential items for the month",
    items: [
      {
        name: "Apple",
        quantity: 10, // 10 units
        sizePerUnit: { amount: 1, unit: "unit" }, // Each unit is 1 apple
        description: "Fresh red apples",
      },
      {
        name: "Rice",
        quantity: 5, // 5 packages
        sizePerUnit: { amount: 1, unit: "kg" }, // Each package has 1 kg
        description: "Organic brown rice",
      },
      {
        name: "Milk",
        quantity: 2, // 2 boxes
        sizePerUnit: { amount: 200, unit: "ml" }, // Each box has 200 ml
        description: "Skimmed milk",
      },
    ],
  },
  {
    id: 2,
    listName: "Weekly Shopping",
    icon: "Limao",
    supportingText: "Essential items for the week",
    items: [
      {
        name: "Bread",
        quantity: 1, // 1 unit
        sizePerUnit: { amount: 500, unit: "g" }, // Each unit has 500 g
        description: "Whole grain bread",
      },
      {
        name: "Eggs",
        quantity: 1, // 1 dozen
        sizePerUnit: { amount: 12, unit: "units" }, // Each dozen has 12 eggs
        description: "Free-range eggs",
      },
    ],
  },
  {
    id: 3,
    listName: "Special Shopping",
    icon: "Nabo",
    supportingText: "Special items for occasions",
    items: [
      {
        name: "Coffee",
        quantity: 1, // 1 package
        sizePerUnit: { amount: 500, unit: "g" }, // Each package has 500 g
        description: "Ground coffee",
      },
      {
        name: "Sugar",
        quantity: 2, // 2 packages
        sizePerUnit: { amount: 1, unit: "kg" }, // Each package has 1 kg
        description: "Refined sugar",
      },
    ],
  },
];
