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

function UsuarioEliminarForm({ usuario, onCancel }) {
  const { eliminarUsuario } = useData();
  const handleConfirmarEliminar = async () => {
    try {
      const response = await eliminarUsuario(usuario.usuario_id);
      if (response) {
        alert(`Usuario ${usuario.nombre} eliminado exitosamente.`);
        onCancel(); // Cierra el popup después de eliminar
      } else {
        alert("Hubo un error al eliminar el usuario.");
      }
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
      alert(
        "Error al eliminar el usuario. Revisa la consola para más información."
      );
    }
  };

  return (
    <FormContainer>
      <h2>Eliminar Usuario</h2>
      <p>¿Estás seguro de que quieres eliminar a {usuario?.nombre}?</p>
      <ButtonGroup>
        <button onClick={handleConfirmarEliminar}>Eliminar</button>
        
      </ButtonGroup>
    </FormContainer>
  );
}

UsuarioEliminarForm.propTypes = {
  usuario: PropTypes.shape({
    usuario_id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
  }).isRequired,
  onCancel: PropTypes.func.isRequired, // Función para cerrar el popup
};

export default UsuarioEliminarForm;
