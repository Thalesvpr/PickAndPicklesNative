import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Scaffold } from "@/components/ui/Scaffold";
import { Header } from "@/components/ui/Header";
import Button from "@/components/widgets/Button";

const ListScreen = () => {
  const navigation = useNavigation();

  return (
    <Scaffold
      header={
        <Header
          title="Friends"
          navigation={navigation}
          showBackButton={true}
          rightActions={[<Button icon="notifications" />]}
        />
      }
    >
      <View></View>
    </Scaffold>
  );
};

export default ListScreen;
