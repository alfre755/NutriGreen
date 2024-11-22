import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import CRUDSection from "../sections/Custom/CRUDSection";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import UsuarioAgregarForm from "../components/Custom/UsuarioAgregarForm"; // Formulario para crear usuarios
import UsuarioModificarForm from "../components/Custom/UsuarioModificarForm"; // Formulario para modificar usuarios
import ListarUsuarios from "../components/Custom/ListarUsuarios";
import Eliminar from "../sections/Custom/Eliminar";

const AdministracionStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .headerWrapper {
    font-size: 70px;
  }

  > .CRUDWrapper {
    display: flex;
  }
`;

function Administracion(props) {
  const navigate = useNavigate();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [activeAction, setActiveAction] = useState(""); // Para rastrear la acción activa (crear, modificar, eliminar, ver)
  const [activeCRUD, setActiveCRUD] = useState(""); // Para rastrear el tipo de CRUD (usuarios, productos, planes)

  const handleOpenPopup = (action, crud) => {
    setActiveAction(action);
    setActiveCRUD(crud);
    setPopupOpen(true);
    return true;
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setActiveAction("");
    setActiveCRUD("");
  };

  const renderPopupContent = () => {
    if (activeCRUD === "Usuarios") {
      switch (activeAction) {
        case "Crear":
          return <UsuarioAgregarForm />;
        case "Modificar":
          return (
            <ListarUsuarios
              {...{ accion: "Editar", ruta: "ModificarUsuario" }}
            />
          );
        case "Eliminar":
          return (
            <ListarUsuarios
              {...{ accion: "Eliminar", ruta: "EliminarUsuario" }}
            />
          );
        case "Ver":
          return (
            <ListarUsuarios
              {...{ accion: "Ver", ruta: "ModificarUsuario" }}
            />
          );
        default:
          return null;
      }
    }
    return <p>Formulario no disponible para esta acción</p>;
  };

  return (
    <AdministracionStyle>
      <div className="headerWrapper">
        <p>Administración</p>
      </div>
      <div className="CRUDWrapper">
        {/* CRUD Usuarios */}
        <CRUDSection
          {...{
            title: "CRUD Usuarios",
            buttonConfig: [
              {
                label: "Crear Usuarios",
                type: 1,
                onClick: () => handleOpenPopup("Crear", "Usuarios"),
              },
              {
                label: "Modificar Usuarios",
                type: 1,
                onClick: () => handleOpenPopup("Modificar", "Usuarios"),
              },
              {
                label: "Eliminar Usuarios",
                type: 1,
                onClick: () => handleOpenPopup("Eliminar", "Usuarios"),
              },
              {
                label: "Ver Usuarios",
                type: 1,
                onClick: () => handleOpenPopup("Ver", "Usuarios"),
              },
            ],
          }}
        />
        {/* CRUD Productos */}
        <CRUDSection
          {...{
            title: "CRUD Productos",
            buttonConfig: [
              {
                label: "Crear Productos",
                type: 1,
                onClick: () => {},
              },
              {
                label: "Modificar Productos",
                type: 1,
                onClick: () => {},
              },
              {
                label: "Eliminar Productos",
                type: 1,
                onClick: () => {},
              },
              {
                label: "Ver Productos",
                type: 1,
                onClick: () => {},
              },
            ],
          }}
        />
        {/* CRUD Planes */}
        <CRUDSection
          {...{
            title: "CRUD Planes",
            buttonConfig: [
              {
                label: "Crear Planes",
                type: 1,
                onClick: () => {},
              },
              {
                label: "Modificar Planes",
                type: 1,
                onClick: () => {},
              },
              {
                label: "Eliminar Planes",
                type: 1,
                onClick: () => {},
              },
              {
                label: "Ver Planes",
                type: 1,
                onClick: () => {},
              },
            ],
          }}
        />
      </div>

      {/* Popup Dinámico */}
      <Popup
        open={isPopupOpen}
        onClose={handleClosePopup}
        position="right center"
      >
        <div>
          <h3>
            {activeAction} {activeCRUD}
          </h3>
          {renderPopupContent()}
          <button onClick={handleClosePopup}>Cerrar</button>
        </div>
      </Popup>
    </AdministracionStyle>
  );
}

Administracion.propTypes = {};

export default Administracion;
