import "./menu.css";
import { ApiPersonajes } from "../../tarjetas/apiPersonajes";
import { Search } from "../../buscador/buscador";
import { Boton } from "../../boton/boton";
// import { useContext } from "react";
// import { manuubContext } from "../../../App";

export function Menu() {

  return (
    <div className="menu">
      
      <div className="search">
        <div className="buttons">
          <Boton>Nuevo Personaje</Boton>
          <Boton>Eliminar Personaje</Boton>
        </div>
        <Search />
      </div>

      <section className="characters">
        <ApiPersonajes />
      </section>

    </div>
  );
}
