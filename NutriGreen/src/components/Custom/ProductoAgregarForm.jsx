import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function ProductoAgregarForm({ productoId, onCancel }) {
  const [formState, setFormState] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
  });

  // Lógica para cargar datos de un producto si es que se está editando
  useEffect(() => {
    if (productoId) {
      // Lógica para cargar el producto desde la base de datos o API
    }
  }, [productoId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar datos del formulario al backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre del Producto:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formState.nombre}
          onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="descripcion">Descripción:</label>
        <input
          type="text"
          id="descripcion"
          name="descripcion"
          value={formState.descripcion}
          onChange={(e) => setFormState({ ...formState, descripcion: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="precio">Precio:</label>
        <input
          type="number"
          id="precio"
          name="precio"
          value={formState.precio}
          onChange={(e) => setFormState({ ...formState, precio: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="stock">Stock:</label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={formState.stock}
          onChange={(e) => setFormState({ ...formState, stock: e.target.value })}
        />
      </div>

      <div>
        <button type="submit">Guardar Producto</button>
        <button type="button" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  );
}

ProductoAgregarForm.propTypes = {
  productoId: PropTypes.number,
  onCancel: PropTypes.func.isRequired,
};

export default ProductoAgregarForm;
