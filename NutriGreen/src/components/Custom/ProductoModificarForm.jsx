import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "../../hooks/useForm";
import { useData } from "../../hooks/useData";
import styled from "@emotion/styled";

const ProductoModificarFormStyle = styled.div`
  .formWrapper {
    z-index: 1;
  }
`;

function ProductoModificarForm({ productoId, onCancel, categorias }) {
  const { obtenerProducto, modificarProducto } = useData();

  // Estado del formulario inicializado con valores vacíos
  const { formState, onInputChange, setFormState } = useForm({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
    categoria_id: "",
  });

  // Desestructuración del estado del formulario
  const { nombre, descripcion, precio, stock, categoria_id } = formState;

  // Efecto para cargar datos del producto al montar el componente
  useEffect(() => {
    const cargarProducto = async () => {
      if (productoId) {
        try {
          const productoData = await obtenerProducto(productoId);
          console.log("Datos del producto cargados:", productoData);
  
          // Verifica si `productoData` tiene datos y los formatea correctamente
          if (productoData && productoData.length > 0) {
            const datosProducto = productoData[0];
  
            setFormState({
              nombre: datosProducto.nombre || "",
              descripcion: datosProducto.descripcion || "",
              precio: datosProducto.precio || "",
              stock: datosProducto.stock || "",
              categoria_id: datosProducto.categoria_id || "",
            });
          }
        } catch (error) {
          console.error("Error al cargar el producto:", error);
          alert("Error al cargar los datos del producto.");
        }
      }
    };
  
    cargarProducto();
  }, [productoId, setFormState, obtenerProducto]);
  

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: productoId,
      nombre,
      descripcion,
      precio: parseFloat(precio),
      stock: parseInt(stock, 10),
      categoria_id: parseInt(categoria_id, 10),
    };

    console.log("Modificando producto con datos:", payload);

    try {
      const response = await modificarProducto(payload);

      if (response) {
        alert("Producto modificado exitosamente.");
        onCancel(); // Cerrar el formulario después de modificar
      } else {
        alert("Hubo un error al modificar el producto.");
      }
    } catch (error) {
      console.error("Error al modificar el producto:", error);
      alert("Error al enviar los datos. Revisa la consola para más información.");
    }
  };

  return (
    <ProductoModificarFormStyle className="formWrapper">
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
            {categorias.map(({categoria_id,nombre}) => (
              <option key={categoria_id} value={categoria_id}>
                {nombre}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button type="submit">Guardar Cambios</button>
          <button type="button" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </form>
    </ProductoModificarFormStyle>
  );
}

ProductoModificarForm.propTypes = {
  productoId: PropTypes.number.isRequired, // ID del producto a modificar
  onCancel: PropTypes.func.isRequired, // Callback para cerrar el formulario
  categorias: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductoModificarForm;
