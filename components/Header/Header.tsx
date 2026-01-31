import { useTheme } from "@/theme/ThemeProvider";
import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

type Props = {
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
};

export const Header = ({ title , style, textStyle}: Props) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
  },
});
