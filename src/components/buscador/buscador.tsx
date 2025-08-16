import "./buscador.css";

interface SearchProps {
  query: string;
  setQuery: (query: string) => void;
}

export const Search = ({ query, setQuery }: SearchProps) => {
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
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
      />
    </>
  );
};
