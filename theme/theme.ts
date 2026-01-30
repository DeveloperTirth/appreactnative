// theme.ts
export const lightTheme = {
  colors: {
    background: "#FFFFFF",
    text: "#111111",
    primary: "#007AFF",
    secondary: "#FF9500",
    border: "#E5E5E5",
    error: "#FF3B30",
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radius: {
    sm: 6,
    md: 12,
    lg: 20,
  },
  typography: {
    h1: { fontSize: 28, fontWeight: "700" },
    h2: { fontSize: 22, fontWeight: "600" },
    body: { fontSize: 16, fontWeight: "400" },
    small: { fontSize: 12, fontWeight: "300" },
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: "#000000",
    text: "#FFFFFF",
    border: "#333333",
  },
};
