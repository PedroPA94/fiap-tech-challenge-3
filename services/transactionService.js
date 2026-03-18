import {
  mockLoadTransactions,
  mockAddTransaction,
  mockUpdateTransaction,
} from "../mocks/mockTransactions";

export const transactionService = {
  loadTransactions: async () => {
    try {
      const transactions = await mockLoadTransactions();
      return transactions;
    } catch (error) {
      throw new Error(error.message);
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
