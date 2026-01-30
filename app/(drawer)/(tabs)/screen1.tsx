import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Modal } from "@/components/Modal";

export default function ComponentsPreviewScreen() {
  const [inputValue, setInputValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Header title="Components Preview" />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* INPUT */}
        <View style={styles.section}>
          <Card>
            <Input
              placeholder="Type something..."
              value={inputValue}
              onChangeText={setInputValue}
            />
          </Card>
        </View>

        {/* BUTTONS */}
        <View style={styles.section}>
          <Card>
            <Button title="Primary Button" onPress={() => {}} />
            <View style={styles.spacer} />
            <Button
              title="Open Modal"
              onPress={() => setModalVisible(true)}
            />
          </Card>
        </View>

        {/* CARD CONTENT */}
        <View style={styles.section}>
          <Card>
            <Button title="Button inside Card" onPress={() => {}} />
          </Card>
        </View>
      </ScrollView>

      {/* FOOTER */}
      <Footer text="Expo Ultimate Template © 2026" />

      {/* MODAL */}
      <Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContent}>
          <Button
            title="Close Modal"
            onPress={() => setModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 32,
  },

  section: {
    marginBottom: 20,
  },

  spacer: {
    height: 12,
  },

  modalContent: {
    marginTop: 8,
  },
});
