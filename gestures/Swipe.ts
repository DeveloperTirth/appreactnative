import { Gesture } from "react-native-gesture-handler";
import { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export const useSwipe = () => {
  const translateX = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onUpdate(e => {
      translateX.value = e.translationX;
    })
    .onEnd(e => {
      // swipe threshold
      if (Math.abs(e.translationX) > 100) {
        translateX.value = withSpring(e.translationX > 0 ? 300 : -300);
      } else {
        translateX.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return { gesture, animatedStyle };
};
