import React, { useContext } from "react";
import { createContext } from "react";

/**
 * @typedef {Object} ContextDataObject
 * @property {(String)=>Promise<Boolean>} listarProductosPorCategoria
 */

// eslint-disable-next-line react-refresh/only-export-components
const ContextData = createContext();

/**
 *Este es un hook que retorna el contexto que se utilizara dentro de la aplicacion(actualmente contiene funciones que buscaran informacion en el backend)
 * @returns {ContextDataObject}
 */
// eslint-disable-next-line react-refresh/only-export-components
export function useData() {
  return useContext(ContextData);
}

export default function DataProvider({ children }) {
  const contextData = {
    listarProductosPorCategoria: async (categoriaId) => {
      if (categoriaId > 6) return null;

      const data = {
        _id: `${Math.floor(Math.random() * 1000000000000000)}`,
        nombre: `Nombre de categoria ${categoriaId}`,
        descripcion:
          "Ipsum cillum adipisicing elit ex. Sint magna sit dolore nulla et do incididunt mollit. Veniam aute dolor adipisicing aliquip nisi ex adipisicing. Eiusmod veniam sunt adipisicing consequat fugiat ea tempor duis mollit nostrud dolore fugiat. Qui aliquip et quis in enim tempor eu. Aliquip cillum mollit excepteur ea.",
        productos: [...Array(5)].map((a, i) => ({
          _id: `${Math.floor(Math.random() * 1000000000000000)}`,
          nombre: `producto${i}`,
          precio: Math.floor(Math.random() * 10000000),
          imagen: "/evento5_4.jpg"
        })),
      };
      return data;
    },
  };
  return (
    <ContextData.Provider value={contextData}>{children}</ContextData.Provider>
  );
}
