import { useTheme } from "@/theme/ThemeProvider";
import React from "react";
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  color?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const Button = ({
  title,
  onPress,
  color,
  style,
  textStyle,
}: Props) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={style}
    >
      <Text
        style={[
          { color: color ?? theme.colors.background },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
