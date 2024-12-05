import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Button from "../Main/Button";

const CRUDComponentStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: solid 1px gray;
  border-radius: 5px;
  padding: 25px;

  .titleWrapper {
    text-align: center;
    h1 {
      font-size: 25px;
    }
  }

  .buttonsWrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

function CRUDComponent({
  nombreEntidad,
  popUpAgregar,
  popUpEditar,
  popUpEliminar,
  popUpVer,
}) {
  return (
    <CRUDComponentStyle>
      <div className="titleWrapper">
        <h1> CRUD {nombreEntidad}</h1>
      </div>
      <div className="buttonsWrapper">
        <Button type={1} onClick={popUpAgregar}>
          Agregar {nombreEntidad}
        </Button>
        <Button type={1} onClick={popUpEditar}>
          Modificar {nombreEntidad}
        </Button>
        <Button type={1} onClick={popUpEliminar}>
          Eliminar {nombreEntidad}
        </Button>
        <Button type={1} onClick={popUpVer}>
          Ver {nombreEntidad}
        </Button>
      </div>
    </CRUDComponentStyle>
  );
}

CRUDComponent.propTypes = {
  nombreEntidad: PropTypes.string.isRequired, // El nombre de la entidad a gestionar en el CRUD, obligatorio.
  popUpAgregar: PropTypes.func.isRequired, // Función que se ejecuta al hacer clic en "Agregar".
  popUpEditar: PropTypes.func.isRequired, // Función que se ejecuta al hacer clic en "Modificar".
  popUpEliminar: PropTypes.func.isRequired, // Función que se ejecuta al hacer clic en "Eliminar".
  popUpVer: PropTypes.func.isRequired, // Función que se ejecuta al hacer clic en "Ver".
};

export default CRUDComponent;
