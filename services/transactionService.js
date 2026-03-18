import {
  mockLoadTransactions,
  mockAddTransaction,
  mockUpdateTransaction,
} from "../mocks/mockTransactions";

export const transactionService = {
  loadTransactions: async () => {
    try {
      const transactions = await mockLoadTransactions();

      return transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
    } catch (error) {
      throw error;
    }
  },

  addTransaction: async (transactionData) => {
    try {
      const transaction = await mockAddTransaction(transactionData);
      return transaction;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  updateTransaction: async (id, transactionData) => {
    try {
      const transaction = await mockUpdateTransaction(id, transactionData);
      return transaction;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
