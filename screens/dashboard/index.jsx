import { StyleSheet } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { spacing } from "../../styles/theme";
import Balance from "./components/balance";
import Header from "./components/header";
import { SafeAreaView } from "react-native-safe-area-context";

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Animated.View entering={FadeInDown.delay(200).duration(350).springify()}>
        <Balance />
      </Animated.View>
    </SafeAreaView>
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
