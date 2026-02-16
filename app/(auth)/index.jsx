import { StyleSheet, View } from "react-native";
import Botao from "../components/botao";
import Input from "../components/input";
import Logo from "../components/logo";
import Texto from "../components/texto";
import { colors, spacing, typography } from "../styles/theme";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.brandText}>
        <Texto style={styles.title}>Bytebank</Texto>
        <Texto style={styles.subtitle}>Você no controle do seu futuro</Texto>
      </View>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input style={styles.input} placeholder="Senha" secureTextEntry />
        <Botao onPress={() => {}}>Entrar</Botao>
        <Botao onPress={() => {}} secundario>
          Criar conta
        </Botao>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.xl,
  },
  brandText: {
    gap: spacing.md,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: typography.size.xl,
  },
  subtitle: {
    color: colors.textSecondary,
    textAlign: "center",
    fontSize: typography.size.md,
  },
  inputContainer: {
    width: "100%",
    gap: spacing.lg,
    marginTop: spacing.md,
  },
});
