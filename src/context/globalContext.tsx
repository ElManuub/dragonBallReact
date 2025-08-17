import { createContext, useContext, useState } from "react";

//tipado para mi createContext
interface GlobalContextType {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>; //esto es el tipado para la función que actualiza el estado
}
//tipado para el valor inicial
const emptyGlobalState: string = "";

//context
export const GlobalContext = createContext<GlobalContextType>({ value: emptyGlobalState, setValue: () => {} });

//tipado para las props del provider
interface GlobalContextProps {
    children: React.ReactNode; 
}

//provider
export const GlobalContextProvider = ({ children }: GlobalContextProps) => {
    const [value, setValue] = useState<string>(emptyGlobalState);

  return (
    <GlobalContext.Provider value={{ value, setValue }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);

    if(!context) throw new Error("useGlobalContext must be used within a GlobalContextProvider");

    return context;
}