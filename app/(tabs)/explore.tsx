import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Scaffold } from "@/components/ui/Scaffold";
import { Header } from "@/components/ui/Header";

const ListScreen = () => {
  const navigation = useNavigation();

  return (
    <Scaffold
      header={
        <Header
          title="Home"
          navigation={navigation}
          showBackButton={true}
          rightActions={[
            <TouchableOpacity onPress={() => console.log("Notificações")}>
              <MaterialIcons name="notifications" size={24} color="white" />
            </TouchableOpacity>,
          ]}
        />
      }
    >
      <View></View>
    </Scaffold>
  );
};

export default ListScreen;
