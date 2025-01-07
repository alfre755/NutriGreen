import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "../../hooks/useForm";
import { useData } from "../../hooks/useData";

function CategoriaAgregarForm() {
  const { crearCategoria } = useData(); // Usamos el contexto para acceder a la función del backend

  const { formState, onInputChange, onResetForm, nombre, descripcion } =
    useForm({
      nombre: "",
      descripcion: "",
    });

  const [imagen, setImagen] = useState(null); // Estado para la imagen

  // Manejar cambio en el input de la imagen
  const handleImageChange = (e) => {
    setImagen(e.target.files[0]); // Guardar el archivo seleccionado
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = { nombre, descripcion };
  
    try {
      const response = await crearCategoria(formData, imagen);
  
      if (response) {
        alert("Categoría creada exitosamente.");
        onResetForm();
        setImagen(null);
      } else {
        alert("Hubo un error al crear la categoría.");
      }
    } catch (error) {
      console.error("Error al crear la categoría:", error);
      alert("Error al enviar los datos. Revisa la consola para más información.");
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre de la Categoría:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={onInputChange}
        />
      </div>

      <div>
        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={descripcion}
          onChange={onInputChange}
        />
      </div>

      <div>
        <label htmlFor="imagen">Imagen:</label>
        <input
          type="file"
          id="imagen"
          name="imagen"
          onChange={handleImageChange}
        />
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

CategoriaAgregarForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default CategoriaAgregarForm;
