import { useCallback } from "react";

export function useValidators() {
  const campoObrigatorio = "Campo obrigatório";

  const validarEmail = useCallback((valor, obrigatorio = true) => {
    const email = valor?.trim() ?? "";

    if (obrigatorio && !email) {
      return campoObrigatorio;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Email inválido";
    }

    return "";
  }, []);

  const validarTexto = useCallback((valor, min = 1, obrigatorio = true) => {
    const texto = valor?.trim() ?? "";

    if (obrigatorio && !texto) {
      return campoObrigatorio;
    }

    if (texto && texto.length < min) {
      return `Deve ter no mínimo ${min} caracteres`;
    }

    return "";
  }, []);

  return {
    validarEmail,
    validarTexto,
  };
}
