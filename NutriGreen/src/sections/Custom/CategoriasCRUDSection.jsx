import React, { useCallback } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import CRUDComponent from "../../components/Custom/CRUDComponent";
import { usePopup } from "../../hooks/UsePopUp";
import CategoriaAgregarForm from "../../components/Custom/CategoriaAgregarForm";
import ListarCategorias from "../../components/Custom/ListarCategorias";

const CategoriasCRUDSectionStyle = styled.section``;

function CategoriasCRUDSection() {
  const { showPopUp } = usePopup();

  // Pop-up para agregar una categoría
  const popUpAgregarCategoria = useCallback(() => {
    showPopUp(<CategoriaAgregarForm />);
    return true;
  }, [showPopUp]);

  // Pop-up para modificar una categoría
  const popUpModificarCategoria = useCallback(() => {
    showPopUp(<ListarCategorias {...{ accion: "Editar" }} />);
    return true;
  }, [showPopUp]);

  // Pop-up para eliminar una categoría
  const popUpEliminarCategoria = useCallback(() => {
    showPopUp(<ListarCategorias {...{ accion: "Eliminar" }} />);
    return true;
  }, [showPopUp]);

  // Pop-up para ver detalles de una categoría
  const popUpVerCategorias = useCallback(() => {
    showPopUp(<ListarCategorias {...{ accion: "Ver detalles" }} />);
    return true;
  }, [showPopUp]);

  return (
    <CategoriasCRUDSectionStyle>
      <CRUDComponent
        {...{
          nombreEntidad: "Categoría",
          popUpAgregar: popUpAgregarCategoria,
          popUpEditar: popUpModificarCategoria,
          popUpEliminar: popUpEliminarCategoria,
          popUpVer: popUpVerCategorias,
        }}
      />
    </CategoriasCRUDSectionStyle>
  );
}

CategoriasCRUDSection.propTypes = {};

export default CategoriasCRUDSection;
