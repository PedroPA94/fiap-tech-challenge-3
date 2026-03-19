const MOCK_TRANSACTIONS = [
  {
    id: "1",
    value: 5000,
    date: "2026-02-28T16:00:00",
    category: "income",
    description: "Salário",
    type: "income",
  },
  {
    id: "2",
    value: 1200,
    date: "2026-02-27T09:30:00",
    category: "home",
    description: "Aluguel",
    type: "expense",
    userId: "123",
  },
  {
    id: "3",
    value: 350,
    date: "2026-02-26T14:10:00",
    category: "food",
    description: "Supermercado",
    type: "expense",
  },
  {
    id: "4",
    value: 89.9,
    date: "2026-02-25T19:45:00",
    category: "leisure",
    description: "Cinema",
    type: "expense",
  },
  {
    id: "5",
    value: 60,
    date: "2026-02-24T08:20:00",
    category: "transport",
    description: "Uber",
    type: "expense",
  },
  {
    id: "6",
    value: 220,
    date: "2026-02-23T11:00:00",
    category: "health",
    description: "Consulta médica",
    type: "expense",
  },
  {
    id: "7",
    value: 480,
    date: "2026-02-20T18:15:00",
    category: "education",
    description: "Curso online",
    type: "expense",
  },
  {
    id: "8",
    value: 150,
    date: "2026-01-30T13:40:00",
    category: "food",
    description: "Restaurante",
    type: "expense",
  },
  {
    id: "9",
    value: 800,
    date: "2026-01-28T10:00:00",
    category: "income",
    description: "Freelance",
    type: "income",
  },
  {
    id: "10",
    value: 95,
    date: "2026-01-26T17:25:00",
    category: "other",
    description: "Compras diversas",
    type: "expense",
  },
];

let transactions = [...MOCK_TRANSACTIONS];
let nextId = 11;

export const mockLoadTransactions = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return transactions.map((transaction) => ({
    ...transaction,
    value:
      transaction.type === "expense"
        ? -Math.abs(transaction.value)
        : transaction.value,
  }));
};

export const mockAddTransaction = async (transactionData) => {
  await new Promise((resolve) => setTimeout(resolve, 400));

  const newTransaction = {
    id: String(nextId++),
    ...transactionData,
    value:
      transactionData.type === "expense"
        ? -Math.abs(transactionData.value)
        : transactionData.value,
    createdAt: new Date().toISOString(),
  };

  transactions.push(newTransaction);

  return newTransaction;
};

export const mockUpdateTransaction = async (id, transactionData) => {
  await new Promise((resolve) => setTimeout(resolve, 400));

  const index = transactions.findIndex((t) => t.id === id);

  if (index === -1) {
    throw new Error("Transação não encontrada");
  }

  const updatedTransaction = {
    ...transactions[index],
    ...transactionData,
    value:
      transactionData.type === "expense"
        ? -Math.abs(transactionData.value)
        : transactionData.value,
    updatedAt: new Date().toISOString(),
  };

  transactions[index] = updatedTransaction;

  return updatedTransaction;
};

export const mockResetTransactions = () => {
  transactions = [...MOCK_TRANSACTIONS];
  nextId = 11;
};
