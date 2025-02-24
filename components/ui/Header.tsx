import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Texts } from '../widgets/Texts';
import { tkn } from '@/constants/Theme';

interface HeaderProps {
  title: string;
  navigation: any; // Tipo pode ser ajustado conforme necessário
  showBackButton?: boolean;
  rightActions?: React.ReactNode;
}

export const Header = ({
  title,
  navigation,
  showBackButton = true,
  rightActions,
}: HeaderProps) => {
  const backgroundColor = useThemeColor({}, "surface"); 
  const iconColor = useThemeColor({}, "onSurface"); 



  return (
    <View
      style={{
        height: 56,
        backgroundColor,
        flexDirection: 'row',
        alignItems: 'center',
        gap: tkn.gp.md,
        paddingHorizontal: tkn.pm.md,
      }}
    >
      {/* Botão de voltar */}
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            color={iconColor}
          />
        </TouchableOpacity>
      )}

      {/* Título */}
      <Texts.Headline>
        {title}
      </Texts.Headline>

      {/* Ações à direita */}
      {rightActions && (
        <View style={{ marginLeft: 'auto' }}>{rightActions}</View>
      )}
    </View>
  );
};