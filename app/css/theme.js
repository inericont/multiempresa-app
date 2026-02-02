import { useEffect, useState } from "react";
import { getEmpresa } from "../storage/companysession";

/* ===== TEMA EN BASE A EMPRESA ===== */

export const useCompanyTheme = () => {
  const [primaryColor, setPrimaryColor] = useState("#4F46E5");

  useEffect(() => {
    const loadColor = async () => {
      const empresa = await getEmpresa();
      if (empresa?.color) {
        setPrimaryColor(empresa.color);
      }
    };
    loadColor();
  }, []);

  return { primaryColor };
};
