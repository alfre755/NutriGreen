import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import usePosition from "../hooks/usePosition";
import { useData } from "../hooks/useData";

function CategoriaDetalle() {
  const data = useData();
  const [dataCategoria, setDataCategoria] = useState(null);

  const { currentPath, matchedRoute } = usePosition();

  const id =
    matchedRoute?.path === "/Tienda/:id" ? currentPath.split("/").pop() : null;

  useEffect(() => {
    async function fetchProductos() {
      const productos = await data.listarProductosPorCategoria(id);
      setDataCategoria(productos);
    }
    fetchProductos();
  }, [data, id]);

  if (!dataCategoria) {
    return (
      <div>
        <p>Categoria no encontrada</p>
      </div>
    );
  }
  console.log(dataCategoria);

  return (
    <div>
      <h1>{dataCategoria.nombre}</h1>

      <p>Descripción: {dataCategoria.descripcion}</p>
    </div>
  );
}

CategoriaDetalle.propTypes = {
  categorias: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      imagen: PropTypes.string.isRequired,
      descripcion: PropTypes.string,
    })
  ).isRequired,
};

export default CategoriaDetalle;
