import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import HistorialDisplayer from "../components/Custom/HistorialDisplayer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PlanClienteStyle = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px;
  gap: 20px;

  .headerWrapper {
    width: 100%;
    text-align: center;
    margin-bottom: 30px;

    h1 {
      font-size: 36px;
      font-weight: bold;
      color: #333;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin: 0;
    }
  }

  .contentWrapper {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    margin: 0 auto;
  }

  .leftContent {
    flex-basis: 50%; /* Asegura que ocupe el 50% del ancho del contenedor */
    padding: 2vmax;
    display: flex;
    flex-direction: column; /* Asegura que el contenido dentro se apile correctamente */
    box-sizing: border-box; /* Incluye el padding dentro del ancho total */
    overflow: hidden; /* Evita que el contenido se desborde */
  }

  .historialWrapper {
    flex-basis: 50%;
    padding: 1em;
    display: flex;
    flex-direction: column;
  }

  .documentoWrapper2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: auto; /* Asegura que el tamaño de cada slide sea adecuado */

    > .titleDocumento2 {
      font-size: 40px;
      text-align: center; /* Alinea el título */
    }

    .imageWrapper2 {
      display: block; /* Asegura que la imagen se muestre de manera correcta */

      img {
        width: 100%; /* Asegura que la imagen ocupe el 100% del ancho del contenedor */
        height: 500px; /* Mantiene la proporción original */
        object-fit: cover;
        border-radius: 20px;
      }
    }
  }

  .slick-slide {
    width: 100% !important; /* Forzar que los slides ocupen el 100% del contenedor */
    box-sizing: border-box; /* Asegura que el tamaño de cada slide no cause desbordamiento */
  }

  .slick-track {
    display: flex !important; /* Flexbox para alineación de los slides */
  }

  .slick-list {
    overflow: hidden; /* Asegura que solo se vea un slide a la vez */
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
`;

function PlanCliente(props) {
  const dataExampleHistorial = [
    {
      fecha: "02/02/2024",
      pedido: ["Fajitas", "Ensalada"],
      precio: "$20,000",
    },
    {
      fecha: "02/03/2024",
      pedido: ["Hamburguesa", "Papitas"],
      precio: "$15,000",
    },
    {
      fecha: "02/03/2024",
      pedido: ["Hamburguesa", "Papitas"],
      precio: "$15,000",
    },
    {
      fecha: "02/03/2024",
      pedido: ["Hamburguesa", "Papitas"],
      precio: "$15,000",
    },
    {
      fecha: "02/03/2024",
      pedido: ["Hamburguesa", "Papitas"],
      precio: "$15,000",
    },
    {
      fecha: "02/03/2024",
      pedido: ["Hamburguesa", "Papitas"],
      precio: "$15,000",
    },
    {
      fecha: "02/03/2024",
      pedido: ["Hamburguesa", "Papitas"],
      precio: "$15,000",
    },
    {
      fecha: "02/03/2024",
      pedido: ["Hamburguesa", "Papitas"],
      precio: "$15,000",
    },
    {
      fecha: "02/03/2024",
      pedido: ["Hamburguesa", "Papitas"],
      precio: "$15,000",
    },
    {
      fecha: "02/03/2024",
      pedido: ["Hamburguesa", "Papitas"],
      precio: "$15,000",
    },
    {
      fecha: "02/03/2024",
      pedido: ["Hamburguesa", "Papitas"],
      precio: "$15,000",
    },
    {
      fecha: "02/03/2024",
      pedido: ["Hamburguesa", "Papitas"],
      precio: "$15,000",
    },
  ];

  // Asegúrate de que la ruta de la imagen sea correcta
  const image = <img src="/evento5_4.jpg" alt="asd" className="imageWrapper" />;

  // Datos del carrusel
  const data = [
    {
      _id: "1",
      title: "Promo1",
      image: image,
    },
    {
      _id: "2",
      title: "Promo2",
      image: image,
    },
    {
      _id: "3",
      title: "Promo3",
      image: image,
    },
    {
      _id: "4",
      title: "Promo4",
      image: image,
    },
  ];

  // Configuración del carrusel
  const sliderSettings = {
    dots: true,
    infinite: false, // Desactiva el loop infinito
    speed: 500,
    slidesToShow: 1, // Siempre mostrar 1 imagen por vez
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, // Mostrar solo 1 imagen en pantallas grandes
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Mostrar solo 1 imagen en pantallas medianas
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Mostrar solo 1 imagen en pantallas pequeñas
        },
      },
    ],
  };

  return (
    <PlanClienteStyle>
      <div className="headerWrapper">
        <h1>Mi Plan</h1>
      </div>
      <div className="detallesPlan"></div>
      <div className="contentWrapper">
        <div className="leftContent">
          <Slider {...sliderSettings}>
            {data.map(({ _id, title, image }) => (
              <div key={_id} className="documentoWrapper2">
                <p className="titleDocumento2">{title}</p>
                <div className="imageWrapper2">{image}</div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="historialWrapper">
          <HistorialDisplayer
            {...{ title: "Historial de pedidos", data: dataExampleHistorial }}
          />
        </div>
      </div>
    </PlanClienteStyle>
  );
}

PlanCliente.propTypes = {};

export default PlanCliente;
