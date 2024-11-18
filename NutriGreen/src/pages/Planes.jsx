import React from "react";
import PropTypes from "prop-types";
import ListarCategorias from "../components/LayaoutTemplate/ListarCategorias";

function Planes(props) {
  const objPlanes = [
    { id: "1", title: "Plan1", imagen: "public/evento5_4.jpg" },
    { id: "2", title: "Plan2", imagen: "public/evento5_4.jpg" },
    { id: "3", title: "Plan3", imagen: "public/evento5_4.jpg" },
  ];
  return (
    <div>
      <ListarCategorias
        {...{ title: "Planes disponibles", categorias: objPlanes }}
      />
    </div>
  );
}

Planes.propTypes = {};

export default Planes;
