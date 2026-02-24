import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { colors, radius, spacing, typography } from "../styles/theme";
import Texto from "./texto";

const Input = ({ label, icon, style, erro = false, msgErro, ...props }) => {
  const [focused, setFocused] = useState(false);

  const containerStyles = [
    styles.inputContainer,
    focused && !erro && styles.focused,
    erro && styles.errorContainer,
  ];

  return (
    <View>
      {label && <Texto style={styles.label}>{label}</Texto>}

      <View style={containerStyles}>
        {icon && <View style={styles.icon}>{icon}</View>}

        <TextInput
          style={[styles.input, style]}
          placeholderTextColor={colors.textSecondary}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </View>

      {erro && msgErro && <Texto style={styles.errorText}>{msgErro}</Texto>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    marginBottom: spacing.sm,
    paddingLeft: spacing.xs,
    color: colors.textPrimary,
    fontSize: typography.size.sm,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
  },
  focused: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  errorContainer: {
    borderColor: colors.error,
    borderWidth: 2,
  },
  icon: {
    marginRight: spacing.sm,
  },
  input: {
    flex: 1,
  },
  errorText: {
    marginTop: spacing.xs,
    paddingLeft: spacing.xs,
    fontSize: typography.size.xs,
    color: colors.error,
  },
});
