import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import Botao from "../components/botao";
import Input from "../components/input";
import Logo from "../components/logo";
import Texto from "../components/texto";
import { useFadeInUp } from "../hooks/useFadeInUp";
import { colors, spacing, typography } from "../styles/theme";

const LoginScreen = () => {
  const router = useRouter();

  const criarConta = () => {
    router.navigate("/registro");
  };

  const reanimatedStyleLogo = useFadeInUp();
  const reanimatedStyleInputs = useFadeInUp(500, 350);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, reanimatedStyleLogo]}>
        <Logo />
        <View style={styles.pageTitle}>
          <Texto style={styles.title}>Bytebank</Texto>
          <Texto style={styles.subtitle}>Você no controle do seu futuro</Texto>
        </View>
      </Animated.View>

      <Animated.View style={[styles.inputContainer, reanimatedStyleInputs]}>
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
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Botao onPress={() => {}}>Entrar</Botao>
        <Botao onPress={criarConta} secundario>
          Criar conta
        </Botao>
      </Animated.View>
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
  logoContainer: {
    alignItems: "center",
    gap: spacing.xl,
  },
  pageTitle: {
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
