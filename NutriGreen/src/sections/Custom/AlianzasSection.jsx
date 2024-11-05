import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const AlianzasSectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px 50px 50px;
  align-items: center;
  background-color: aliceblue;

  h1 {
    font-size: 35px;
  }

  .alianzasWrapper {
    display: flex;
    gap: 10px;

    .alianzaWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        height: 150px;
        width: 150px;
      }
    }
  }
`;

function AlianzasSection(props) {
  const objAlianzas = [
    {
      nombre: "Curico unido",
      logo: "public/evento5_4.jpg",
    },
    {
      nombre: "Curico unido",
      logo: "public/evento5_4.jpg",
    },
    {
      nombre: "Curico unido",
      logo: "public/evento5_4.jpg",
    },
    {
      nombre: "Curico unido",
      logo: "public/evento5_4.jpg",
    },
    {
      nombre: "Curico unido",
      logo: "public/evento5_4.jpg",
    },
  ];

  return (
    <AlianzasSectionStyle>
      <h1>Alianzas</h1>
      <div className="alianzasWrapper">
        {objAlianzas.map(({ nombre, logo }) => (
          <div className="alianzaWrapper" key={nombre}>
            <img src={logo} alt={nombre} />
            <h2>{nombre}</h2>
          </div>
        ))}
      </div>
    </AlianzasSectionStyle>
  );
}

AlianzasSection.propTypes = {};

export default AlianzasSection;
