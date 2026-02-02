import { StyleSheet } from 'react-native';

export const createStyles = (primaryColor) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      padding: 30,
      justifyContent: "center",
    },

    title: {
      fontSize: 22,
      fontWeight: '600',
      textAlign: 'center',
      justifyContent: 'center',
      marginBottom: 25,
    },

    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#D1D5DB',
      borderRadius: 8,
      paddingHorizontal: 12,
      marginBottom: 12,
    },

    input: {
      flex: 1,
      padding: 10,
    },

    button: {
      backgroundColor: primaryColor,
      padding: 14,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 10,
    },

    buttonText: {
      color: '#fff',
      fontWeight: '600',
    },

    dangerButton: {
      backgroundColor: primaryColor,
      padding: 14,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 30,
    },

    dangerText: {
      color: '#fff',
      fontWeight: '600',
    },
    version: {
    textAlign: 'center',
    marginTop: 30,
    color: '#9E9E9E',
    fontSize: 12,
  },

  floatingButton: {
  position: 'absolute',
  bottom: 20,
  right: 20,
  width: 52,
  height: 52,
  borderRadius: 26,
  backgroundColor: primaryColor,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 6,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: 4,
},

////HOMEEEEE///////

  card: {
  backgroundColor: '#FFFFFF',
  padding: 20,
  borderRadius: 14,
  width: '100%',
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowRadius: 8,
  elevation: 3,
},

label: {
  fontSize: 14,
  color: primaryColor,
  marginTop: 12,
},

value: {
  fontSize: 16,
  fontWeight: '600',
  color: '#212121',
},

////PERFIL///////

avatar: {
  width: 100,
  height: 100,
  borderRadius: 50,
  alignSelf: "center",
  marginBottom: 20,
},

avatarPlaceholder: {
  width: 100,
  height: 100,
  borderRadius: 50,
  backgroundColor: "#E5E7EB",
  alignSelf: "center",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 20,
},

editIcon: {
  position: "absolute",
  bottom: 4,
  right: 4,
  width: 32,
  height: 32,
  borderRadius: 16,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 2,
  borderColor: "#fff",
},

input: {
  borderWidth: 1,
  borderColor:  '#E5E7EB',
  borderRadius: 12,
  padding: 14,
  marginTop: 6,
  fontSize: 16,
},

button: {
  backgroundColor: primaryColor,
  padding: 14,
  borderRadius: 14,
  alignItems: 'center',
  marginTop: 24,
},

buttonText: {
  color: '#FFFFFF',
  fontWeight: '600',
  fontSize: 16,
},

////CONFIGURACION///////

row: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 20,
},

dangerButton: {
  backgroundColor: '#c20606',
  padding: 14,
  borderRadius: 14,
  alignItems: 'center',
  marginTop: 40,
},

dangerText: {
  color: '#FFFFFF',
  fontWeight: '600',
  fontSize: 16,
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
  color: primaryColor,
},

  ////LOGINNN///////

  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    padding: 30,
    paddingTop: 100,
  },

  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 30,
    color: primaryColor,
    
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 15,
  },

  button: {
    backgroundColor: primaryColor,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },

  link: {
    textAlign: 'center',
    marginTop: 20,
    color: '#1E88E5',
    fontWeight: '500',
  },

  version: {
    textAlign: 'center',
    marginTop: 30,
    color: '#9E9E9E',
    fontSize: 12,
  },

  });

  
