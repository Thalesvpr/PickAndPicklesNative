import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Biblioteca de ícones
import { Switch } from '@/components/widgets/Switch'; // Importe o componente Switch

export default function HomeScreen() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitchToggle = (value: boolean) => {
    setIsSwitchOn(value);
    console.log('Switch está:', value ? 'Ligado' : 'Desligado');
  };

  return (
      <View style={styles.container}>
        <Text style={styles.text}>
          O Switch está: {isSwitchOn ? 'Ligado' : 'Desligado'}
        </Text>

        {/* Usando o Switch com ícones personalizados */}
        <Switch
            value={isSwitchOn}
            onValueChange={handleSwitchToggle}
            thumbColor="#FF0000" // Thumb vermelho
            trackColorOn="#00FF00" // Track verde quando ligado
            trackColorOff="#0000FF" // Track azul quando desligado
            size="large" // Tamanho grande
            iconOn={<MaterialIcons name="check" size={16} color="#FFF" />} // Ícone quando ligado
            iconOff={<MaterialIcons name="close" size={16} color="#FFF" />} // Ícone quando desligado
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});