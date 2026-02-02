import { dbPromise } from './database';

  /* ===== EMPRESAS ===== */
export const getEmpresas = async () => {
  const db = await dbPromise;
  const result = await db.getAllAsync(
    'SELECT * FROM empresas'
  );
  return result;
};

