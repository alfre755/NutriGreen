import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import usePosition from "../hooks/usePosition";
import { useData } from "../hooks/useData";
import styled from "@emotion/styled";

const CategoriaDetalleStyle = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px;

  > .headerWrapper {
    > .title {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > .descripcion {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    h1 {
      font-size: 24px;
      font-weight: bold;
    }

    p {
      font-size: 16px;
      color: #666;
    }
  }

  > .productosWrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    padding: 50px;

    > .productoWrapper {
      flex: 0 1 calc(25% - 15px);
      box-sizing: border-box;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      background: #f9f9f9;

      .headerProducto {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .contentProducto {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > .imageWrapper {
          img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
          }
        }

        > .precio {
          font-size: 14px;
          font-weight: bold;
          color: #333;
        }
      }
    }
  }
`;

function CategoriaDetalle() {
  const data = useData();
  const [dataCategoria, setDataCategoria] = useState(null);
  const { currentPath, matchedRoute } = usePosition();

  const id =
    matchedRoute?.path === "/Tienda/:id" ? currentPath.split("/").pop() : null;

  useEffect(() => {
    async function fetchProductos() {
      const productos = await data.listarProductos();
      setDataCategoria(productos);
    }
    fetchProductos();
  }, [data, id]);

  if (!dataCategoria) {
    return (
      <div>
        <p>Categoria no encontrada</p>
      </div>
    );
  }
  const { productos = [] } = dataCategoria;
  console.log(dataCategoria.nombre);

  return (
    <CategoriaDetalleStyle>
      <div className="headerWrapper">
        <h1 className="title">{dataCategoria.nombre}</h1>
        <p className="descripcion">Descripción: {dataCategoria.descripcion}</p>
      </div>
      {productos ? (
        <div className="productosWrapper">
          {productos.map(({ _id, nombre, precio, imagen }) => {
            return (
              <div className="productoWrapper" key={_id}>
                <div className="headerProducto">{nombre}</div>
                <div className="contentProducto">
                  <div className="imageWrapper">
                    <img src={imagen} alt="" />
                  </div>
                  <p className="precio">${precio}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <p>no existe productos</p>
        </div>
      )}
    </CategoriaDetalleStyle>
  );
}

CategoriaDetalle.propTypes = {};

export default CategoriaDetalle;
