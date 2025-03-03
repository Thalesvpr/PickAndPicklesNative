import EditableDraggableList from "@/components/ui/EditableDraggableList";
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface ListItem {
  key: string;
  label: string;
}

const App = () => {
  const [items, setItems] = useState<ListItem[]>([
    { key: "1", label: "Item 1" },
    { key: "2", label: "Item 2" },
    { key: "3", label: "Item 3" },
  ]);

  const handleDragEnd = (data: ListItem[]) => {
    setItems(data);
  };

  const updateItem = (key: string, newLabel: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.key === key ? { ...item, label: newLabel } : item
      )
    );
  };

  // Componente personalizado para o estado normal
  const renderItem = (
    item: ListItem,
    isEditing: boolean,
    toggleEdit: () => void
  ) => (
    <View style={styles.card}>
      <Text>{item.label}</Text>
    </View>
  );

  // Componente personalizado para o modo de edição
  const renderEditItem = (item: ListItem, toggleEdit: () => void) => (
    <TextInput
      style={styles.input}
      value={item.label}
      onChangeText={(text) => updateItem(item.key, text)}
      onBlur={toggleEdit}
      autoFocus
    />
  );

  return (
    <View style={styles.container}>
      <EditableDraggableList
        items={items}
        onDragEnd={handleDragEnd}
        renderItem={renderItem}
        renderEditItem={renderEditItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  card: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
});

export default App;
