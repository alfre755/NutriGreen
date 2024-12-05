import React, { useCallback } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import CRUDComponent from "../../components/Custom/CRUDComponent";
import { usePopup } from "../../hooks/UsePopUp";
import UsuarioAgregarForm from "../../components/Custom/UsuarioAgregarForm";
import ListarUsuarios from "../../components/Custom/ListarUsuarios";

const UsuariosCRUDSectionStyle = styled.section``;

function UsuariosCRUDSection() {
  const { showPopUp } = usePopup();

  const popUpAgregarUsuario = useCallback(() => {
    showPopUp(<UsuarioAgregarForm />);
    return true;
  }, [showPopUp]);

  const popUpModificarUsuario = useCallback(() => {
    showPopUp(<ListarUsuarios {...{ accion: "Editar" }} />);
    return true;
  }, [showPopUp]);

  const popUpEliminarUsuario = useCallback(() => {
    showPopUp(<ListarUsuarios {...{ accion: "Eliminar" }} />);
    return true;
  }, [showPopUp]);

  const popUpVerUsuarios = useCallback(() => {
    showPopUp(<ListarUsuarios {...{ accion: "Ver detalles" }} />);
    return true;
  }, [showPopUp]);

  return (
    <UsuariosCRUDSectionStyle>
      <CRUDComponent
        {...{
          nombreEntidad: "Usuario",
          popUpAgregar: popUpAgregarUsuario,
          popUpEditar: popUpModificarUsuario,
          popUpEliminar: popUpEliminarUsuario,
          popUpVer: popUpVerUsuarios,
        }}
      />
    </UsuariosCRUDSectionStyle>
  );
}

UsuariosCRUDSection.propTypes = {};

export default UsuariosCRUDSection;
