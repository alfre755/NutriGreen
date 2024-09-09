import React from "react";
import PropTypes from "prop-types";
import NavBar from "../../Main/NavBar";
import Footer from "../../../sections/Main/Footer";
import styled from "@emotion/styled";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const MainViewStyle = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 95vh;

  & main {
    flex: 1;
    padding: 2vmax;
  }

  & footer {
    flex-shrink: 0;
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

MainView.propTypes = {};

export default MainView;
