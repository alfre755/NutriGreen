import React, { createContext, useCallback, useContext } from "react";

/**
 * @typedef {Object} ContextDataObject
 * @property {()=>Promise<Object|null>} listarCategorias
 * @property {(Object)=>Promise<Object|null>} crearCategoria
 * @property {(Object)=>Promise<Object|null>} modificarCategoria
 * @property {(Number)=>Promise<Object|null>} eliminarCategoria
 * @property {(Number)=>Promise<Object|null>} obtenerCategoria
 * @property {()=>Promise<Object|null>} listarProductos
 * @property {(Object)=>Promise<Object|null>} crearProducto
 * @property {(Object)=>Promise<Object|null>} modificarProducto
 * @property {(Number)=>Promise<Object|null>} eliminarProducto
 * @property {(Number)=>Promise<Object|null>} obtenerProducto
 * @property {()=>Promise<Object|null>} listarUsuarios
 * @property {(Object)=>Promise<Object|null>} crearUsuario
 * @property {(Object)=>Promise<Object|null>} modificarUsuario
 * @property {(Number)=>Promise<Object|null>} eliminarUsuario
 * @property {(Number)=>Promise<Object|null>} obtenerUsuario
 */

// Contexto que compartirá la información en la app
const ContextData = createContext();

/**
 * Hook que retorna el contexto utilizado dentro de la aplicación
 * @returns {ContextDataObject}
 */
export function useData() {
  return useContext(ContextData);
}

const API_URL = "http://localhost:3000"; // URL base del backend

export default function DataProvider({ children }) {
  const apiKey = localStorage.getItem("API_KEY"); // TODO: guardar en localStorage la apikey para seguridad
  console.log(apiKey);
 

  

  /**
   * Realiza una petición con formato JSON.
   * @param {string} key - La clave de la operación.
   * @param {Array} params - Parámetros adicionales.
   */
  const jsonRequest = useCallback(
    (key, params = []) => {
      return async (payload = {}) => {
        try {
          const response = await fetch(`${API_URL}/query`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: apiKey,
            },
            body: JSON.stringify({ key, params, payload }),
          });

          if (!response.ok) {
            console.error(`Error en la consulta: Estado ${response.status}`);
            return null;
          }

          const result = await response.json();
          console.log(result);

          return result.data !== undefined ? result.data : true;
        } catch (error) {
          console.error(`Error al obtener ${key}:`, error);
          return null;
        }
      };
    },
    [apiKey]
  );

  /**
   * Realiza una petición con formato FormData.
   * @param {string} key - La clave de la operación.
   * @param {Array} params - Parámetros adicionales.
   */
  const formDataRequest = useCallback(
    (key, params = []) => {
      return async (payload = {}, file = null) => {
        try {
          const formData = new FormData();
          formData.append("key", key);
          formData.append("params", JSON.stringify(params));
          formData.append("payload", JSON.stringify(payload));

          if (file) {
            formData.append("imagen", file);
          }

          const response = await fetch(`${API_URL}/query`, {
            method: "POST",
            headers: {
              Authorization: apiKey,
            },
            body: formData,
          });

          if (!response.ok) {
            console.error(`Error en la consulta: Estado ${response.status}`);
            return null;
          }

          const result = await response.json();
          console.log(result);

          return result.data !== undefined ? result.data : true;
        } catch (error) {
          console.error(`Error al obtener ${key}:`, error);
          return null;
        }
      };
    },
    [apiKey]
  );

  const contextData = {
    // Peticiones de categorías
    listarCategorias: jsonRequest("listarCategorias"),
    crearCategoria: formDataRequest("crearCategoria"), // Ahora usa formDataRequest
    modificarCategoria: jsonRequest("modificarCategoria"),
    eliminarCategoria: jsonRequest("eliminarCategoria"),
    obtenerCategoria: jsonRequest("obtenerCategoria", ["categoria_id"]),

    // Peticiones de productos
    listarProductos: jsonRequest("listarProductos"),
    crearProducto: jsonRequest("crearProducto"),
    modificarProducto: jsonRequest("modificarProducto"),
    eliminarProducto: jsonRequest("eliminarProducto"),
    obtenerProducto: jsonRequest("obtenerProducto", ["producto_id"]),

    // Peticiones de usuarios
    listarUsuarios: jsonRequest("listarUsuarios"),
    crearUsuario: jsonRequest("crearUsuario"),
    modificarUsuario: jsonRequest("modificarUsuario"),
    eliminarUsuario: jsonRequest("eliminarUsuario"),
    obtenerUsuario: jsonRequest("obtenerUsuario", ["usuario_id"]),
  };

  return (
    <ContextData.Provider value={contextData}>{children}</ContextData.Provider>
  );
}
