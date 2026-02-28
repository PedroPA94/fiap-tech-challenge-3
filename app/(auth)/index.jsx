import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import Button from "../../components/button";
import Input from "../../components/input";
import Logo from "../../components/logo";
import Typography from "../../components/typography";
import { useAuth } from "../../contexts/AuthContext";
import { useFadeInUp } from "../../hooks/useFadeInUp";
import { useForm } from "../../hooks/useForm";
import { useValidators } from "../../hooks/useValidators";
import { colors, spacing, typography } from "../../styles/theme";

const Login = () => {
  const router = useRouter();

  const register = () => {
    router.navigate("/register");
  };

  const reanimatedStyleLogo = useFadeInUp();
  const reanimatedStyleInputs = useFadeInUp(500, 350);

  const { validateEmail, validateText } = useValidators();

  const validateLogin = () => {
    const errors = {};

    const emailError = validateEmail(values.email);
    if (emailError) errors.email = emailError;

    const passwordError = validateText(values.password, 6);
    if (passwordError) errors.password = passwordError;

    return errors;
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    { email: "", password: "" },
    validateLogin,
  );

  const { setLoggedIn } = useAuth();

  const login = () => {
    console.log("Login válido");
    setLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, reanimatedStyleLogo]}>
        <Logo />
        <View style={styles.pageTitle}>
          <Typography weight="bold" style={styles.title}>
            Bytebank
          </Typography>
          <Typography style={styles.subtitle}>
            Você no controle do seu futuro
          </Typography>
        </View>
      </Animated.View>

      <Animated.View style={[styles.inputContainer, reanimatedStyleInputs]}>
        <Input
          value={values.email}
          onChangeText={(text) => handleChange("email", text)}
          label="Email"
          placeholder="exemplo@email.com"
          icon={<Ionicons name="mail-outline" size={20} color="#94A3B8" />}
          keyboardType="email-address"
          autoCapitalize="none"
          error={!!errors.email}
          errorMsg={errors.email}
          textContentType="email"
        />
        <Input
          value={values.password}
          onChangeText={(text) => handleChange("password", text)}
          label="Senha"
          placeholder="••••••••"
          icon={
            <Ionicons name="lock-closed-outline" size={20} color="#94A3B8" />
          }
          autoCapitalize="none"
          error={!!errors.password}
          errorMsg={errors.password}
          textContentType="password"
          secureTextEntry
        />
        <Button onPress={() => handleSubmit(login)}>Entrar</Button>
        <Button onPress={register} secondary>
          Criar conta
        </Button>
      </Animated.View>
    </View>
  );
};

export default Login;

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
