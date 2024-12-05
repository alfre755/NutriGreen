import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { useData } from "../../hooks/useData";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

function ProductoEliminarForm({ producto, onCancel }) {
  const { eliminarProducto } = useData(); // Hook para eliminar producto

  const handleConfirmarEliminar = async () => {
    try {
      const response = await eliminarProducto(producto.producto_id); // Llamada para eliminar producto
      if (response) {
        alert(`Producto ${producto.nombre} eliminado exitosamente.`);
        onCancel(); // Cierra el popup después de eliminar
      } else {
        alert("Hubo un error al eliminar el producto.");
      }
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      alert(
        "Error al eliminar el producto. Revisa la consola para más información."
      );
    }
  };

  return (
    <FormContainer>
      <h2>Eliminar Producto</h2>
      <p>¿Estás seguro de que quieres eliminar el producto {producto?.nombre}?</p>
      <ButtonGroup>
        <button onClick={handleConfirmarEliminar}>Eliminar</button>
        <button onClick={onCancel}>Cancelar</button>
      </ButtonGroup>
    </FormContainer>
  );
}

ProductoEliminarForm.propTypes = {
  producto: PropTypes.shape({
    producto_id: PropTypes.number.isRequired, // ID del producto
    nombre: PropTypes.string.isRequired, // Nombre del producto
  }).isRequired,
  onCancel: PropTypes.func.isRequired, // Función para cerrar el popup
};

export default ProductoEliminarForm;
