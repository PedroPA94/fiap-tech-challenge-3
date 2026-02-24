import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export function useFadeInUp(durationOpacity = 500, durationTranslate = 250) {
  const fadeAnim = useSharedValue(0);
  const moveAnim = useSharedValue(40);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value,
      transform: [{ translateY: moveAnim.value }],
    };
  });

  useFocusEffect(
    useCallback(() => {
      fadeAnim.value = 0;
      moveAnim.value = 40;

      fadeAnim.value = withTiming(1, { duration: durationOpacity });
      moveAnim.value = withTiming(0, { duration: durationTranslate });
    }, []),
  );

  return reanimatedStyle;
}
