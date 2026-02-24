import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { colors } from "../styles/theme";

export default function AuthLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="register"
        options={{
          headerTitle: "",
          headerBackground: () => (
            <View style={{ backgroundColor: colors.background, flex: 1 }} />
          ),
          headerShadowVisible: false,
          headerTransparent: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                marginLeft: 16,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
              >
                <Ionicons name="arrow-back" size={24} color="#000" />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
