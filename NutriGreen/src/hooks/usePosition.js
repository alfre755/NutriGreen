import { useMemo } from "react";
import { matchRoutes, useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const routes = [
  { path: "/" },
  { path: "/MenuCliente" },
  { path: "/Administracion" },
  { path: "/Login" },
  { path: "/Planes" },
  { path: "/Tienda" },
  { path: "/Contactanos" },
  { path: "/MiPlan" },
  { path: "/Tienda/:id" },
];

function usePosition() {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Encuentra la ruta que coincide
  const matchedRoute = useMemo(() => {
    const matches = matchRoutes(routes, location);
    return matches?.[0]?.route || null;
  }, [location]);

  // Convierte los parámetros de consulta en un objeto
  const queryParams = useMemo(() => {
    const params = {};
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    return params;
  }, [searchParams]);

  return {
    currentPath: location.pathname, // Ruta actual
    matchedRoute, // Ruta coincidente (si existe)
    queryParams, // Parámetros de consulta
  };
}

export default usePosition;
