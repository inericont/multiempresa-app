import { dbPromise } from './database';

// LOGIN POR EMPRESA
export const loginUsuario = (correo, contrasena, id_empresa) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM usuarios 
         WHERE correo = ? AND contrasena = ? AND id_empresa = ?;`,
        [correo, contrasena, id_empresa],
        (_, { rows }) => resolve(rows._array[0]),
        (_, error) => reject(error)
      );
    });
  });
};

// ACTUALIZAR PERFIL
export const actualizarUsuario = async (id_usuario, nombre, correo, foto) => {
  const db = await dbPromise;

  await db.runAsync(
    `UPDATE usuarios 
     SET nombre = ?, correo = ?, foto = ?
     WHERE id_usuario = ?`,
    [nombre, correo, foto, id_usuario]
  );
};

// VALIDAR USUARIO
export const validarUsuario = async (correo, contrasena) => {
  const db = await dbPromise;

  const result = await db.getAllAsync(
    `SELECT * FROM usuarios WHERE correo = ?`,
    [correo]
  );

  if (result.length === 0) {
    return { error: 'USUARIO_NO_EXISTE' };
  }

  const usuario = result[0];

  if (usuario.contrasena !== contrasena) {
    return { error: 'CONTRASENA_INCORRECTA' };
  }

  return { usuario };
};
