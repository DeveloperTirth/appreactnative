import { useTheme } from "@/theme/ThemeProvider";
import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const Card = ({ children, style }: Props) => {
  const theme = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.colors.primary }, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
  },
});
