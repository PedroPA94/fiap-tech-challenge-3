import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { useFadeInUp } from "../../hooks/useFadeInUp";
import { spacing } from "../../styles/theme";
import Balance from "./components/balance";
import Header from "./components/header";

const DashboardScreen = () => {
  const reanimatedStyle = useFadeInUp();

  return (
    <View style={styles.container}>
      <Header />
      <Animated.View style={reanimatedStyle}>
        <Balance />
      </Animated.View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    gap: spacing.xl,
  },
});
