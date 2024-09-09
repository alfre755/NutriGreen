import React from "react";
import PropTypes from "prop-types";
import NavBar from "../../Main/NavBar";
import Footer from "../../../sections/Footer";
import styled from "@emotion/styled";

const MainViewStyle = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 95vh;
  justify-content: center;
  align-items: center;

  & main {
    flex: 2vmax;
    padding: 20px;
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
