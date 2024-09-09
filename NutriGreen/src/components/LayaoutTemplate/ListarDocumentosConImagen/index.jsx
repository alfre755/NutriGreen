import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const ListarDocumentosConImagenStyle = styled.section`
  display: flex;
  flex-direction: column;

  > .headerWrapper {
    display: flex;
    justify-content: center;
  }
`;

function ListarDocumentosConImagen({ title, data }) {
  return (
    <ListarDocumentosConImagenStyle>
      <div className="headerWrapper">
        <p className="titulo">{title}</p>
      </div>
      <div className="documentosWrapper">
        {data.map((documento) => {
          return (
            <div key={documento._id} className="documentoWrapper">
              {documento.title}
            </div>
          );
        })}
      </div>
    </ListarDocumentosConImagenStyle>
  );
}

ListarDocumentosConImagen.propTypes = {};

export default ListarDocumentosConImagen;
