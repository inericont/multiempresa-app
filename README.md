# Multiempresa App

Esta es una aplicación de React Native usando Expo para un sistema **multiempresa**.  
Permite que los usuarios inicien sesión según la empresa y vean la interfaz personalizada con el tema de cada compañía.

---

## Requisitos

- Node.js >= 18  
- npm o yarn  
- Expo CLI (`npm install -g expo-cli`)  

---

## Cómo ejecutar el proyecto

1. Extraer el ZIP del proyecto o clonar el repositorio.

Si no sabes cómo clonar este repositorio, puedes seguir las instrucciones oficiales de GitHub:

[Guía oficial para clonar un repositorio](https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository)

3. Entrar a la carpeta del proyecto:

```bash
cd multiempresa-app
```

3. Instalar dependencias:

```bash
npm install

```

4. Iniciar la aplicación:

```bash
npx expo start
```

Esto abrirá el Metro Bundler en tu navegador. Desde ahí puedes:
- Abrir en un emulador Android/iOS  
- Escanear el código QR con tu dispositivo para ver la app (recomendado)

---

## Credenciales de prueba

### Empresas y usuarios

| Empresa    | Usuario       | Correo                | Contraseña |
|-----------|---------------|----------------------|------------|
| Empresa A | Juan Pérez    | juan@empresaA.com    | 123456     |
| Empresa A | María García  | maria@empresaA.com   | 123456     |
| Empresa B | Ana López     | ana@empresaB.com     | 123456     |
| Empresa B | Luis Fernández| luis@empresaB.com    | 123456     |
| Empresa C | Carlos Ruiz   | carlos@empresaC.com  | 123456     |
| Empresa C | Sofía Martínez| sofia@empresaC.com   | 123456     |

> Nota: Estos usuarios se crean automáticamente al inicializar la app.

---

## Estructura del proyecto

- `app/` → Código principal de la app  (css, database, storage, (tabs))
- `assets/` → Imágenes, iconos, fuentes (default)  
- `components/` → Componentes reutilizables (default)  
- `hooks/` → Custom hooks (default)  
- `constants/` → Constantes globales (default)   
- `scripts/` → Scripts auxiliares  (default)  
- `package.json` → Dependencias y scripts  
- `package-lock.json` → Lockfile de dependencias  
- `app.json` → Configuración de Expo  
- `tsconfig.json` → Configuración de TypeScript  
- `README.md` → Este archivo  


---

## Notas importantes
 
- Para probar la app, simplemente usa las credenciales de prueba listadas arriba.  
- Se recomienda abrir el proyecto en Expo Go en dispositivo físico o emulador para probar la funcionalidad completa.

