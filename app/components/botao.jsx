import { StyleSheet, TouchableOpacity } from "react-native";
import { colors, radius, shadow, spacing } from "../styles/theme";
import Texto from "./texto";

const Botao = ({ children, onPress, secundario, style }) => {
  return (
    <TouchableOpacity
      style={[
        style,
        styles.base,
        secundario ? styles.secundario : styles.primario,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Texto style={secundario ? styles.textSecundario : styles.textPrimario}>
        {children}
      </Texto>
    </TouchableOpacity>
  );
};

export default Botao;

const styles = StyleSheet.create({
  base: {
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    justifyContent: "center",
    alignItems: "center",
  },
  primario: {
    backgroundColor: colors.primary,
    ...shadow,
  },
  secundario: {
    backgroundColor: colors.background,
    borderWidth: 0,
  },
  textPrimario: {
    color: colors.white,
    fontWeight: "bold",
  },
  textSecundario: {
    color: colors.textSecondary,
    fontWeight: "bold",
  },
});
