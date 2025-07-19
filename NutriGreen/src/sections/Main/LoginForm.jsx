import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  ButtonGroup,
  FormContainer,
  InputField,
} from "../../components/LayaoutTemplate/SharedStyles/FormInicioSesion";
import styled from "@emotion/styled";

const LoginFormStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Asegura que ocupe toda la pantalla */
  width: 100%;
`;

function LoginForm({ onLogin }) {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!correo || !contraseña) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Llamada a la función de login proporcionada como prop
    onLogin({ correo, contraseña });
  };

  return (
    <LoginFormStyle>
      <FormContainer>
        <h2 className="titulo">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="form">
          <InputField
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <InputField
            type="password"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
          <ButtonGroup>
            <Button type="submit">Ingresar</Button>
            <Button
              type="button"
              className="cancel"
              onClick={() => {
                setCorreo("");
                setContraseña("");
              }}
            >
              Cancelar
            </Button>
          </ButtonGroup>
        </form>
      </FormContainer>
    </LoginFormStyle>
  );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired, // Función para manejar el login
};

export default LoginForm;
