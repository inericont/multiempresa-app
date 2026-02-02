import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { getEmpresa } from "../storage/companysession";
import { clearSession } from "../storage/session";

import Toast from "react-native-toast-message";
import { createStyles } from "../css/stylestheme";
import { useCompanyTheme } from "../css/theme";

export default function Settings() {
  const { primaryColor } = useCompanyTheme();
  const styles = createStyles(primaryColor);

  const [empresa, setEmpresa] = useState<{
    nombre: string;
    dominio: string;
  } | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const e = await getEmpresa();
      if (e) setEmpresa({ nombre: e.nombre, dominio: e.dominio });
    };
    loadData();
  }, []);

  let logoutConfirmed = false;
  const handleLogout = async () => {
    if (!logoutConfirmed) {
      logoutConfirmed = true;

      Toast.show({
        type: "companyToast",
        text1: "⚠️ Confirmar cierre de sesión",
        text2: "Presiona nuevamente para cerrar sesión",
        props: { bgColor: primaryColor },
        visibilityTime: 3000,
      });

      setTimeout(() => (logoutConfirmed = false), 3000);
      return;
    }

    await clearSession();
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { textAlign: "center" }]}>Configuración</Text>

      {/* Empresa */}
      {empresa && (
        <View style={{ marginVertical: 20 }}>
          <Text style={styles.label}>{empresa.nombre}</Text>
          <Text style={{ color: "#666" }}>@{empresa.dominio}</Text>
        </View>
      )}

      {/* Cerrar sesión */}
      <TouchableOpacity style={styles.dangerButton} onPress={handleLogout}>
        <Text style={styles.dangerText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}
