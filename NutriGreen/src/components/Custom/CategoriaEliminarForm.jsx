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

function CategoriaEliminarForm({ categoria, onCancel }) {
  const { eliminarCategoria } = useData(); // Hook para eliminar categoría

  const handleConfirmarEliminar = async () => {
    try {
      const response = await eliminarCategoria(categoria.categoria_id); // Llamada para eliminar categoría
      if (response) {
        alert(`Categoría "${categoria.nombre}" eliminada exitosamente.`);
        onCancel(); // Cierra el popup después de eliminar
      } else {
        alert("Hubo un error al eliminar la categoría.");
      }
    } catch (error) {
      console.error("Error al eliminar la categoría:", error);
      alert(
        "Error al eliminar la categoría. Revisa la consola para más información."
      );
    }
  };

  return (
    <FormContainer>
      <h2>Eliminar Categoría</h2>
      <p>
        ¿Estás seguro de que quieres eliminar la categoría{" "}
        <strong>{categoria?.nombre}</strong>?
      </p>
      <ButtonGroup>
        <button onClick={handleConfirmarEliminar}>Eliminar</button>
        <button onClick={onCancel}>Cancelar</button>
      </ButtonGroup>
    </FormContainer>
  );
}

CategoriaEliminarForm.propTypes = {
  categoria: PropTypes.shape({
    categoria_id: PropTypes.number.isRequired, // ID de la categoría
    nombre: PropTypes.string.isRequired, // Nombre de la categoría
  }).isRequired,
  onCancel: PropTypes.func.isRequired, // Función para cerrar el popup
};

export default CategoriaEliminarForm;
