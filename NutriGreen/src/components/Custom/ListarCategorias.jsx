import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useData } from "../../hooks/useData";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { usePopup } from "../../hooks/UsePopUp";
import CategoriaEliminarForm from "./CategoriaEliminarForm"; // Formulario para eliminar categoría
import CategoriaModificarForm from "./CategoriaModificarForm"; // Formulario para modificar categoría

const ListarCategoriasStyle = styled.div``;

function ListarCategorias({ accion }) {
  const navigate = useNavigate();
  const { listarCategorias } = useData(); // Hook para obtener la función de listar categorías
  const [categorias, setCategorias] = useState([]); // Estado para las categorías
  const [loading, setLoading] = useState(true); // Estado de carga
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null); // Categoría seleccionada para edición
  const { showPopUp, hidePopUp } = usePopup();

  useEffect(() => {
    const cargarCategorias = async () => {
      setLoading(true);
      try {
        const data = await listarCategorias(); // Llamada al backend para listar categorías
        if (data) {
          setCategorias(data); // Guardar categorías en el estado
        }
      } catch (error) {
        console.error("Error al listar categorías:", error);
      } finally {
        setLoading(false);
      }
    };

    cargarCategorias();
  }, [listarCategorias]);

  const handleActionClick = (categoria) => {
    setCategoriaSeleccionada(categoria); // Guardar categoría seleccionada
    console.log("Categoría seleccionada:", categoria);

    if (accion === "Eliminar") {
      showPopUp(
        <CategoriaEliminarForm {...{ categoria, onCancel: hidePopUp }} />
      );
    } else if (accion === "Editar") {
      showPopUp(
        <CategoriaModificarForm
          {...{ categoriaId: categoria.categoria_id, onCancel: hidePopUp }}
        />
      );
    } else {
      navigate(`/Administracion/${categoria.categoria_id}`); // Redirigir a la vista de detalles de categoría
    }
  };

  if (loading) {
    return <p>Cargando categorías...</p>;
  }

  if (categorias.length === 0) {
    return <p>No hay categorías registradas.</p>;
  }

  return (
    <ListarCategoriasStyle>
      <h2>Lista de Categorías</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={categoria.categoria_id}>
              <td>{categoria.categoria_id}</td>
              <td>{categoria.nombre}</td>
              <td>
                <button onClick={() => handleActionClick(categoria)}>
                  {accion}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ListarCategoriasStyle>
  );
}

ListarCategorias.propTypes = {
  accion: PropTypes.string.isRequired, // Acción a realizar (Eliminar, Editar, Ver detalles)
};

export default ListarCategorias;
