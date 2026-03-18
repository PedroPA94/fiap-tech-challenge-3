import { StyleSheet, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { shadow, spacing } from "../../styles/theme";
import Balance from "./components/balance";
import Header from "./components/header";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import IconButton from "../../components/iconButton";
import { Ionicons } from "@expo/vector-icons";
import { useTransactions } from "../../contexts/TransactionsContext";
import { useEffect } from "react";

const DashboardScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { loadTransactions } = useTransactions();

  useEffect(() => {
    loadTransactions();
  }, [loadTransactions]);

  const addTransaction = () => {
    router.push("/(modals)/transaction");
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header />

      <Animated.View entering={FadeInDown.delay(200).duration(350).springify()}>
        <Balance />
      </Animated.View>

      <View style={[styles.addButton, { bottom: 30 + insets.bottom }]}>
        <IconButton
          onPress={addTransaction}
          icon={<Ionicons name="add" size={24} color="white" />}
          round
          style={shadow}
        />
      </View>
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
  addButton: {
    position: "absolute",
    right: 30,
  },
});
