import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

// Estilo para el contenedor principal y para las filas
const HistorialDisplayerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;

  .header {
    display: flex;
    font-weight: bold;
    background-color: #f4f4f4;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  .row {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  .row:nth-of-type(even) {
    background-color: #f9f9f9;
  }

  .cell {
    flex: 1;
    text-align: left;
  }
`;

function HistorialDisplayer({ data, title }) {
  return (
    <HistorialDisplayerStyle>
      <h2>{title}</h2>
      <div className="header">
        <div className="cell">Fecha</div>
        <div className="cell">Pedido</div>
        <div className="cell">Precio</div>
      </div>
      {data.map((item, index) => (
        <div className="row" key={index}>
          <div className="cell">{item.fecha}</div>
          <div className="cell">{item.pedido}</div>
          <div className="cell">{item.precio}</div>
        </div>
      ))}
    </HistorialDisplayerStyle>
  );
}

HistorialDisplayer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      fecha: PropTypes.string.isRequired,
      pedido: PropTypes.string.isRequired,
      precio: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};

export default HistorialDisplayer;
