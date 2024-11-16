import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;

    label {
      font-size: 14px;
      margin-bottom: 8px;
      font-weight: bold;
    }

    input,
    textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
    }

    button {
      padding: 10px;
      background-color: #007bff;
      color: #fff;
      font-size: 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }
  }

  .error {
    color: red;
    font-size: 12px;
  }
`;

function ContactoForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre) newErrors.nombre = "El nombre es obligatorio.";
    if (!formData.correo) {
      newErrors.correo = "El correo es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      newErrors.correo = "El correo no es válido.";
    }
    if (!formData.mensaje) newErrors.mensaje = "El mensaje es obligatorio.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    if (onSubmit) {
      onSubmit(formData);
    }
    alert("Mensaje enviado con éxito.");
    setFormData({
      nombre: "",
      correo: "",
      asunto: "",
      mensaje: "",
    });
  };

  return (
    <FormWrapper>
      <h1>Formulario de Contacto</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        {errors.nombre && <p className="error">{errors.nombre}</p>}

        <label htmlFor="correo">Correo Electrónico</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
        />
        {errors.correo && <p className="error">{errors.correo}</p>}

        <label htmlFor="asunto">Asunto</label>
        <input
          type="text"
          id="asunto"
          name="asunto"
          value={formData.asunto}
          onChange={handleChange}
        />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows="5"
          value={formData.mensaje}
          onChange={handleChange}
        />
        {errors.mensaje && <p className="error">{errors.mensaje}</p>}

        <button type="submit">Enviar</button>
      </form>
    </FormWrapper>
  );
}

ContactoForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactoForm;
