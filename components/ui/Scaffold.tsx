// Scaffold.tsx
import { StyleSheet, View } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

interface ScaffoldProps {
  children: React.ReactNode;
  header?: React.ReactNode;
}

export const Scaffold = ({ children, header }: ScaffoldProps) => {
  const backgroundColor = useThemeColor({}, "surface");

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {header}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    overflow: "hidden", // Crucial para Android
  },
});
