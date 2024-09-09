import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import SignIn from "../components/MaterialUI/SignIn/SignIn";
const LoginStyle = styled.section``;

function Login(props) {
  return (
    <LoginStyle>
      <SignIn />
    </LoginStyle>
  );
}

Login.propTypes = {};

export default Login;
