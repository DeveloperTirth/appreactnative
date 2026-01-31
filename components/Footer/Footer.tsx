import { useTheme } from "@/theme/ThemeProvider";
import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

type Props = {
  text: string;
  style?: StyleProp<ViewStyle>;
};

export const Footer = ({ style, text }: Props) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, style]}>
      <Text style={{ color: theme.colors.text }}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
  },
});
