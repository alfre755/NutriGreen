import React, { useCallback } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import CRUDComponent from "../../components/Custom/CRUDComponent"; // Este componente debería ser reutilizable
import { usePopup } from "../../hooks/UsePopUp";
import ProductoAgregarForm from "../../components/Custom/ProductoAgregarForm"; // Aquí es el formulario para agregar productos
import ListarProductos from "../../components/Custom/ListarProductos"; // Aquí es la lista para los productos

const ProductosCRUDSectionStyle = styled.section``;

function ProductosCRUDSection() {
  const { showPopUp } = usePopup();

  // Función para mostrar el formulario de agregar producto
  const popUpAgregarProducto = useCallback(() => {
    showPopUp(<ProductoAgregarForm />);
    return true;
  }, [showPopUp]);

  // Función para mostrar el formulario de editar producto
  const popUpModificarProducto = useCallback(() => {
    showPopUp(<ListarProductos {...{ accion: "Editar" }} />);
    return true;
  }, [showPopUp]);

  // Función para mostrar el formulario de eliminar producto
  const popUpEliminarProducto = useCallback(() => {
    showPopUp(<ListarProductos {...{ accion: "Eliminar" }} />);
    return true;
  }, [showPopUp]);

  // Función para mostrar detalles del producto
  const popUpVerProducto = useCallback(() => {
    showPopUp(<ListarProductos {...{ accion: "Ver detalles" }} />);
    return true;
  }, [showPopUp]);

  return (
    <ProductosCRUDSectionStyle>
      <CRUDComponent
        {...{
          nombreEntidad: "Producto", // Aquí es "Producto" en lugar de "Usuario"
          popUpAgregar: popUpAgregarProducto,
          popUpEditar: popUpModificarProducto,
          popUpEliminar: popUpEliminarProducto,
          popUpVer: popUpVerProducto,
        }}
      />
    </ProductosCRUDSectionStyle>
  );
}

ProductosCRUDSection.propTypes = {};

export default ProductosCRUDSection;
