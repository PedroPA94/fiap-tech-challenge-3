import { StyleSheet, View } from "react-native";
import Card from "../../../components/card";
import InfoTile from "../../../components/infoTile";
import Typography from "../../../components/typography";
import { categories, colors, typography } from "../../../styles/theme";

const TransactionItem = ({ value, date, description, category }) => {
  const categoryData = categories[category] ?? categories.other;

  const isNegative = value < 0;

  const formattedValue = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.abs(value));

  const displayValue = isNegative
    ? `- R$ ${formattedValue}`
    : `R$ ${formattedValue}`;

  const valueColor = isNegative ? colors.danger : colors.success;

  return (
    <Card style={styles.container}>
      <InfoTile
        value={description}
        tone="light"
        category={categoryData}
        reversed
      />

      <View style={styles.inner}>
        <Typography style={styles.date}>{date}</Typography>

        <Typography weight="bold" style={{ color: valueColor }}>
          {displayValue}
        </Typography>
      </View>
    </Card>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inner: {
    alignItems: "flex-end",
  },
  date: {
    color: colors.textSecondary,
    fontSize: typography.size.xs,
  },
});
