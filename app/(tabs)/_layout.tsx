import { Tabs } from "expo-router";
import React from "react";
import { HapticTab } from "@/components/haptic-tab";

import { Ionicons } from "@expo/vector-icons";
import { useCompanyTheme } from "../css/theme";

export default function TabLayout() {
  const { primaryColor } = useCompanyTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,

        // COLOR DE LA EMPRESA
        tabBarStyle: {
          backgroundColor: primaryColor,
        },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "rgba(255,255,255,0.7)",
      }}
    >
      {/* INICIO*/}
      <Tabs.Screen
        name="home"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size ?? 24} color={color} />
          ),
        }}
      />

      {/* PERFIL */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size ?? 24} color={color} />
          ),
        }}
      />

      {/* CONFIGUARCIÓN */}
      <Tabs.Screen
        name="settings"
        options={{
          title: "Configuración",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size ?? 24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
