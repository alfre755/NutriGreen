import React from "react";
import PT from "prop-types";
import styled from "@emotion/styled";
import Slider from "react-slick";
import Button from "../../Main/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./Arrow";

const ListarDocumentosConImagenStyle = styled.section`
  display: flex;
  flex-direction: column;

  /* border-color: ${(props) => props.theme.colors.primary}; */

  > .headerWrapper {
    display: flex;
    justify-content: center;

    > .titulo {
      font-size: 50px;
    }
  }

  .slick-dots li {
    width: 20px; /* Ancho de cada dot */
    height: 15px; /* Altura de cada dot */
    margin: 0 5px; /* Espaciado entre los dots */
  }

  .slick-dots li button:before {
    font-size: 15px; /* Tamaño del icono del dot */
    color: rgba(0, 0, 0, 0.75); /* Color del dot */
  }

  .slick-dots li.slick-active button:before {
    color: #000; /* Color del dot activo */
  }

  .documentoWrapper {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em;
    height: auto;

    > .titleDocumento {
      font-size: 40px;
    }

    > .precioDocumento {
      font-size: 40px;
    }

    .imageWrapper {
      width: 250px;
      height: 250px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
      }
    }

    > .buttonsWrapper {
      display: flex;
      gap: 1em;
    }
  }
`;

function ListarDocumentosConImagen({ title, data, buttonConfig }) {
  const sliderSettings = {
    dots: true, // Mostrar puntos de navegación
    infinite: true, // Loop infinito
    speed: 500, // Velocidad de la transición
    slidesToShow: 4, // Mostrar 4 elementos a la vez
    slidesToScroll: 1, // Deslizar de a uno por vezs
    nextArrow: <NextArrow />, // Usa la flecha derecha personalizada
    prevArrow: <PrevArrow />, // Usa la flecha izquierda personalizada
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <ListarDocumentosConImagenStyle>
      <div className="headerWrapper">
        <p className="titulo">{title}</p>
      </div>
      <Slider {...sliderSettings}>
        {data.map(({ _id, title, image, precio }) => (
          <div key={_id} className="documentoWrapper">
            <p className="titleDocumento">{title}</p>
            <div className="imageWrapper">{image}</div>
            <p className="precioDocumento">Precio: {precio}</p>
            <div className="buttonsWrapper">
              {buttonConfig.map(({ type, label, onClick }, index) => (
                <Button key={index} type={type} onClick={onClick}>
                  {label}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </ListarDocumentosConImagenStyle>
  );
}

ListarDocumentosConImagen.propTypes = {
  title: PT.string.isRequired,
  data: PT.arrayOf(
    PT.shape({
      _id: PT.string.isRequired,
      title: PT.string.isRequired,
      image: PT.node.isRequired,
      precio: PT.oneOfType([PT.string, PT.number]).isRequired,
    })
  ).isRequired,
  buttonConfig: PT.arrayOf(
    PT.shape({
      type: PT.string,
      label: PT.string.isRequired,
      onClick: PT.func.isRequired,
    })
  ),
};

export default ListarDocumentosConImagen;
