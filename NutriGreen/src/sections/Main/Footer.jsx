import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  color: black;
  height: 10vh;
  width: 100%;
`;

function Footer() {
  return (
    <FooterStyle>
      <p>@Derechos reservados Alfredo Gomez</p>
    </FooterStyle>
  );
}

Footer.propTypes = {};

export default Footer;
