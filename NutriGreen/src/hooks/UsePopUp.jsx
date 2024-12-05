import React, { createContext, useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const location = useLocation(); // Detectar cambios de ruta

  // Cerrar popup al cambiar de ruta
  useEffect(() => {
    if (isVisible) {
      hidePopUp();
    }
  }, [location]);

  const showPopUp = (content) => {
    console.log("Intentando mostrar un nuevo pop-up...");
    // Cerrar el popup actual si está visible
    if (isVisible) {
      hidePopUp();
    }

    // Asegurarse de que el cierre ha ocurrido antes de abrir otro
    setTimeout(() => {
      setPopupContent(content);
      setIsVisible(true);
      console.log("Pop-up mostrado.");
    }, 0);
  };

  const hidePopUp = () => {
    console.log("Ocultando pop-up...");
    setIsVisible(false);
    setPopupContent(null);
  };

  return (
    <PopupContext.Provider
      value={{ isVisible, popupContent, showPopUp, hidePopUp }}
    >
      {children}
      {isVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            {popupContent}
            <button onClick={hidePopUp}>Cerrar</button>
          </div>
        </div>
      )}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  return useContext(PopupContext);
};
