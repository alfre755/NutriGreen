import React from "react";
import PT from "prop-types";
import styled from "@emotion/styled";
import Button from "../../Main/Button";

const ListarDocumentosConImagenStyle = styled.section`
  display: flex;
  flex-direction: column;

  > .headerWrapper {
    display: flex;
    justify-content: center;

    > .titulo {
      font-size: 50px;
    }
  }

  > .documentosWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1em;

    > .documentoWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-basis: 20%;
      padding: 1em;
      height: 20vh;

      > .titleDocumento {
        font-size: 40px;
      }

      > .precioDocumento {
        font-size: 40px;
      }

      .imageWrapper {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
        }
      }
    }
  }
`;

function ListarDocumentosConImagen({ title, data, buttonConfig }) {
  return (
    <ListarDocumentosConImagenStyle>
      <div className="headerWrapper">
        <p className="titulo">{title}</p>
      </div>
      <div className="documentosWrapper">
        {data.map(({ _id, title, image, precio }) => {
          return (
            <div key={_id} className="documentoWrapper">
              <p className="titleDocumento">{title}</p>
              <div className="imageWrapper">{image}</div>
              <p className="precioDocumento">Precio: {precio}</p>
              <div className="buttonsWrapper">
                {buttonConfig.map(({ type, label, onClick }, index) => {
                  return (
                    <Button key={index} type={type} onClick={onClick}>
                      {label}
                    </Button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </ListarDocumentosConImagenStyle>
  );
}

ListarDocumentosConImagen.propTypes = {
  title: PT.string.isRequired,
  data: PT.arrayOf(
    PT.shape({
      _id: PT.string.isRequired,
      title: PT.string.isRequired,
      image: PT.node.isRequired, // Cambiado a node para aceptar JSX
      precio: PT.oneOfType([PT.string, PT.number]).isRequired,
      buttonConfig: PT.arrayOf(
        PT.shape({
          type: PT.string,
          label: PT.string.isRequired,
          onClick: PT.func.isRequired,
        })
      ).isRequired, // Asegurar que buttonConfig esté presente y sea un array de objetos
    })
  ).isRequired,
};

export default ListarDocumentosConImagen;
