import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useData } from "../../hooks/useData";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { usePopup } from "../../hooks/UsePopUp";
import ProductoEliminarForm from "./ProductoEliminarForm";
import ProductoModificarForm from "./ProductoModificarForm";


const ListarProductosStyle = styled.div``;

function ListarProductos({ accion }) {
  const navigate = useNavigate();
  const { listarProductos } = useData(); // Hook para obtener la función de listar productos
  const [productos, setProductos] = useState([]); // Estado para los productos
  const [loading, setLoading] = useState(true); // Estado de carga
  const [productoSeleccionado, setProductoSeleccionado] = useState(null); // Producto seleccionado para edición
  const { showPopUp, hidePopUp } = usePopup();

  useEffect(() => {
    const cargarProductos = async () => {
      setLoading(true);
      try {
        const data = await listarProductos(); // Llamada al backend
        if (data) {
          setProductos(data); // Guardar productos en el estado
        }
      } catch (error) {
        console.error("Error al listar productos:", error);
      } finally {
        setLoading(false);
      }
    };

    cargarProductos();
  }, [listarProductos]);

  const handleActionClick = (producto) => {
    setProductoSeleccionado(producto); // Guardar producto seleccionado
    console.log("Producto seleccionado:", producto);

    if (accion === "Eliminar") {
      showPopUp(
        <ProductoEliminarForm {...{ producto: producto, onCancel: hidePopUp }} />
      );
    } else if (accion === "Editar") {
      showPopUp(
        <ProductoModificarForm
          {...{ productoId: producto.producto_id, onCancel: hidePopUp }}
        />
      );
    } else {
      navigate(`/Administracion/${producto.id}`);
    }
  };

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (productos.length === 0) {
    return <p>No hay productos registrados.</p>;
  }

  return (
    <ListarProductosStyle>
      <h2>Lista de Productos</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {productos.map((producto) => (
            <tr key={producto.producto_id}>
              <td>{producto.producto_id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.precio}</td>
              <td>{producto.stock}</td>
              <td>
                <button onClick={() => handleActionClick(producto)}>
                  {accion}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ListarProductosStyle>
  );
}

ListarProductos.propTypes = {
  accion: PropTypes.string.isRequired, // Definir que la acción es obligatoria
};

export default ListarProductos;
