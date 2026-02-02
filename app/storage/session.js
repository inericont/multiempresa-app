import AsyncStorage from '@react-native-async-storage/async-storage';

const SESSION_KEY = 'USER_SESSION';

export const saveSession = async (usuario) => {
  await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(usuario));
};

export const getSession = async () => {
  const session = await AsyncStorage.getItem(SESSION_KEY);
  return session ? JSON.parse(session) : null;
};

export const clearSession = async () => {
  await AsyncStorage.removeItem(SESSION_KEY);
};

export const updateSession = async (usuario) => {
  await AsyncStorage.setItem('USER_SESSION', JSON.stringify(usuario));
};
