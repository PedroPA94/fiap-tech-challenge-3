import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Typography from "../../../components/typography";
import { colors, radius, spacing, typography } from "../../../styles/theme";

export default function ReceiptAttachment() {
  return (
    <View style={styles.receiptPlaceholder}>
      <Ionicons name="camera" size={24} color={colors.textSecondary} />
      <Typography style={styles.receiptText}>Anexar comprovante</Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  receiptPlaceholder: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingVertical: spacing.xxl,
    alignItems: "center",
    gap: spacing.sm,
  },
  receiptText: {
    color: colors.textSecondary,
    fontSize: typography.size.sm,
  },
});
