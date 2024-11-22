import React from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../../hooks/useData";

function Eliminar() {
  const { usuarioId } = useParams();
  const { eliminarUsuario } = useData();
  const navigate = useNavigate();

  // Manejo del proceso de eliminación
  const handleEliminar = async () => {
    try {
      const response = await eliminarUsuario(usuarioId);

      if (response) {
        alert("Usuario eliminado exitosamente.");
        navigate(`/Administracion`);
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
    <div>
      <h2>¿Estás seguro de que quieres eliminar este usuario?</h2>
      <button onClick={handleEliminar}>Eliminar Usuario</button>
    </div>
  );
}

Eliminar.propTypes = {};

export default Eliminar;
