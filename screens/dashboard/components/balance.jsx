import { StyleSheet } from "react-native";
import { View } from "react-native-web";
import Card from "../../../components/card";
import InfoTile from "../../../components/infoTile";
import Typography from "../../../components/typography";
import { colors, spacing, typography } from "../../../styles/theme";

const Balance = () => {
  return (
    <Card kind="primary" style={styles.container}>
      <View style={styles.balanceWrapper}>
        <Typography style={styles.balanceLabel}>Saldo total</Typography>
        <Typography style={styles.balanceValue}>R$ 4.634,10</Typography>
      </View>
      <View style={styles.infoWrapper}>
        <InfoTile
          icon="arrow-down-circle-outline"
          label="Receitas"
          value="R$ 5.000,00"
        />

        <InfoTile
          icon="arrow-up-circle-outline"
          label="Despesas"
          value="R$ 365,90"
        />
      </View>
    </Card>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    gap: spacing.xl,
  },
  balanceWrapper: {
    gap: spacing.sm,
  },
  balanceLabel: {
    color: colors.white,
    fontSize: typography.size.sm,
  },
  balanceValue: {
    color: colors.white,
    fontSize: typography.size.xl,
    fontWeight: "bold",
  },
  infoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
