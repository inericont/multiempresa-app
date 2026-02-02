import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'empresa_actual';

export const saveEmpresa = async (empresa) => {
  await AsyncStorage.setItem(KEY, JSON.stringify(empresa));
};

export const getEmpresa = async () => {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : null;
};

export const clearEmpresa = async () => {
  await AsyncStorage.removeItem(KEY);
};
