import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import LoginForm from "../sections/Main/LoginForm";

const LoginStyle = styled.section`
  display: flex;
  flex-grow: 1;
`;

function Login(props) {
  return (
    <LoginStyle>
      <LoginForm />
    </LoginStyle>
  );
}

Login.propTypes = {};

export default Login;
