import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ListarCategorias from "../components/LayaoutTemplate/ListarCategorias";
import { useMemo } from "react";
import { useState } from "react";
import { useData } from "../hooks/useData";

function Tienda(props) {
  const [categorias, setCategorias] = useState();
  // const fechtCategorias = useMemo(() => first, [second]);
  const { listarProductos } = useData();
  const [productos, setProductos] = useState(null);

  const objCategorias = [
    { id: "1", title: "Categoria1", imagen: "public/evento5_4.jpg" },
    { id: "2", title: "Categoria2", imagen: "public/evento5_4.jpg" },
    { id: "3", title: "Categoria3", imagen: "public/evento5_4.jpg" },
    { id: "4", title: "Categoria4", imagen: "public/evento5_4.jpg" },
    { id: "5", title: "Categoria5", imagen: "public/evento5_4.jpg" },
    { id: "6", title: "Categoria6", imagen: "public/evento5_4.jpg" },
  ];

  useEffect(() => {
    const fetchProductos = async () => {
      const productosData = await listarProductos(); // Llama a listarProductos del hook
      setProductos(productosData); // Guarda los productos en el estado
    };

    fetchProductos();
  }, [listarProductos]);
  console.log(productos);

  // useEffect(() => {
  //   fechtCategorias();
  // }, [fechtCategorias]);

  return (
    <ListarCategorias
      {...{ title: "Seleccione una categoria", categorias: objCategorias }}
    />
  );
}

Tienda.propTypes = {};

export default Tienda;
