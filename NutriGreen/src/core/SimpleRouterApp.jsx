import React from "react";
import PT from "prop-types";
import { Route, Routes } from "react-router-dom";

import Administracion from "../pages/Administracion";
import Menu from "../pages/Menu";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Planes from "../pages/Planes";
import Tienda from "../pages/Tienda";
import Contactanos from "../pages/Contactanos";
import PlanCliente from "../pages/PlanCliente";
import CategoriaDetalle from "../pages/CategoriaDetalle";
import UsuarioDetalle from "../pages/UsuarioDetalle";
import ProductoDetalle from "../pages/ProductoDetalle";

function SimpleRouterApp() {
  return (
    <Routes>
      <Route path="/" exact element={<Menu />} />
      <Route path="/Administracion" exact element={<Administracion />} />
      <Route path="/Login" exact element={<Login />} />
      <Route path="/Planes" exact element={<Planes />} />
      <Route path="/Tienda" exact element={<Tienda />} />
      <Route path="/Contactanos" exact element={<Contactanos />} />
      <Route path="/MiPlan" exact element={<PlanCliente />} />
      <Route path="/Tienda/:id" element={<CategoriaDetalle />} />
      <Route path="/Administracion/:id" element={<UsuarioDetalle />} />
      <Route path="/Administracion/:id" element={<ProductoDetalle />} />
      <Route path="*" exact element={<NotFound />} />
    </Routes>
  );
}

SimpleRouterApp.propTypes = {};

export default SimpleRouterApp;
