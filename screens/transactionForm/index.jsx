import { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import Animated, { SlideInDown } from "react-native-reanimated";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import Button from "../../components/button";
import Input from "../../components/input";
import Typography from "../../components/typography";
import { colors, spacing, typography } from "../../styles/theme";
import { useForm } from "../../hooks/useForm";
import { useValidators } from "../../hooks/useValidators";
import TransactionTypeSelector from "./components/TransactionTypeSelector";
import TransactionValueInput from "./components/TransactionValueInput";
import TransactionCategorySelector from "./components/TransactionCategorySelector";
import TransactionDateInput from "./components/TransactionDateInput";
import ReceiptAttachment from "./components/ReceiptAttachment";

export default function TransactionFormScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const isEditing = !!id;

  const { validateText, validateValue } = useValidators();

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showCategoryPicker, setShowCategoryPicker] = useState(false);

  const initialValues = {
    type: "expense",
    value: "",
    category: "",
    description: "",
    date: new Date().toLocaleDateString("pt-BR"),
  };

  const validateFormData = (values) => {
    const errors = {};

    const valueError = validateValue(values.value, true);
    if (valueError) {
      errors.value = valueError;
    }

    if (!values.category) {
      errors.category = "Categoria obrigatória";
    }

    const descriptionError = validateText(values.description, 1, true);
    if (descriptionError) {
      errors.description = descriptionError;
    }

    if (!values.date) {
      errors.date = "Data obrigatória";
    }

    return errors;
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialValues,
    validateFormData,
  );

  const handleClose = () => {
    router.back();
  };

  const handleSaveTransaction = (validValues) => {
    const transactionData = {
      id: id || Math.random().toString(36).substring(7),
      type: validValues.type,
      value: parseFloat(validValues.value),
      category: validValues.category,
      description: validValues.description,
      date: validValues.date,
    };

    console.log("Transação salva:", transactionData);

    Alert.alert("Sucesso", "Transação salva com sucesso!", [
      {
        text: "OK",
        onPress: () => {
          router.back();
        },
      },
    ]);
  };

  const handleTypeChange = (newType) => {
    handleChange("type", newType);
    if (newType === "income") {
      handleChange("category", "income");
    } else {
      handleChange("category", "");
    }
    setShowCategoryPicker(false);
  };

  const handleDateSelect = (event, date) => {
    setShowDatePicker(false);

    if (!date || event.type === "dismissed") {
      handleChange("date", new Date().toISOString().split("T")[0]);
      return;
    }

    const formatted =
      String(date.getDate()).padStart(2, "0") +
      "/" +
      String(date.getMonth() + 1).padStart(2, "0") +
      "/" +
      date.getFullYear();

    handleChange("date", formatted);
  };

  const handleCategoryChange = (newCategory) => {
    handleChange("category", newCategory);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Animated.View
          style={styles.header}
          entering={SlideInDown.duration(400).springify()}
        >
          <TouchableOpacity onPress={handleClose}>
            <Ionicons name="close" size={24} color={colors.textSecondary} />
          </TouchableOpacity>
          <Typography weight="bold" style={styles.headerTitle}>
            {isEditing ? "Editar transação" : "Nova transação"}
          </Typography>
          <View style={styles.headerSpacer} />
        </Animated.View>

        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <Animated.View
            entering={SlideInDown.delay(100).duration(400).springify()}
          >
            <TransactionTypeSelector
              type={values.type}
              onTypeChange={handleTypeChange}
            />

            <TransactionValueInput
              type={values.type}
              value={values.value}
              onChangeText={(text) => handleChange("value", text)}
              error={!!errors.value}
              errorMsg={errors.value}
            />

            <View style={styles.formFields}>
              <TransactionCategorySelector
                type={values.type}
                category={values.category}
                onCategoryChange={handleCategoryChange}
                showCategoryPicker={showCategoryPicker}
                onShowPickerChange={setShowCategoryPicker}
                error={!!errors.category}
                errorMsg={errors.category}
              />

              <Input
                label="Descrição"
                placeholder="Ex: Compras no mercado"
                value={values.description}
                onChangeText={(text) => handleChange("description", text)}
                error={!!errors.description}
                errorMsg={errors.description}
                icon={
                  <Ionicons
                    name="document-text-outline"
                    size={20}
                    color="#94A3B8"
                  />
                }
              />

              <TransactionDateInput
                date={values.date}
                onDateChange={handleChange}
                onDateSelect={handleDateSelect}
                showDatePicker={showDatePicker}
                onShowDatePickerChange={setShowDatePicker}
                error={!!errors.date}
                errorMsg={errors.date}
              />

              <ReceiptAttachment />
            </View>
          </Animated.View>
        </ScrollView>

        <Animated.View
          style={styles.footer}
          entering={SlideInDown.delay(200).duration(400).springify()}
        >
          <Button
            onPress={() => handleSubmit(handleSaveTransaction)}
            style={styles.submitButton}
          >
            Salvar transação
          </Button>
          <Button secondary onPress={handleClose} style={styles.cancelButton}>
            Cancelar
          </Button>
        </Animated.View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: typography.size.lg,
  },
  headerSpacer: {
    width: 24,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xl,
  },
  formFields: {
    gap: spacing.lg,
  },
  footer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
    gap: spacing.md,
  },
  submitButton: {
    marginBottom: spacing.sm,
  },
  cancelButton: {
    marginBottom: spacing.sm,
  },
});
