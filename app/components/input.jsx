import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { colors, radius, spacing } from "../styles/theme";

const Input = ({ style, ...props }) => {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      style={[styles.input, focused && styles.focused, style]}
      placeholderTextColor={colors.textSecondary}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      {...props}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radius.md,
    padding: spacing.md,
    backgroundColor: colors.background,
  },
  focused: {
    borderColor: colors.primary,
  },
});
