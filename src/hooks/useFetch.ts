import { useEffect, useState } from "react"; //importamos los estados

//tipamos data(generico o null para devolver cualquier tipo de datos) y typeError(error o null)
type Data<T> = T | null;
type typeError = Error | null;

interface Params<T> {
  //interfaz que define lo que retornara mi hook
  data: Data<T>;
  loading: boolean;
  error: typeError;
}

//lleva un parametro que seria la url

export const useFetch = <T>(url: string): Params<T> => {
  //tipado generico para el tipo de respuesta

  const [data, setData] = useState<Data<T>>(null); //guarda la respuesta ya parseada.
  const [loading, setLoading] = useState<boolean>(true); //true mientras se pide; false cuando termina.
  const [error, setError] = useState<typeError>(null); //si algo sale mal, se guarda aquí.

  useEffect(() => {
    setLoading(true); // Indicamos que la carga ha comenzado

    const controller = new AbortController(); // para poder cancelar la petición si el componente se desmonta.

    const fetchData = async () => {
      
      try {
        const response = await fetch(url, { 
            signal: controller.signal 
        });
        
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result); //cualquier tipo de dato
        setError(null);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false); //quitar carga
      }
    };

    fetchData(); // Llamamos a la función para obtener los datos

    return () => {
      controller.abort(); // Limpiamos la solicitud al desmontar el componente
    };
  }, [url]); //useEffect se ejecuta cuando cambia url.

  return { data, loading, error }; //retornamos el estado de cada uno
};
