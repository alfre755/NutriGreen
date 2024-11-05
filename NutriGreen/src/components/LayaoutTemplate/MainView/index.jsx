import React from "react";
import PropTypes from "prop-types";
import NavBar from "../../Main/NavBar";
import Footer from "../../../sections/Main/Footer";
import styled from "@emotion/styled";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const MainViewStyle = styled.section`
  display: flex;
  flex-direction: column;

  min-height: 100vh; /* Asegura que el contenedor ocupe todo el alto de la ventana */

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    border: none;
  }

  main {
    flex: 1; /* El contenido ocupará el espacio restante */
  }

  footer {
    flex-shrink: 0; /* Evita que el footer se comprima */
  }
`;

function MainView({ children }) {
  return (
    <MainViewStyle>
      <NavBar />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </MainViewStyle>
  );
}

MainView.propTypes = {
  children: PropTypes.node,
};

export default MainView;
