import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useData } from "../../hooks/useData";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { usePopup } from "../../hooks/UsePopUp";
import UsuarioEliminarForm from "./UsuarioEliminarForm";
import UsuarioModificarForm from "./UsuarioModificarForm";

const ListarUsuariosStyle = styled.div``;

function ListarUsuarios({ accion }) {
  const navigate = useNavigate();
  const { listarUsuarios } = useData(); // Hook para obtener la función de listar usuarios
  const [usuarios, setUsuarios] = useState([]); // Estado para los usuarios
  const [loading, setLoading] = useState(true); // Estado de carga
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null); // Usuario seleccionado para edición
  const { showPopUp, hidePopUp } = usePopup();

  useEffect(() => {
    const cargarUsuarios = async () => {
      setLoading(true);
      try {
        const data = await listarUsuarios(); // Llamada al backend
        if (data) {
          setUsuarios(data); // Guardar usuarios en el estado
        }
      } catch (error) {
        console.error("Error al listar usuarios:", error);
      } finally {
        setLoading(false);
      }
    };

    cargarUsuarios();
  }, [listarUsuarios]);

  const handleActionClick = (usuario) => {
    setUsuarioSeleccionado(usuario); // Guardar usuario seleccionado
    console.log("Usuario seleccionado:", usuario);

    if (accion === "Eliminar") {
      showPopUp(
        <UsuarioEliminarForm {...{ usuario: usuario, onCancel: hidePopUp }} />
      );
    } else if (accion === "Editar") {
      showPopUp(
        <UsuarioModificarForm
          {...{ usuarioId: usuario.usuario_id, onCancel: hidePopUp }}
        />
      );
    } else {
      navigate(`/Administracion/${usuario.id}`);
    }
  };

  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  if (usuarios.length === 0) {
    return <p>No hay usuarios registrados.</p>;
  }

  return (
    <ListarUsuariosStyle>
      <h2>Lista de Usuarios</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo Electrónico</th>
            <th>Tipo de Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {usuarios.map((usuario) => (
            <tr key={usuario.usuario_id}>
              <td>{usuario.usuario_id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.correo_electronico}</td>
              <td>{usuario.tipo_usuario}</td>
              <td>
                <button onClick={() => handleActionClick(usuario)}>
                  {accion}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ListarUsuariosStyle>
  );
}

ListarUsuarios.propTypes = {
  onEditClose: PropTypes.func, // Prop opcional para manejar cierre desde el padre
};

export default ListarUsuarios;
