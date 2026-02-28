import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import Button from "../../components/button";
import Input from "../../components/input";
import Typography from "../../components/typography";
import { useFadeInUp } from "../../hooks/useFadeInUp";
import { useForm } from "../../hooks/useForm";
import { useValidators } from "../../hooks/useValidators";
import { colors, spacing, typography } from "../../styles/theme";

const Register = () => {
  const reanimatedStyle = useFadeInUp();

  const { validateEmail, validateText } = useValidators();

  const validateRegister = () => {
    const errors = {};

    const nameError = validateText(values.name, 3);
    if (nameError) errors.name = nameError;

    const emailError = validateEmail(values.email);
    if (emailError) errors.email = emailError;

    const passwordError = validateText(values.password, 6);
    if (passwordError) errors.password = passwordError;

    return errors;
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    { name: "", email: "", password: "" },
    validateRegister,
  );

  return (
    <View style={styles.container}>
      <View style={styles.pageTitle}>
        <Typography style={styles.title}>Criar conta</Typography>
        <Typography style={styles.subtitle}>
          Comece a organizar sua vida financeira {"\n"}hoje mesmo!
        </Typography>
      </View>

      <Animated.View style={[styles.animatedContainer, reanimatedStyle]}>
        <View style={styles.inputContainer}>
          <Input
            value={values.name}
            onChangeText={(text) => handleChange("name", text)}
            label="Nome completo"
            placeholder="Seu nome"
            icon={<Ionicons name="person-outline" size={20} color="#94A3B8" />}
            error={!!errors.name}
            errorMsg={errors.name}
          />
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
        </View>
        <Button
          onPress={() => handleSubmit()}
          style={{ marginTop: spacing.md }}
        >
          Cadastrar
        </Button>
      </Animated.View>
    </View>
  );
};

export default Register;

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
  animatedContainer: {
    flex: 1,
    gap: spacing.lg,
  },
  inputContainer: {
    width: "100%",
    gap: spacing.lg,
    marginTop: spacing.md,
  },
});
