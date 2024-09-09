import React from "react";
import PT from "prop-types";
import { Route, Routes } from "react-router-dom";

import Administracion from "../pages/Administracion";
import MenuInvitado from "../pages/MenuInvitado";
import MenuCliente from "../pages/MenuCliente";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

function SimpleRouterApp() {
  return (
    <Routes>
      <Route path="/" exact element={<MenuInvitado />} />
      <Route path="/MenuCliente" exact element={<MenuCliente />} />
      <Route path="/Administracion" exact element={<Administracion />} />
      <Route path="/Login" exact element={<Login />} />
      <Route path="*" exact element={<NotFound />} />
    </Routes>
  );
}

SimpleRouterApp.propTypes = {};

export default SimpleRouterApp;
