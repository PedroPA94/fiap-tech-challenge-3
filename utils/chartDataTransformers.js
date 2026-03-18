import { categories } from "../styles/theme";

export const transformExpensesByCategoryData = (transactions) => {
  if (!transactions || transactions.length === 0) {
    return [];
  }

  const expenses = transactions.filter((tx) => tx.type === "expense");

  if (expenses.length === 0) {
    return [];
  }

  const categoryTotals = expenses.reduce((acc, tx) => {
    if (!acc[tx.category]) {
      acc[tx.category] = 0;
    }
    acc[tx.category] += Math.abs(tx.value);
    return acc;
  }, {});

  const total = Object.values(categoryTotals).reduce(
    (sum, val) => sum + val,
    0,
  );

  const chartData = Object.entries(categoryTotals)
    .map(([categoryKey, value]) => {
      const category = categories[categoryKey] || categories.other;
      const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;

      return {
        value,
        percentage,
        text: `${percentage}%`,
        color: category.baseColor,
        label: category.label,
        categoryKey,
      };
    })
    .filter((item) => item.value > 0)
    .sort((a, b) => b.value - a.value);

  return chartData;
};

export const transformCashFlowData = (transactions) => {
  if (!transactions || transactions.length === 0) {
    return [];
  }

  const now = new Date();
  const monthsData = {};

  for (let i = 5; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
    const monthLabel = date.toLocaleDateString("pt-BR", { month: "short" });

    monthsData[monthKey] = {
      label: monthLabel,
      income: 0,
      expense: 0,
      monthKey,
    };
  }

  transactions.forEach((tx) => {
    const txDate = new Date(tx.date);
    const monthKey = `${txDate.getFullYear()}-${String(txDate.getMonth() + 1).padStart(2, "0")}`;

    if (monthsData[monthKey]) {
      if (tx.type === "income") {
        monthsData[monthKey].income += tx.value;
      } else {
        monthsData[monthKey].expense += Math.abs(tx.value);
      }
    }
  });

  const result = Object.values(monthsData).sort(
    (a, b) => new Date(`${a.monthKey}-01`) - new Date(`${b.monthKey}-01`),
  );

  return result;
};

export const calculateTotals = (transactions) => {
  if (!transactions || transactions.length === 0) {
    return { income: 0, expense: 0, balance: 0 };
  }

  const income = transactions
    .filter((tx) => tx.type === "income")
    .reduce((sum, tx) => sum + tx.value, 0);

  const expense = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + Math.abs(tx.value), 0);

  const balance = income - expense;

  return { income, expense, balance };
};

export const formatCurrency = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};
