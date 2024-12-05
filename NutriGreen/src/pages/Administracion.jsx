import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import UsuariosCRUDSection from "../sections/Custom/UsuariosCRUDSection";
import ProductosCRUDSection from "../sections/Custom/ProductosCRUDSection";

const AdministracionStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .headerWrapper {
    font-size: 70px;
  }

  > .CRUDWrapper {
    display: flex;
  }
`;

function Administracion(props) {
  return (
    <AdministracionStyle>
      <div className="headerWrapper">
        <p>Administración</p>
      </div>
      <div className="CRUDWrapper">
        {/* CRUD Usuarios */}
        <UsuariosCRUDSection />
        {/* CRUD Productos */}
        <ProductosCRUDSection />

        {/* CRUD Planes */}
      </div>
    </AdministracionStyle>
  );
}

Administracion.propTypes = {};

export default Administracion;
