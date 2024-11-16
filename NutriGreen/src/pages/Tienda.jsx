import React from "react";
import PropTypes from "prop-types";
import ListarCategorias from "../components/LayaoutTemplate/ListarCategorias";

function Tienda(props) {
  const objCategorias = [
    { id: "1", title: "Categoria1", imagen: "public/evento5_4.jpg" },
    { id: "2", title: "Categoria2", imagen: "public/evento5_4.jpg" },
    { id: "3", title: "Categoria3", imagen: "public/evento5_4.jpg" },
    { id: "4", title: "Categoria4", imagen: "public/evento5_4.jpg" },
    { id: "5", title: "Categoria5", imagen: "public/evento5_4.jpg" },
    { id: "6", title: "Categoria6", imagen: "public/evento5_4.jpg" },
  ];
  return (
    <ListarCategorias
      {...{ title: "Seleccione una categoria", categorias: objCategorias }}
    />
  );
}

Tienda.propTypes = {};

export default Tienda;
