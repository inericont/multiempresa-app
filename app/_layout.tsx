import { useColorScheme } from "@/hooks/use-color-scheme";
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useEffect } from "react";
import "react-native-reanimated";
import Toast from "react-native-toast-message";
import { toastConfig } from "./storage/companytoast";
import { initDB } from "./database/schema";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    initDB();
  }, []);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="index">
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack>
      <Toast config={toastConfig} />
    </ThemeProvider>
  );
}
