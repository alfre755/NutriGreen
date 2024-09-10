import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import CRUDSection from "../sections/Custom/CRUDSection";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

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

  return (
    <AdministracionStyle>
      <div className="headerWrapper">
        <p>Administracion</p>
      </div>
      <div className="CRUDWrapper">
        <CRUDSection
          {...{
            title: "CRUD Usuarios",
            buttonConfig: [
              {
                label: "Crear Usuarios",
                type: 1,
                onClick: () => {
                  return (
                    <Popup
                      trigger={<button> Trigger</button>}
                      position="right center"
                    >
                      <div>Popup content here !!</div>
                    </Popup>
                  );
                },
              },
              { label: "Modificar Usuarios", type: 1, onClick: () => {} },
              { label: "Eliminar Usuarios", type: 1, onClick: () => {} },
              { label: "Ver Usuarios", type: 1, onClick: () => {} },
            ],
          }}
        />
        <CRUDSection
          {...{
            title: "CRUD Productos",
            buttonConfig: [
              { label: "Crear Productos", type: 1, onClick: () => {} },
              { label: "Modificar Productos", type: 1, onClick: () => {} },
              { label: "Eliminar Productos", type: 1, onClick: () => {} },
              { label: "Ver Productos", type: 1, onClick: () => {} },
            ],
          }}
        />
        <CRUDSection
          {...{
            title: "CRUD Planes",
            buttonConfig: [
              { label: "Crear Planes", type: 1, onClick: () => {} },
              { label: "Modificar Planes", type: 1, onClick: () => {} },
              { label: "Eliminar Planes", type: 1, onClick: () => {} },
              { label: "Ver Planes", type: 1, onClick: () => {} },
            ],
          }}
        />
      </div>
    </AdministracionStyle>
  );
}

Administracion.propTypes = {};

export default Administracion;
