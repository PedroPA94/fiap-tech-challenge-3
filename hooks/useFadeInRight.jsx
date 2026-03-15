import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect } from "react";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

export function useFadeInRight(index = 0) {
  const opacity = useSharedValue(0);
  const translate = useSharedValue(-20);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateX: translate.value }],
  }));

  useEffect(() => {
    const delay = index * 40;

    // opacity.value = 0;
    // translate.value = -20;

    opacity.value = withDelay(
      delay,
      withTiming(1, {
        duration: 350,
        easing: Easing.out(Easing.cubic),
      }),
    );

    translate.value = withDelay(
      delay,
      withTiming(0, {
        duration: 250,
        easing: Easing.out(Easing.cubic),
      }),
    );
  }, [index]);

  return animatedStyle;
}
