import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Text, View } from "react-native";
import { getEmpresa } from "../storage/companysession";
import { getSession } from "../storage/session";
import { createStyles } from "../css/stylestheme";
import { useCompanyTheme } from "../css/theme";

type Usuario = {
  nombre: string;
  correo: string;
  id_empresa: number;
};

export default function Home() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [empresa, setEmpresa] = useState<null | {
    nombre: string;
    color: string;
    dominio: string;
  }>(null);

  ////COLOR EMPRESA
  const { primaryColor } = useCompanyTheme();
  const styles = createStyles(primaryColor);

  useFocusEffect(
    useCallback(() => {
      const loadSession = async () => {
        const session = await getSession();
        setUsuario(session);

        const e = await getEmpresa();
        setEmpresa(e);
      };
      loadSession();
    }, []),
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { textAlign: "center" }]}>¡Bienvenid@!</Text>

      <View
        style={[
          styles.card,
          { borderLeftWidth: 6, borderLeftColor: primaryColor },
        ]}
      >
        <Text style={[styles.label, { color: primaryColor }]}>Nombre</Text>
        <Text style={styles.value}>{usuario?.nombre}</Text>

        <Text style={[styles.label, { color: primaryColor }]}>Correo</Text>
        <Text style={styles.value}>{usuario?.correo}</Text>

        <Text style={[styles.label, { color: primaryColor }]}>Empresa</Text>
        <Text style={styles.value}>
          {empresa ? empresa.nombre : `Empresa ${usuario?.id_empresa}`}
        </Text>
      </View>
    </View>
  );
}
