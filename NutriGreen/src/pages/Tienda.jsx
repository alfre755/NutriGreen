import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { useState } from "react";
import { useData } from "../hooks/useData";
import ListarCategorias from "../components/LayaoutTemplate/ListarCategorias";

function Tienda(props) {
  const { listarCategorias } = useData();
  const [categorias, setCategorias] = useState([]); // Estado inicial como array vacío

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const categoriasData = await listarCategorias();
        console.log("Datos de categorías recibidos:", categoriasData); // Depuración
        setCategorias(categoriasData);
      } catch (error) {
        console.error("Error al obtener categorías:", error);
      }
    };

    fetchCategorias();
  }, [listarCategorias]);

  console.log(categorias);

  return (
    <ListarCategorias
      {...{ title: "Seleccione una categoria", categorias: categorias }}
    />
  );
}

Tienda.propTypes = {};

export default Tienda;
