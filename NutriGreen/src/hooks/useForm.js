import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  // Maneja cambios en los inputs
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Resetea el formulario al estado inicial
  const onResetForm = () => {
    setFormState(initialState);
  };

  return {
    ...formState,
    formState,
    setFormState, // Esto expone la función para actualizar el estado desde fuera
    onInputChange,
    onResetForm,
  };
};
