import React from "react";
import PropTypes from "prop-types";
import { useForm } from "../../hooks/useForm";
import { useData } from "../../hooks/useData";

function ProductoAgregarForm({ categorias }) {
  const { crearProducto } = useData(); // Función para enviar los datos al backend

  const {
    formState,
    onInputChange,
    onResetForm,
    nombre,
    descripcion,
    precio,
    stock,
    categoria_id,
  } = useForm({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
    categoria_id: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear el payload para enviar al backend
    const payload = {
      nombre,
      descripcion,
      precio: parseInt(precio, 10),
      stock: parseInt(stock, 10),
      categoria_id: parseInt(categoria_id, 10),
    };

    console.log("Enviando datos al backend:", payload);

    try {
      const response = await crearProducto(payload);

      if (response) {
        alert("Producto creado exitosamente.");
        onResetForm(); // Limpiar el formulario
      } else {
        alert("Hubo un error al crear el producto.");
      }
    } catch (error) {
      console.error("Error al crear el producto:", error);
      alert(
        "Error al enviar los datos. Revisa la consola para más información."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre del Producto:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={onInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={descripcion}
          onChange={onInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="precio">Precio:</label>
        <input
          type="number"
          id="precio"
          name="precio"
          value={precio}
          onChange={onInputChange}
          step="0.01"
          required
        />
      </div>

      <div>
        <label htmlFor="stock">Stock:</label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={stock}
          onChange={onInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="categoria_id">Categoría:</label>
        <select
          id="categoria_id"
          name="categoria_id"
          value={categoria_id}
          onChange={onInputChange}
          required
        >
          <option value="">Seleccione una categoría</option>
          {categorias.map(({ categoria_id, nombre }) => (
            <option key={categoria_id} value={categoria_id}>
              {nombre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <button type="submit">Guardar Producto</button>
        <button type="button" onClick={onResetForm}>
          Limpiar
        </button>
      </div>
    </form>
  );
}

ProductoAgregarForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ProductoAgregarForm;
