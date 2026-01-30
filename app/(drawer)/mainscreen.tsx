import { MotiView } from "moti";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

import { useDrag } from "@/gestures/Drag";
import { usePinch } from "@/gestures/Pinch";
import { useSwipe } from "@/gestures/Swipe";

import { fadeIn, scaleIn } from "@/animation";
import { Button, Card, Footer, Header, Input } from "@/components";

export default function MainScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const { gesture, animatedStyle } = useSwipe();
  const { draggesture, draganimatedStyle } = useDrag();
  const { pinchgesture, pinchanimatedStyle } = usePinch();

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#F3F4F6" }}>
      
      {/* 🔹 Fade + Scale */}
      <MotiView {...fadeIn} {...scaleIn}>
        <Header title="My Shop AI" />
      </MotiView>

      {/* 🔹 Swipe */}
      <GestureDetector gesture={gesture}>
        <Animated.View style={[animatedStyle, { marginTop: 24 }]}>
          <Card>
            <Text>Swipe this card</Text>
            <Input placeholder="Hinglish → SQL" />
            <Button title="Submit" onPress={() => setModalVisible(true)} />
          </Card>
        </Animated.View>
      </GestureDetector>

      {/* 🔹 Pinch */}
      <GestureDetector gesture={pinchgesture}>
        <Animated.View style={[pinchanimatedStyle, { marginTop: 24 }]}>
          <Card>
            <Text>Pinch to zoom</Text>
          </Card>
        </Animated.View>
      </GestureDetector>

      {/* 🔹 Drag */}
      <GestureDetector gesture={draggesture}>
        <Animated.View style={[draganimatedStyle, { marginTop: 24 }]}>
          <Footer text="Drag me around" />
        </Animated.View>
      </GestureDetector>

    </View>
  );
}
