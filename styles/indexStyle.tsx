import { useTheme } from "@/theme/ThemeProvider";
import { StyleSheet } from "react-native";

const theme = useTheme();
const indexStyles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background,
    }
});

export default indexStyles;