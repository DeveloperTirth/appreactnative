import { store } from "@/store";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { Stack } from "expo-router";
import React from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(drawer)" />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}
