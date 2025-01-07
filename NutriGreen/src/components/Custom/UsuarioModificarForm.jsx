import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "../../hooks/useForm";
import { useData } from "../../hooks/useData";
import styled from "@emotion/styled";

const UsuarioModificarFormStyle = styled.div`
  .formWrapper {
    z-index: 1;
  }
`;

function UsuarioModificarForm({ usuarioId, onCancel }) {
  const { obtenerUsuario, modificarUsuario } = useData();
  console.log(usuarioId);

  // Estado del formulario inicializado con valores vacíos
  const { formState, onInputChange, setFormState } = useForm({
    nombre: "",
    correo_electronico: "",
    contraseña: "", // La contraseña se dejará vacía hasta que se modifique
    tipo_usuario: "",
  });

  // Desestructuración del estado del formulario
  const { nombre, correo_electronico, contraseña, tipo_usuario } = formState;

  // Efecto para cargar datos del usuario al montar el componente
  useEffect(() => {
    const cargarUsuario = async () => {
      if (usuarioId) {
        try {
          const usuarioData = await obtenerUsuario(usuarioId);
          console.log("Datos del usuario cargados:", usuarioData);

          // Actualizamos el formulario con los datos obtenidos
          if (usuarioData && usuarioData.length > 0) {
            const datosUsuario = usuarioData[0];
            setFormState({
              nombre: datosUsuario.nombre || "",
              correo_electronico: datosUsuario.correo_electronico || "",
              contraseña: "", // La dejamos vacía por seguridad
              tipo_usuario: datosUsuario.tipo_usuario || "",
            });
          }
        } catch (error) {
          console.error("Error al cargar usuario:", error);
          alert("Error al cargar los datos del usuario.");
        }
      }
    };

    cargarUsuario();
  }, [usuarioId, setFormState, obtenerUsuario]);

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear el payload con los datos del formulario
    const payload = {
      id: usuarioId,
      nombre,
      correo: correo_electronico,
      contraseña: contraseña || undefined, // No enviamos la contraseña si está vacía
      tipoUsuario: tipo_usuario,
    };

    console.log("Modificando usuario con datos:", payload);

    try {
      const response = await modificarUsuario(payload);
      console.log(response);
      

      if (response) {
        alert("Usuario modificado exitosamente.");
        onCancel(); // Cerrar el formulario después de modificar
      } else {
        alert("Hubo un error al modificar el usuario.");
        onCancel(); // Cerrar el formulario después de modificars
      }
    } catch (error) {
      console.error("Error al modificar el usuario:", error);
      alert(
        "Error al enviar los datos. Revisa la consola para más información."
      );
    }
  };

  return (
    <UsuarioModificarFormStyle className="formWrapper">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label htmlFor="correo_electronico">Correo Electrónico:</label>
          <input
            type="email"
            id="correo_electronico"
            name="correo_electronico"
            value={correo_electronico}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label htmlFor="tipo_usuario">Tipo de Usuario:</label>
          <select
            id="tipo_usuario"
            name="tipo_usuario"
            value={tipo_usuario}
            onChange={onInputChange}
          >
            <option value="">Seleccione un tipo</option>
            <option value="administrador">Administrador</option>
            <option value="cliente">Cliente</option>
          </select>
        </div>

        <div>
          <button type="submit">Guardar Cambios</button>
          <button type="button" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </form>
    </UsuarioModificarFormStyle>
  );
}

UsuarioModificarForm.propTypes = {
  usuarioId: PropTypes.number.isRequired, // ID del usuario a modificar
  onCancel: PropTypes.func.isRequired, // Callback para cerrar el formulario
};

export default UsuarioModificarForm;
