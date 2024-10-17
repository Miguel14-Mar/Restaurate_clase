import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { MenuCrear } from "../../componentes/menu/MenuCrear";
import { MenuAdmin } from "../../componentes/menu/MenuAdmin";
import { MenuListar } from "../../componentes/menu/MenuListar";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/mencre" element={<MenuCrear />} />

      <Route path="/melist" element={<MenuListar />} />

      <Route path="/menadmin" element={<MenuAdmin />} />

      <Route path="/menacer" element={<Acerca />} />

      <Route path="/*" element={<NoEncontrado />} />

    </Routes>
  );
};
