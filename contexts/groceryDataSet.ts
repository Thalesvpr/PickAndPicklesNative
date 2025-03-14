import { GroceryList } from "./GroceriesContext";

// Dados de Exemplo
export const groceryDataSet: GroceryList[] = [
  {
    id: 1,
    listName: "Compras do Mês",
    icon: "Banana", // Substitua pelo ícone correto do GroceriesIconSet
    supportingText: "Itens essenciais para o mês",
    items: [
      {
        id: 1,
        name: "Arroz",
        volumes: 2,
        quantityPerUnit: { quantity: 1, unit: "kg" },
        description: "Arroz branco",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "outros" },
      },
      {
        id: 2,
        name: "Feijão",
        volumes: 1,
        quantityPerUnit: { quantity: 1, unit: "kg" },
        description: "Feijão carioca",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "outros" },
      },
      {
        id: 3,
        name: "Óleo de Soja",
        volumes: 1,
        quantityPerUnit: { quantity: 900, unit: "ml" },
        description: "Óleo para cozinha",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "outros" },
      },
      {
        id: 4,
        name: "Açúcar",
        volumes: 1,
        quantityPerUnit: { quantity: 1, unit: "kg" },
        description: "Açúcar refinado",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "outros" },
      },
      {
        id: 5,
        name: "Café",
        volumes: 1,
        quantityPerUnit: { quantity: 500, unit: "g" },
        description: "Café moído",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "outros" },
      },
      {
        id: 6,
        name: "Leite",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "L" },
        description: "Leite integral",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "outros" },
      },
      {
        id: 7,
        name: "Macarrão",
        volumes: 3,
        quantityPerUnit: { quantity: 500, unit: "g" },
        description: "Macarrão espaguete",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "outros" },
      },
      {
        id: 8,
        name: "Molho de Tomate",
        volumes: 2,
        quantityPerUnit: { quantity: 340, unit: "g" },
        description: "Molho pronto",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "outros" },
      },
      {
        id: 9,
        name: "Sabonete",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "unidade" },
        description: "Sabonete líquido",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "higiene" },
      },
      {
        id: 10,
        name: "Papel Higiênico",
        volumes: 0,
        quantityPerUnit: { quantity: 12, unit: "unidades" },
        description: "Pacote com 12 rolos",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "higiene" },
      },
    ],
    itemsToBuy: [
      {
        id: 6,
        name: "Leite",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "L" },
        description: "Leite integral",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "outros" },
        volumesToBuy: 2, // Quantidade a ser comprada
      },
      {
        id: 9,
        name: "Sabonete",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "unidade" },
        description: "Sabonete líquido",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "higiene" },
        volumesToBuy: 3, // Quantidade a ser comprada
      },
      {
        id: 10,
        name: "Papel Higiênico",
        volumes: 0,
        quantityPerUnit: { quantity: 12, unit: "unidades" },
        description: "Pacote com 12 rolos",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "higiene" },
        volumesToBuy: 1, // Quantidade a ser comprada
      },
    ],
  },
  {
    id: 2,
    listName: "Hortifruti",
    icon: "Maca", // Substitua pelo ícone correto do GroceriesIconSet
    supportingText: "Frutas, verduras e legumes",
    items: [
      {
        id: 11,
        name: "Maçã",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "kg" },
        description: "Maçã vermelha",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "fruta" },
      },
      {
        id: 12,
        name: "Banana",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "dúzia" },
        description: "Banana prata",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "fruta" },
      },
      {
        id: 13,
        name: "Cenoura",
        volumes: 1,
        quantityPerUnit: { quantity: 1, unit: "kg" },
        description: "Cenoura fresca",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "legume" },
      },
      {
        id: 14,
        name: "Alface",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "unidade" },
        description: "Alface crespa",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "verdura" },
      },
      {
        id: 15,
        name: "Tomate",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "kg" },
        description: "Tomate vermelho",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "legume" },
      },
      {
        id: 16,
        name: "Batata",
        volumes: 2,
        quantityPerUnit: { quantity: 1, unit: "kg" },
        description: "Batata inglesa",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "legume" },
      },
      {
        id: 17,
        name: "Cebola",
        volumes: 1,
        quantityPerUnit: { quantity: 1, unit: "kg" },
        description: "Cebola branca",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "legume" },
      },
      {
        id: 18,
        name: "Limão",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "kg" },
        description: "Limão tahiti",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "fruta" },
      },
      {
        id: 19,
        name: "Abóbora",
        volumes: 1,
        quantityPerUnit: { quantity: 1, unit: "unidade" },
        description: "Abóbora moranga",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "legume" },
      },
      {
        id: 20,
        name: "Uva",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "kg" },
        description: "Uva verde",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "fruta" },
      },
    ],
    itemsToBuy: [
      {
        id: 14,
        name: "Alface",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "unidade" },
        description: "Alface crespa",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "verdura" },
        volumesToBuy: 4, // Quantidade a ser comprada
      },
      {
        id: 15,
        name: "Tomate",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "kg" },
        description: "Tomate vermelho",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "legume" },
        volumesToBuy: 2, // Quantidade a ser comprada
      },
      {
        id: 18,
        name: "Limão",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "kg" },
        description: "Limão tahiti",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "fruta" },
        volumesToBuy: 5, // Quantidade a ser comprada
      },
      {
        id: 20,
        name: "Uva",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "kg" },
        description: "Uva verde",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "fruta" },
        volumesToBuy: 1, // Quantidade a ser comprada
      },
    ],
  },
  {
    id: 3,
    listName: "Limpeza",
    icon: "Detergente", // Substitua pelo ícone correto do GroceriesIconSet
    supportingText: "Produtos de limpeza para a casa",
    items: [
      {
        id: 21,
        name: "Detergente",
        volumes: 0,
        quantityPerUnit: { quantity: 500, unit: "ml" },
        description: "Detergente líquido",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "limpeza" },
      },
      {
        id: 22,
        name: "Sabão em Pó",
        volumes: 1,
        quantityPerUnit: { quantity: 1, unit: "kg" },
        description: "Sabão em pó para roupas",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "limpeza" },
      },
      {
        id: 23,
        name: "Amaciante",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "L" },
        description: "Amaciante de roupas",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "limpeza" },
      },
      {
        id: 24,
        name: "Água Sanitária",
        volumes: 1,
        quantityPerUnit: { quantity: 1, unit: "L" },
        description: "Água sanitária",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "limpeza" },
      },
      {
        id: 25,
        name: "Desinfetante",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "L" },
        description: "Desinfetante para pisos",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "limpeza" },
      },
      {
        id: 26,
        name: "Esponja",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "unidade" },
        description: "Esponja para louça",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "limpeza" },
      },
      {
        id: 27,
        name: "Papel Toalha",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "unidade" },
        description: "Rolo de papel toalha",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "limpeza" },
      },
      {
        id: 28,
        name: "Limpador Multiuso",
        volumes: 1,
        quantityPerUnit: { quantity: 500, unit: "ml" },
        description: "Limpador para superfícies",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "limpeza" },
      },
      {
        id: 29,
        name: "Saco de Lixo",
        volumes: 0,
        quantityPerUnit: { quantity: 30, unit: "unidades" },
        description: "Saco de lixo 30L",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "limpeza" },
      },
      {
        id: 30,
        name: "Vassoura",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "unidade" },
        description: "Vassoura para chão",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "limpeza" },
      },
    ],
    itemsToBuy: [
      {
        id: 21,
        name: "Detergente",
        volumes: 0,
        quantityPerUnit: { quantity: 500, unit: "ml" },
        description: "Detergente líquido",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "limpeza" },
        volumesToBuy: 2, // Quantidade a ser comprada
      },
      {
        id: 23,
        name: "Amaciante",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "L" },
        description: "Amaciante de roupas",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "limpeza" },
        volumesToBuy: 1, // Quantidade a ser comprada
      },
      {
        id: 25,
        name: "Desinfetante",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "L" },
        description: "Desinfetante para pisos",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "limpeza" },
        volumesToBuy: 1, // Quantidade a ser comprada
      },
      {
        id: 26,
        name: "Esponja",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "unidade" },
        description: "Esponja para louça",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "limpeza" },
        volumesToBuy: 3, // Quantidade a ser comprada
      },
      {
        id: 27,
        name: "Papel Toalha",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "unidade" },
        description: "Rolo de papel toalha",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "limpeza" },
        volumesToBuy: 2, // Quantidade a ser comprada
      },
      {
        id: 29,
        name: "Saco de Lixo",
        volumes: 0,
        quantityPerUnit: { quantity: 30, unit: "unidades" },
        description: "Saco de lixo 30L",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "limpeza" },
        volumesToBuy: 1, // Quantidade a ser comprada
      },
      {
        id: 30,
        name: "Vassoura",
        volumes: 0,
        quantityPerUnit: { quantity: 1, unit: "unidade" },
        description: "Vassoura para chão",
        priorityTag: { type: "priority", value: "essencial" },
        categoryTag: { type: "category", value: "limpeza" },
        volumesToBuy: 1, // Quantidade a ser comprada
      },
    ],
  },
];
