// ThemeProvider.tsx
import React, { createContext, ReactNode, useContext, useState } from "react";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "./theme";

const ThemeContext = createContext(lightTheme);

type props = {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: props) => {
  const colorScheme = useColorScheme(); // auto light/dark detection
  const [theme] = useState(colorScheme === "dark" ? darkTheme : lightTheme);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
