import { StyleSheet, View } from "react-native";
import Card from "../../../components/card";
import InfoTile from "../../../components/infoTile";
import Typography from "../../../components/typography";
import { colors, spacing, typography } from "../../../styles/theme";

const Balance = () => {
  return (
    <Card kind="primary" style={styles.container}>
      <View style={styles.balanceWrapper}>
        <Typography style={styles.balanceLabel}>Saldo total</Typography>
        <Typography weight="bold" style={styles.balanceValue}>
          R$ 4.634,10
        </Typography>
      </View>
      <View style={styles.infoWrapper}>
        <InfoTile
          value="R$ 5.000,00"
          category={{
            icon: "arrow-down-circle-outline",
            label: "Receitas",
            baseColor: colors.white,
            softColor: colors.primarySoft,
          }}
        />

        <InfoTile
          value="R$ 365,90"
          category={{
            icon: "arrow-up-circle-outline",
            label: "Despesas",
            baseColor: colors.white,
            softColor: colors.primarySoft,
          }}
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
  },
  infoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
