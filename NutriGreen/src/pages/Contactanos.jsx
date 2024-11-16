import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import ContactoForm from "../components/Custom/ContactoForm";

const ContactanosStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #f9f9f9;

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
    max-width: 1200px;
  }

  .leftWrapper {
    flex: 1;
    padding-right: 20px;
  }

  .rightWrapper {
    flex: 1;
    padding-left: 20px;

    iframe {
      border: 0;
      width: 100%;
      height: 450px;
    }
  }

  /* Añadir responsividad */
  @media (max-width: 768px) {
    .contentWrapper {
      flex-direction: column;
      align-items: center;
    }

    .leftWrapper,
    .rightWrapper {
      padding: 0;
      width: 100%;
    }

    .rightWrapper iframe {
      height: 300px;
    }
  }
`;

function Contactanos(props) {
  return (
    <ContactanosStyle>
      <div className="headerWrapper">
        <h1>Contáctanos</h1>
      </div>
      <div className="contentWrapper">
        <div className="leftWrapper">
          <ContactoForm />
        </div>
        <div className="rightWrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3269.6147012982306!2d-71.24369380772843!3d-34.96626460064131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scl!4v1731768545801!5m2!1ses!2scl"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </ContactanosStyle>
  );
}

Contactanos.propTypes = {};

export default Contactanos;
