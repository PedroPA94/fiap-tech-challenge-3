import { StyleSheet, View } from "react-native";
import { spacing } from "../../styles/theme";
import Header from "./components/header";

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.lg,
  },
});
