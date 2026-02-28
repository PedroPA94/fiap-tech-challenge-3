import { FlatList, StyleSheet, View } from "react-native";
import Typography from "../../components/typography";
import { spacing, typography } from "../../styles/theme";
import TransactionItem from "./components/transactionItem";

const TransactionsScreen = () => {
  const transactions = [
    {
      value: 5000,
      date: "2026-02-28T16:00:00",
      category: "income",
      description: "Salário",
    },
    {
      value: -1200,
      date: "2026-02-27T09:30:00",
      category: "home",
      description: "Aluguel",
    },
    {
      value: -350,
      date: "2026-02-26T14:10:00",
      category: "food",
      description: "Supermercado",
    },
    {
      value: -89.9,
      date: "2026-02-25T19:45:00",
      category: "leisure",
      description: "Cinema",
    },
    {
      value: -60,
      date: "2026-02-24T08:20:00",
      category: "transport",
      description: "Uber",
    },
    {
      value: -220,
      date: "2026-02-23T11:00:00",
      category: "health",
      description: "Consulta médica",
    },
    {
      value: -480,
      date: "2026-02-20T18:15:00",
      category: "education",
      description: "Curso online",
    },
    {
      value: -150,
      date: "2026-01-30T13:40:00",
      category: "food",
      description: "Restaurante",
    },
    {
      value: 800,
      date: "2026-01-28T10:00:00",
      category: "income",
      description: "Freelance",
    },
    {
      value: -95,
      date: "2026-01-26T17:25:00",
      category: "other",
      description: "Compras diversas",
    },
  ];

  const formattedTransactions = transactions.map((t) => {
    const date = new Date(t.date);

    return {
      ...t,
      date: new Intl.DateTimeFormat("pt-BR").format(date),
    };
  });

  return (
    <View style={styles.container}>
      <Typography weight="bold" style={styles.title}>
        Transações
      </Typography>
      <View style={styles.transactionsWrapper}>
        <FlatList
          data={formattedTransactions}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => (
            <TransactionItem
              category={item.category}
              value={item.value}
              description={item.description}
              date={item.date}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: spacing.md }} />}
          contentContainerStyle={{
            paddingHorizontal: spacing.sm,
            paddingVertical: spacing.md,
          }}
        />
      </View>
    </View>
  );
};

export default TransactionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    gap: spacing.xl,
  },
  title: {
    fontSize: typography.size.lg,
  },
  transactionsWrapper: {
    flex: 1,
  },
});
