import { useTheme } from "@/theme/ThemeProvider";
import React from "react";
import { Modal as RNModal, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const Modal = ({ visible, onClose, children, style }: Props) => {
  const theme = useTheme();

  return (
    <RNModal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={[styles.container, { backgroundColor: theme.colors.primary },style]}>
          {children}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={{ color: theme.colors.primary }}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    width: "80%",
    padding: 20,
    borderRadius: 12,
  },
  closeButton: {
    marginTop: 16,
    alignSelf: "flex-end",
  },
});
