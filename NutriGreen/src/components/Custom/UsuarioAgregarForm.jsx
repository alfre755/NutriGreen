import React from "react";
import PropTypes from "prop-types";
import { useForm } from "../../hooks/useForm";
import { useData } from "../../hooks/useData";

function UsuarioAgregarForm(props) {
  const { crearUsuario } = useData(); // Usamos el contexto para acceder a la función del backend

  const {
    formState,
    onInputChange,
    onResetForm,
    nombre,
    correo_electronico,
    contraseña,
    tipo_usuario,
  } = useForm({
    nombre: "",
    correo_electronico: "",
    contraseña: "",
    tipo_usuario: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear el payload para enviar al backend
    const payload = {
      nombre: nombre,
      correo: correo_electronico,
      contraseña: contraseña,
      tipoUsuario: tipo_usuario,
    };

    console.log("Enviando datos al backend:", payload);

    try {
      const response = await crearUsuario(payload);

      if (response) {
        alert("Usuario creado exitosamente.");
        onResetForm(); // Limpiar el formulario
      } else {
        alert("Hubo un error al crear el usuario.");
      }
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      alert(
        "Error al enviar los datos. Revisa la consola para más información."
      );
    }
  };

  return (
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
        <label htmlFor="contraseña">Contraseña:</label>
        <input
          type="password"
          id="contraseñaUsuario"
          name="contraseña"
          value={contraseña}
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
        <button type="submit">Guardar</button>
        <button type="button" onClick={onResetForm}>
          Limpiar
        </button>
      </div>
    </form>
  );
}

UsuarioAgregarForm.propTypes = {
  // Define las propTypes si necesitas pasar funciones como onSubmit u otros datos al componente
  onSubmit: PropTypes.func,
};

export default UsuarioAgregarForm;
