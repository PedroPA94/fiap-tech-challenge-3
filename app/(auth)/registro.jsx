import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import Botao from "../components/botao";
import Input from "../components/input";
import Texto from "../components/texto";
import { colors, spacing, typography } from "../styles/theme";

const Registro = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pageTitle}>
        <Texto style={styles.title}>Criar conta</Texto>
        <Texto style={styles.subtitle}>
          Comece a organizar sua vida financeira {"\n"}hoje mesmo!
        </Texto>
      </View>

      <View style={styles.inputContainer}>
        <Input
          label="Nome completo"
          placeholder="Seu nome"
          icon={<Ionicons name="person-outline" size={20} color="#94A3B8" />}
        />
        <Input
          label="Email"
          placeholder="exemplo@email.com"
          icon={<Ionicons name="mail-outline" size={20} color="#94A3B8" />}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          label="Senha"
          placeholder="••••••••"
          icon={
            <Ionicons name="lock-closed-outline" size={20} color="#94A3B8" />
          }
          secureTextEntry
        />
      </View>
      <Botao onPress={() => {}} style={{ marginTop: spacing.md }}>
        Cadastrar
      </Botao>
    </View>
  );
};

export default Registro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
    justifyContent: "start",
    gap: spacing.lg,
  },
  pageTitle: { gap: spacing.sm },
  title: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: typography.size.xl,
  },
  subtitle: {
    color: colors.textSecondary,
    textAlign: "left",
    fontSize: typography.size.md,
  },
  inputContainer: {
    width: "100%",
    gap: spacing.lg,
    marginTop: spacing.md,
  },
});
