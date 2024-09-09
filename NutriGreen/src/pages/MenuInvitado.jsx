import * as React from "react";
import PT from "prop-types";
import styled from "@emotion/styled";
import ContentWhitImage from "../sections/Main/ContentWhitImage";
import { useNavigate } from "react-router-dom";
import ListarDocumentosConImagen from "../components/LayaoutTemplate/ListarDocumentosConImagen";

const MenuInvitadoStyle = styled.section``;

function MenuInvitado(props) {
  const imageContentWhitImage = <img src="public/evento5_4.jpg" alt="asd" />;
  const navigate = useNavigate();

  const dataExampleListar = [
    {
      _id: 1,
      title: "Fajita",
      image: imageContentWhitImage,
      precio: "$20.000",
    },
  ];

  return (
    <MenuInvitadoStyle>
      <ContentWhitImage
        {...{
          title: "Reduce tu peso en grasa y mejora tu composición corporal",
          subtitle:
            "Desarrollamos planes de alimentación saludable en base a tus gustos,objetivo nutricional y te llevamos la comida todos los días a tu casa.Automatiza tu cocina y olvídate de cocinar",
          image: imageContentWhitImage,
          buttonConfig: [
            { type: 1, label: "Ver planes", onClick: () => {} },
            { type: 1, label: "Ir a comprar ", onClick: () => {} },
          ],
        }}
      />
      <ListarDocumentosConImagen
        {...{ title: "Productos Destacados", data: dataExampleListar }}
      />
    </MenuInvitadoStyle>
  );
}

MenuInvitado.propTypes = {};

export default MenuInvitado;
