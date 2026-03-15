import { useLocalSearchParams } from "expo-router";

export default function TransactionFormScreen() {
  const { id } = useLocalSearchParams();

  const isEditing = !!id;

  return <>{isEditing ? "Editar transação" : "Nova transação"}</>;
}
