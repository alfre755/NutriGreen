import React from "react";
import PropTypes from "prop-types";
import NavBar from "../../Main/NavBar";
import Footer from "../../../sections/Footer";

function MainView({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

MainView.propTypes = {};

export default MainView;
