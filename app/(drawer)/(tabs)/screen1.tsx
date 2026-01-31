import { useState } from "react";
import { ScrollView, StyleSheet, View , Text} from "react-native";

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
      <Header  textStyle={{}}title="Components Preview" />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* INPUT */}
        <View style={styles.section}>
            <Input
              placeholder="Type something..."
              value={inputValue}
              onChangeText={setInputValue}
            />
        </View>

        {/* BUTTONS */}
        <View style={styles.section}>
            <Button title="Primary Button" onPress={() => {}} />
            <View style={styles.spacer} />
            <Button
              title="Open Modal"
              onPress={() => setModalVisible(true)}
            />
        </View>

        {/* CARD CONTENT */}
        <View style={styles.section}>
          <Card>
              <Text>text inside card!</Text>
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
