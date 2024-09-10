import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import HistorialDisplayer from "../components/Custom/HistorialDisplayer";

const PlanClienteStyle = styled.section`
  display: flex;

  > .leftContent {
    flex-basis: 50%;
    padding: 1em;
  }

  > .historialWrapper {
    flex-basis: 50%;
    padding: 1em;
  }
`;

function PlanCliente(props) {
  const dataExampleHistorial = [
    {
      fecha: "02/02/2024",
      pedido: ["adsad"],
      precio: "$20000",
    },
    {
      fecha: "02/02/2024",
      pedido: "adsad",
      precio: "$20000",
    },
  ];
  return (
    <PlanClienteStyle>
      <div className="leftContent"></div>
      <div className="historialWrapper">
        <HistorialDisplayer
          {...{ title: "Historial de pedidos", data: dataExampleHistorial }}
        />
      </div>
    </PlanClienteStyle>
  );
}

PlanCliente.propTypes = {};

export default PlanCliente;
