import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ViewProps,
  TextInputProps,
  TouchableOpacityProps,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor"; // Importando o hook useThemeColor
import { Button } from "./Button";
import { BorderRadius, SpaceGaps } from "@/constants/Theme";

// Subcomponente: Wrapper
interface WrapperProps extends ViewProps {
  followKeyboard?: boolean; // Prop para seguir o teclado
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({
  followKeyboard = false,
  children,
  style,
  ...rest
}) => {
  const backgroundColor = useThemeColor({}, "surfaceContainerHigh"); // Cor de fundo do wrapper

  if (followKeyboard) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={[styles.wrapper, { backgroundColor }, style]}
        {...rest}
      >
        {children}
      </KeyboardAvoidingView>
    );
  }

  return (
    <View style={[styles.wrapper, { backgroundColor }, style]} {...rest}>
      {children}
    </View>
  );
};

// Subcomponente: Container
interface ContainerProps extends ViewProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, style, ...rest }) => {
  const backgroundColor = useThemeColor({}, "surfaceContainer"); // Cor de fundo do container

  return (
    <View style={[styles.container, { backgroundColor }, style]} {...rest}>
      {children}
    </View>
  );
};

// Subcomponente: Field
interface FieldProps extends TextInputProps {
  placeholder?: string;
}

const Field: React.FC<FieldProps> = ({ style, ...rest }) => {
  const color = useThemeColor({}, "onSurface"); // Cor do texto
  // const backgroundColor = useThemeColor({}, "surface"); // Cor de fundo do campo

  return (
    <TextInput
      style={[styles.field, { color }, style]}
      placeholderTextColor={useThemeColor({}, "outlineVariant")} // Cor do placeholder
      {...rest}
    />
  );
};

// Componente principal: InputBar
interface InputBarProps {
  onSearch: (text: string) => void;
  followKeyboard?: boolean;
}

const InputBar: React.FC<InputBarProps> & {
  Wrapper: React.FC<WrapperProps>;
  Container: React.FC<ContainerProps>;
  Field: React.FC<FieldProps>;
} = ({ onSearch, followKeyboard = false }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <InputBar.Wrapper followKeyboard={followKeyboard}>
      <InputBar.Container>
        <InputBar.Field
          placeholder="Search..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </InputBar.Container>
      <Button icon="search" onPress={handleSearch} />
    </InputBar.Wrapper>
  );
};

// Estilos
const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flexDirection: "row",
    gap: SpaceGaps.md,
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderRadius: BorderRadius.full,
    padding: 8,
  },
  field: {
    flex: 1,
    height: 40,
    borderWidth: 0,
    backgroundColor: "transparent",
    borderRadius: BorderRadius.full,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

// Associando subcomponentes ao InputBar
InputBar.Wrapper = Wrapper;
InputBar.Container = Container;
InputBar.Field = Field;

export default InputBar;
