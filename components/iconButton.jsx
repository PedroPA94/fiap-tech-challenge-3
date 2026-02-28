import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  colors,
  radius,
  shadow,
  shadowNeutral,
  spacing,
} from "../styles/theme";

const IconButton = ({ icon, onPress, secondary, round, style }) => {
  return (
    <TouchableOpacity
      style={[
        style,
        styles.base,
        secondary ? styles.secondary : styles.primary,
        round ? styles.round : styles.regularBorder,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {icon && <View style={styles.icon}>{icon}</View>}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  base: {
    padding: spacing.md,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: spacing.xxl,
    maxWidth: spacing.xxl,
  },
  primary: {
    backgroundColor: colors.primary,
    ...shadow,
  },
  secondary: {
    backgroundColor: colors.white,
    ...shadowNeutral,
  },
  textPrimary: {
    color: colors.white,
    fontWeight: "bold",
  },
  textSecondary: {
    color: colors.textSecondary,
    fontWeight: "bold",
  },
  round: {
    borderRadius: radius.lg,
  },
  regularBorder: {
    borderRadius: radius.sm,
  },
  icon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
