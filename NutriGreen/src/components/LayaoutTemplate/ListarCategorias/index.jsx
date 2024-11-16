import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const ListarCategoriasStyle = styled.section`
  display: flex;
  flex-direction: column;
  padding: 100px 100px 100px;

  > .headerWrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    > h1 {
      font-size: 28px;
    }
  }

  > .contentWrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    .categoriaCard {
      flex: 1 1 calc(33.33% - 20px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      height: 200px;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.3s ease;
      background-size: cover;
      background-position: center;

      &:hover {
        transform: scale(1.05);
      }

      > h2 {
        background: rgba(0, 0, 0, 0.5);
        color: white;
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);

        margin: 0;
        width: 100%;
        text-align: center;
        border-radius: 0 0 8px 8px;
      }
    }
  }
`;

function ListarCategorias({ title, categorias }) {
  const navigate = useNavigate();

  const handleCategoria = (id) => {
    navigate(`/Tienda/${id}`);
  };

  return (
    <ListarCategoriasStyle>
      <div className="headerWrapper">
        <h1>{title}</h1>
      </div>
      <div className="contentWrapper">
        {categorias.map(({ title, id, imagen }) => (
          <div
            className="categoriaCard"
            key={id}
            onClick={() => handleCategoria(id)}
            style={{ backgroundImage: `url(${imagen})` }}
          >
            <h2>{title}</h2>
          </div>
        ))}
      </div>
    </ListarCategoriasStyle>
  );
}

ListarCategorias.propTypes = {
  title: PropTypes.string.isRequired,
  categorias: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      imagen: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListarCategorias;
