import { dbPromise } from './database';

export const initDB = async () => {
  const db = await dbPromise;

  // CREACIÓN DE TABLAS
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS empresas (
      id_empresa INTEGER PRIMARY KEY,
      nombre TEXT NOT NULL,
      color TEXT NOT NULL,
      dominio TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS usuarios (
      id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      correo TEXT NOT NULL,
      contrasena TEXT NOT NULL,
      id_empresa INTEGER NOT NULL,
      foto TEXT
    );
  `);

  // DATOS DE EMPRESAS
  await db.execAsync(`
    INSERT OR IGNORE INTO empresas (id_empresa, nombre, color, dominio) VALUES
      (1, 'Empresa A', '#1E88E5','empresaA.com'),
      (2, 'Empresa B', '#43A047','empresaB.com'),
      (3, 'Empresa C', '#E53935','empresaC.com');
  `);

  // DATOS DE USUARIOS
  await db.execAsync(`
      INSERT OR IGNORE INTO usuarios (id_usuario, nombre, correo, contrasena, id_empresa) VALUES
    (1, 'Juan Pérez', 'juan@empresaA.com', '123456', 1),
    (4, 'María García', 'maria@empresaA.com', '123456', 1),
    (2, 'Ana López', 'ana@empresaB.com', '123456', 2),
    (5, 'Luis Fernández', 'luis@empresaB.com', '123456', 2),
    (3, 'Carlos Ruiz', 'carlos@empresaC.com', '123456', 3),
    (6, 'Sofía Martínez', 'sofia@empresaC.com', '123456', 3);
`);

  console.log('✅ BD creada con empresas y usuarios');
};
