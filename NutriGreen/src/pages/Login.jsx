import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import LoginForm from "../sections/Main/LoginForm";

const LoginStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
`;

function Login(props) {
  const onLogin = async (credenciales) => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credenciales),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error al iniciar sesión");
      }

      // Si el login es exitoso
      alert("Inicio de sesión exitoso");
      console.log("Token recibido:", data.token);
      console.log("Datos del usuario:", data.usuario);

      // Aquí puedes guardar el token en el almacenamiento local o redirigir al usuario
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  };
  return (
    <LoginStyle>
      <LoginForm {...{ onLogin }} />
    </LoginStyle>
  );
}

Login.propTypes = {};

export default Login;
