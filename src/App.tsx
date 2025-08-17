//import { createContext , StrictMode, useState} from "react";
import "./App.css";
import { Footer, Header } from "./components";
import { Menu } from "./components";
import { GlobalContextProvider } from "./context/globalContext";

//canal de comunicacion manuubContext <-----> otro componente
//tiene que funcionar dentro de un <Provider>
//export const manuubContext = createContext({});

//const [manuubState, setManuubState] = useState(false);

function App() {

  return (
      <GlobalContextProvider>
        <Header />
        <Menu />
        <Footer />
      </GlobalContextProvider>
  );
}

export default App;
