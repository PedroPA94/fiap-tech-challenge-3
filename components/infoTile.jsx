import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { colors, spacing, typography } from "../styles/theme";
import Typography from "./typography";

const InfoTile = ({
  icon,
  label,
  value,
  tone = "dark",
  iconVariant = "primary",
  style,
}) => {
  const toneMap = {
    light: {
      textColor: colors.black,
    },
    dark: {
      textColor: colors.white,
    },
  };

  const selectedTone = toneMap[tone] ?? toneMap.dark;
  const labelStyle = { ...styles.label, color: selectedTone.textColor };
  const valueStyle = { ...styles.value, color: selectedTone.textColor };

  const iconVariantMap = {
    primary: {
      iconColor: colors.white,
      background: colors.primarySoft,
    },
    secondary: {
      iconColor: colors.secondary,
      background: colors.secondarySoft,
    },
    success: {
      iconColor: colors.success,
      background: colors.successSoft,
    },
    danger: {
      iconColor: colors.danger,
      background: colors.dangerSoft,
    },
  };

  const selectedVariant = iconVariantMap[iconVariant] ?? iconVariantMap.primary;

  return (
    <View style={[styles.container, style]}>
      <View
        style={[
          styles.iconWrapper,
          { backgroundColor: selectedVariant.background },
        ]}
      >
        <Ionicons name={icon} size={25} color={selectedVariant.iconColor} />
      </View>

      <View style={styles.textWrapper}>
        <Typography style={labelStyle}>{label}</Typography>
        <Typography style={valueStyle}>{value}</Typography>
      </View>
    </View>
  );
};

export default InfoTile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  textWrapper: {
    flex: 1,
  },
  label: {
    fontSize: typography.size.xxs,
    textTransform: "uppercase",
    letterSpacing: 0.25,
  },
  value: {
    fontSize: typography.size.sm,
    fontWeight: "bold",
    marginTop: spacing.xs,
  },
});
