import { Gesture } from "react-native-gesture-handler";
import { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export const usePinch = () => {
  const scale = useSharedValue(1);

  const pinchgesture = Gesture.Pinch()
    .onUpdate(e => {
      scale.value = e.scale;
    })
    .onEnd(() => {
      scale.value = withSpring(1);
    });

  const pinchanimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return { pinchgesture, pinchanimatedStyle };
};
