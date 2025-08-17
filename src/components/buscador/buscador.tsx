import { useGlobalContext } from "../../context/globalContext";
import "./buscador.css";

export const Search = () => {

  const { value,setValue } = useGlobalContext();//mi contexto global

  return (
    <>
      <label 
        className="input-label" 
        htmlFor="input-search"
      >
        Buscar por nombre
      </label>

      <input
        type="search"
        className="input-search"
        id="input-search"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      />
    </>
  );
};
