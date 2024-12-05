import React from "react";
import styled from "@emotion/styled";
import { usePopup } from "../../../hooks/UsePopUp";


const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
`;

const Popup = () => {
  const { isVisible, popupContent, hidePopUp } = usePopup();

  if (!isVisible) return null; // No renderizar el popup si no está visible

  return (
    <PopupOverlay>
      <PopupContent>
        {popupContent}
        <button onClick={hidePopUp}>Cerrar</button>
      </PopupContent>
    </PopupOverlay>
  );
};

export default Popup;
