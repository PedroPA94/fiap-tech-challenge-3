import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Animated, { Easing, FadeInLeft } from "react-native-reanimated";
import Typography from "../../components/typography";
import { spacing, typography } from "../../styles/theme";
import TransactionItem from "./components/transactionItem";
import TransactionsFilter from "./components/transactionsFilter";
import { SafeAreaView } from "react-native-safe-area-context";

const TransactionsScreen = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

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
      originalDate: t.date,
    };
  });

  const filteredTransactions = formattedTransactions.filter((transaction) => {
    if (selectedCategory && transaction.category !== selectedCategory) {
      return false;
    }

    if (selectedDate) {
      const [day, month, year] = selectedDate.split("/");
      const searchDate = `${year}-${month}-${day}`;
      const transactionDate = new Date(transaction.originalDate)
        .toISOString()
        .split("T")[0];

      if (transactionDate !== searchDate) return false;
    }

    if (search.trim()) {
      const query = search.toLowerCase().trim();
      const descriptionMatch = transaction.description
        .toLowerCase()
        .includes(query);

      return descriptionMatch;
    }

    return true;
  });

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Typography weight="bold" style={styles.title}>
        Transações
      </Typography>

      <View style={styles.transactionsWrapper}>
        <FlatList
          ListHeaderComponent={
            <View style={{ marginBottom: spacing.lg }}>
              <TransactionsFilter
                search={search}
                onSearchChange={setSearch}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedDate={selectedDate}
                onDateChange={setSelectedDate}
              />
            </View>
          }
          data={filteredTransactions}
          keyExtractor={(item) => item.date}
          renderItem={({ item, index }) => (
            <AnimatedTransactionItem item={item} index={index} />
          )}
          ItemSeparatorComponent={<View style={{ height: spacing.md }} />}
          contentContainerStyle={{
            paddingHorizontal: spacing.sm,
            paddingVertical: spacing.md,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default TransactionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacing.md,
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
  },
  title: {
    fontSize: typography.size.lg,
  },
  transactionsWrapper: {
    flex: 1,
  },
});

const AnimatedTransactionItem = ({ item, index }) => {
  return (
    <Animated.View
      collapsable={false}
      entering={FadeInLeft.delay(index * 50)
        .duration(320)
        .easing(Easing.out(Easing.cubic))}
    >
      <TransactionItem
        category={item.category}
        value={item.value}
        description={item.description}
        date={item.date}
      />
    </Animated.View>
  );
};
