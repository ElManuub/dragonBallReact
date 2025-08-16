import "./menu.css";
import { ApiPersonajes } from "../../tarjetas/apiPersonajes";
import { Search } from "../../buscador/buscador";
import { Boton } from "../../boton/boton";
import { useState } from "react";

export function Menu() {
  const [query, setQuery] = useState("");
  return (
    <div className="menu">
      
      <div className="search">
        <div className="buttons">
          <Boton>Nuevo Personaje</Boton>
          <Boton>Eliminar Personaje</Boton>
        </div>
        <Search query={query} setQuery={setQuery} />
      </div>

      <section className="characters">
        <ApiPersonajes query={query} />
      </section>

    </div>
  );
}
