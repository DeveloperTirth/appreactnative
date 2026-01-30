import { useTheme } from "@/theme/ThemeProvider";
import React from "react";
import { StyleProp, StyleSheet, TextInput, TextInputProps, ViewStyle } from "react-native";

type Props = TextInputProps & {
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
};

export const Input = ({ placeholder, style, ...rest }: Props) => {
  const theme = useTheme();

  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={theme.colors.text}
      style={[styles.input, { borderColor: theme.colors.secondary, color: theme.colors.text }, style]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    fontSize: 16,
  },
});
