import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";
import { validarUsuario } from "./database/users";
import { getEmpresa } from "./storage/companysession"; // <- leer empresa
import { saveSession } from "./storage/session";
import { createStyles } from "./css/stylestheme";
import { useCompanyTheme } from "./css/theme";

export default function LoginScreen() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [empresa, setEmpresa] = useState<any>(null);

  const router = useRouter();

  // Cargar empresa seleccionada
  useEffect(() => {
    const loadEmpresa = async () => {
      const e = await getEmpresa();
      setEmpresa(e);
    };
    loadEmpresa();
  }, []);

  /* ===== ALERTA CAMPOS ===== */
  const { primaryColor } = useCompanyTheme();
  const styles = createStyles(empresa?.color || primaryColor);

  const handleLogin = async () => {
    if (!usuario || !contrasena) {
      Toast.show({
        type: "companyToast",
        text1: "⚠️ Campos requeridos",
        text2: "Ingresa usuario y contraseña",
        props: { bgColor: empresa?.color || primaryColor },
      });
      return;
    }

    if (!empresa) return;

    /* ===== ALERTAS GENERALES ===== */
    const correoCompleto = `${usuario}@${empresa.dominio}`;

    const result = await validarUsuario(correoCompleto, contrasena);

    if (result.error === "USUARIO_NO_EXISTE") {
      Toast.show({
        type: "companyToast",
        text1: "⚠️ ¡Error!",
        text2: "Correo no registrado",
        props: { bgColor: empresa.color },
      });
      return;
    }

    if (result.error === "CONTRASENA_INCORRECTA") {
      Toast.show({
        type: "companyToast",
        text1: "⚠️ ¡Error!",
        text2: "Contraseña incorrecta",
        props: { bgColor: empresa.color },
      });
      return;
    }

    Toast.show({
      type: "companyToast",
      text1: "👋 ¡Bienvenid@!",
      text2: result.usuario.nombre,
      props: { bgColor: empresa.color },
    });

    await saveSession(result.usuario);
    router.replace("/(tabs)/home");
  };

  if (!empresa) {
    return <Text>Cargando empresa...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de sesión</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#9E9E9E" />
        <TextInput
          placeholder="Correo"
          placeholderTextColor="#9E9E9E"
          value={usuario}
          onChangeText={setUsuario}
          autoCapitalize="none"
          style={{ flex: 1 }}
        />
        <Text style={{ color: "black", marginRight: 150 }}>
          @{empresa.dominio}
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#9E9E9E" />
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#9E9E9E"
          secureTextEntry
          value={contrasena}
          onChangeText={setContrasena}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Aceptar</Text>
      </TouchableOpacity>

      <Text style={styles.version}>Versión 1.0</Text>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => router.replace("/")}
        >
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
