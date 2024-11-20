import React, { createContext, useCallback, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

/**
 * @typedef {Object} ContextDataObject
 * @property {(String)=>Promise<Object|null>} listarProductosPorCategoria
 * @property {()=>Promise<Object|null>} listarCategorias
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
  const apiKey = localStorage.getItem("API_KEY"); // TODO guardar en localStorage la apikey para seguridad

  const getRequest = useCallback(
    (key, params) => {
      return async (payload) => {
        try {
          const response = await fetch(`${API_URL}/query`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: apiKey,
            },
            body: JSON.stringify({
              key: key, // El key de la consulta de productos por categoría
              params: [params], // Los parámetros para la consulta
              payload,
            }),
          });

          const result = await response.json();

          if (result.succes) {
            return result.data; // Si la consulta fue exitosa, devuelve los productos
          } else {
            console.error(`Error en ${key}:`, result.message);
            return null;
          }
        } catch (error) {
          console.error(`Error al obtener ${key}:`, error);
          return null; // En caso de error, retorna null
        }
      };
    },
    [apiKey]
  );

  const contextData = {
    // Función para obtener las categorías desde el backend
    listarCategorias: getRequest("listarCategorias", []),

    // Función para obtener productos por categoría
    listarProductosPorCategoria: getRequest("listarProductosPorCategoria"),
    listarProductos: getRequest("listarProductos", []),
  };

  return (
    <ContextData.Provider value={contextData}>{children}</ContextData.Provider>
  );
}
