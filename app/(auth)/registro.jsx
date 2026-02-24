import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import Botao from "../components/botao";
import Input from "../components/input";
import Texto from "../components/texto";
import { useFadeInUp } from "../hooks/useFadeInUp";
import { useForm } from "../hooks/useForm";
import { useValidators } from "../hooks/useValidators";
import { colors, spacing, typography } from "../styles/theme";

const Registro = () => {
  const reanimatedStyle = useFadeInUp();

  const { validarEmail, validarTexto } = useValidators();

  const validarRegistro = () => {
    const errors = {};

    const erroNome = validarTexto(values.nome, 3);
    if (erroNome) errors.nome = erroNome;

    const erroEmail = validarEmail(values.email);
    if (erroEmail) errors.email = erroEmail;

    const erroSenha = validarTexto(values.senha, 6);
    if (erroSenha) errors.senha = erroSenha;

    return errors;
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    { email: "", senha: "" },
    validarRegistro,
  );

  return (
    <View style={styles.container}>
      <View style={styles.pageTitle}>
        <Texto style={styles.title}>Criar conta</Texto>
        <Texto style={styles.subtitle}>
          Comece a organizar sua vida financeira {"\n"}hoje mesmo!
        </Texto>
      </View>

      <Animated.View style={[styles.animatedContainer, reanimatedStyle]}>
        <View style={styles.inputContainer}>
          <Input
            value={values.nome}
            onChangeText={(text) => handleChange("nome", text)}
            label="Nome completo"
            placeholder="Seu nome"
            icon={<Ionicons name="person-outline" size={20} color="#94A3B8" />}
            erro={!!errors.nome}
            msgErro={errors.nome}
          />
          <Input
            value={values.email}
            onChangeText={(text) => handleChange("email", text)}
            label="Email"
            placeholder="exemplo@email.com"
            icon={<Ionicons name="mail-outline" size={20} color="#94A3B8" />}
            keyboardType="email-address"
            autoCapitalize="none"
            erro={!!errors.email}
            msgErro={errors.email}
            textContentType="email"
          />
          <Input
            value={values.senha}
            onChangeText={(text) => handleChange("senha", text)}
            label="Senha"
            placeholder="••••••••"
            icon={
              <Ionicons name="lock-closed-outline" size={20} color="#94A3B8" />
            }
            autoCapitalize="none"
            erro={!!errors.senha}
            msgErro={errors.senha}
            textContentType="password"
            secureTextEntry
          />
        </View>
        <Botao onPress={() => handleSubmit()} style={{ marginTop: spacing.md }}>
          Cadastrar
        </Botao>
      </Animated.View>
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
