import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";
import { actualizarUsuario } from "../database/users";
import { getSession, updateSession } from "../storage/session";
import { createStyles } from "../css/stylestheme";
import { useCompanyTheme } from "../css/theme";

import { getEmpresa } from "../storage/companysession";

type Usuario = {
  id_usuario: number;
  nombre: string;
  correo: string;
  id_empresa: number;
  foto?: string;
};

type Empresa = {
  id_empresa: number;
  nombre: string;
  color: string;
  dominio: string;
};

export default function Profile() {
  const { primaryColor } = useCompanyTheme();
  const styles = createStyles(primaryColor);

  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [empresa, setEmpresa] = useState<Empresa | null>(null);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  // ⚡ Cargar usuario y empresa al inicio
  useEffect(() => {
    const loadData = async () => {
      const session = await getSession();
      if (session) {
        setUsuario(session);
        setNombre(session.nombre);

        // Solo la parte antes del @
        const correoSolo = session.correo.split("@")[0];
        setCorreo(correoSolo);
      }

      const e = await getEmpresa();
      setEmpresa(e);
    };

    loadData();
  }, []);

  // 📸 Seleccionar imagen
  const handlePickImage = async () => {
    if (!usuario) return;

    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Toast.show({
        type: "companyToast",
        text1: "📢 ¡Cuidado!",
        text2: "Se necesita permiso para acceder a las fotos",
        props: { bgColor: primaryColor },
      });
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      const updatedUser = { ...usuario, foto: uri };

      await actualizarUsuario(
        usuario.id_usuario,
        usuario.nombre,
        usuario.correo,
        uri,
      );
      await updateSession(updatedUser);
      setUsuario(updatedUser);
    }
  };

  // GUARDAR CAMBIOS
  const handleSave = async () => {
    if (!usuario || !empresa) return;

    const correoCompleto = `${correo}@${empresa.dominio}`;
    const updatedUser = { ...usuario, nombre, correo: correoCompleto };

    await actualizarUsuario(
      usuario.id_usuario,
      nombre,
      correoCompleto,
      usuario.foto,
    );
    await updateSession(updatedUser);
    setUsuario(updatedUser);

    Toast.show({
      type: "companyToast",
      text1: "✅ ¡Actualizado!",
      text2: "Cambios guardados correctamente",
      props: { bgColor: primaryColor },
    });
  };

  if (!usuario || !empresa) return null;

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { textAlign: "center" }]}>Mi perfil</Text>

      <TouchableOpacity
        onPress={handlePickImage}
        style={{ alignSelf: "center" }}
      >
        {usuario.foto ? (
          <Image source={{ uri: usuario.foto }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder} />
        )}

        {/* EDITAR */}
        <View style={[styles.editIcon, { backgroundColor: primaryColor }]}>
          <Ionicons name="pencil" size={16} color="#fff" />
        </View>
      </TouchableOpacity>

      {/* NOMBRE */}
      <Text style={styles.label}>Nombre</Text>
      <TextInput style={styles.input} value={nombre} onChangeText={setNombre} />

      {/* CORREO */}
      <Text style={styles.label}>Correo</Text>
      {empresa && (
        <TextInput
          style={styles.input}
          value={`${correo}@${empresa.dominio}`}
          onChangeText={(text) => {
            // Tomamos solo la parte antes del @
            const usuarioInput = text.split("@")[0];

            // Regex: solo letras y números
            const regex = /^[a-zA-Z0-9]*$/;

            if (regex.test(usuarioInput)) {
              // Si es válido, actualizamos
              setCorreo(usuarioInput);
            } else {
              // Si no es válido, mostramos Toast
              Toast.show({
                type: "companyToast",
                text1: "⚠️ Caracter inválido",
                text2: "Solo se permiten letras y números",
                props: { bgColor: primaryColor },
              });
            }
          }}
          autoCapitalize="none"
          keyboardType="email-address"
          selection={{ start: correo.length, end: correo.length }}
          onSelectionChange={(e) => {
            const pos = e.nativeEvent.selection.start;
            if (pos > correo.length) {
              // Evitar que el cursor pase al dominio
              e.nativeEvent.selection.start = correo.length;
              e.nativeEvent.selection.end = correo.length;
            }
          }}
        />
      )}

      {/* EMPRESA */}
      <Text style={styles.label}>Empresa</Text>
      <TextInput style={styles.input} value={empresa.nombre} editable={false} />

      {/* GUARDAR */}
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar cambios</Text>
      </TouchableOpacity>
    </View>
  );
}
