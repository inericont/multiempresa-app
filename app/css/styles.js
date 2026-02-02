import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  /* ===== BASE ===== */
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF', // fondo blanco
    justifyContent: 'center',
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 25,
  },

  /* ===== INPUTS (LOGIN / PROFILE) ===== */
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 14,
    backgroundColor: '#fff',
  },

  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 15,
  },

  /* ===== BOTONES PRINCIPALES ===== */
  button: {
    paddingVertical: 16,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  /* ===== TARJETAS (HOME) ===== */
  card: {
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 12,
    color: '#374151',
  },

  value: {
    fontSize: 15,
    marginTop: 4,
    color: '#111827',
  },

  /* ===== SETTINGS ===== */
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },

  dangerButton: {
    marginTop: 30,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  dangerText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  /* ===== PROFILE ===== */
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E5E7EB',
    alignSelf: 'center',
    marginBottom: 25,
  },

  /* ===== FOOTER ===== */
  version: {
    textAlign: 'center',
    marginTop: 30,
    color: '#9E9E9E',
    fontSize: 12,
  },
});
