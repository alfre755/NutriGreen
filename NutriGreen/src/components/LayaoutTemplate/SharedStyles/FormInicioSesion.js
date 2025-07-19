import styled from "@emotion/styled";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  max-width: 380px;
  width: 100%; /* Permite que se ajuste a su contenedor */
  height: 400px;
  overflow: hidden; /* Evita desbordamiento de contenido */
  padding: 20px; /* Espaciado interno */
  box-sizing: border-box; /* Asegura que padding no afecte el ancho */
`;


export const InputField = styled.input`
  width: 100%;
  padding: 8px 10px; /* Ajuste menor */
  margin-bottom: 10px; /* Espaciado más consistente */
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem; /* Reduce ligeramente el tamaño */
  box-sizing: border-box; /* Asegura que padding no rompa el diseño */
`;


export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que los botones se ajusten en líneas */
  gap: 10px;
  justify-content: center; /* Centra los botones */
  margin-top: 15px; /* Ajuste más ligero */
`;


export const Button = styled.button`
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
