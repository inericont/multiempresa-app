import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./css/styles";
import { getEmpresas } from "./database/companies";
import { saveEmpresa } from "./storage/companysession";

type Empresa = {
  id_empresa: number;
  nombre: string;
  color: string;
};

export default function HomeScreen() {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const router = useRouter();

  /* ===== EMPRESAS ===== */
  useEffect(() => {
    const load = async () => {
      const data = await getEmpresas();
      setEmpresas(data);
    };
    load();
  }, []);

  const seleccionarEmpresa = async (empresa: Empresa) => {
    await saveEmpresa(empresa);
    router.replace("/login");
  };

  return (
    <View style={[styles.container, { justifyContent: "center" }]}>
      <Text style={styles.title}>Selecciona una empresa</Text>

      <View style={{ marginTop: 20 }}>
        {empresas.map((empresa) => (
          <TouchableOpacity
            key={empresa.id_empresa}
            style={[styles.button, { backgroundColor: empresa.color }]}
            onPress={() => seleccionarEmpresa(empresa)}
          >
            <Text style={styles.buttonText}>{empresa.nombre}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
