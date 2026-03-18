import { createContext, useContext, useState, useCallback } from "react";
import { transactionService } from "../services/transactionService";

const TransactionsContext = createContext();

export function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadTransactions = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await transactionService.loadTransactions();
      setTransactions(data);
      return data;
    } catch (err) {
      const errorMessage = err.message || "Erro ao carregar transações";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addTransaction = useCallback(async (transactionData) => {
    setIsLoading(true);
    setError(null);

    try {
      const newTransaction =
        await transactionService.addTransaction(transactionData);
      setTransactions((prev) => [...prev, newTransaction]);
      return newTransaction;
    } catch (err) {
      const errorMessage = err.message || "Erro ao criar transação";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateTransaction = useCallback(async (id, transactionData) => {
    setIsLoading(true);
    setError(null);

    try {
      const updatedTransaction = await transactionService.updateTransaction(
        id,
        transactionData,
      );

      setTransactions((prev) =>
        prev.map((t) => (t.id === id ? updatedTransaction : t)),
      );

      return updatedTransaction;
    } catch (err) {
      const errorMessage = err.message || "Erro ao atualizar transação";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getTransaction = useCallback(
    (id) => {
      return transactions.find((t) => t.id === id);
    },
    [transactions],
  );

  const getTotalBalance = useCallback(() => {
    return transactions.reduce(
      (sum, transaction) => sum + transaction.value,
      0,
    );
  }, [transactions]);

  const value = {
    transactions,
    isLoading,
    error,
    loadTransactions,
    addTransaction,
    updateTransaction,
    getTransaction,
    getTotalBalance,
  };

  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  if (!context) {
    throw new Error(
      "useTransactions deve ser usado dentro de TransactionsProvider",
    );
  }
  return context;
}
