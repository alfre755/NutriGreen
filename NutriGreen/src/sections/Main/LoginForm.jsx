import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  max-width: 400px;
  margin: 0 auto;
  flex-grow: 1;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3;
  }

  &.cancel {
    background-color: #6c757d;

    &:hover {
      background-color: #5a6268;
    }
  }
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
    <FormContainer>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
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
  );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired, // Función para manejar el login
};

export default LoginForm;
