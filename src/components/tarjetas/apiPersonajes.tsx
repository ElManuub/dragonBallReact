import { useFetch } from "../../hooks/useFetch";
import './tarjetas.css'

interface Character {
  id: number;
  name: string;
  age: number;
  breed: string;
  power: string;
  character_type: string;
  techniques: string[];
  image_url: string;
}

interface ApiResponse {
  data: Character[];
}

interface Props {
  query: string;
}

export function ApiPersonajes({query}: Props) {

  const { data, loading, error } = useFetch<ApiResponse>(
    "http://127.0.0.1:8000/api/personajes"
  );


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Hubo un error: {error.message}</div>;

  const characters = data?.data || [];

    // 🔎 Filtramos según query
  const filtered = characters.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {
        filtered.length > 0 ? (
        filtered.map((item: Character) => (
          <div key={item.id} className="card">
            <img src={item.image_url} alt="img_character" />
            <h2>{item.name}</h2>
            <p><strong>Edad:</strong> {item.age}</p>
            <p><strong>Raza:</strong> {item.breed}</p>
            <p><strong>Poder:</strong> {item.power}</p>
            <p><strong>Tipo:</strong> {item.character_type}</p>
            <p>
              <strong>Técnicas:</strong>{" "}
              {item.techniques.length > 0
                ? item.techniques.join(", ")
                : "Ninguna"}
            </p>
          </div>
        ))
      ) : (
        <div>No se encontraron personajes.</div>
      )
      }
    </>
  );
}

