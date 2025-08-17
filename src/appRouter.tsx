import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CrearPersonajes } from "./pages/public/crearPersonajes";
import { privateGuard } from "./guard/privateGuard";
import { PrivateRouter } from "./pages/private/privateRouter";
import { RoutesWithNotFound } from "./components/boton/routesWithNotFound/routesWithNotFound";

interface Props {
  children: React.ReactNode; //cualquier cosa que pueda ser renderizable por react
}

export const AppRouter = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Routes>
          <Route path="/personajes/crear" element={<CrearPersonajes />} />
          <Route element={privateGuard()}>
            <Route path="/private/*" element={<PrivateRouter />} />
          </Route>
        </Routes>
      </RoutesWithNotFound>
      {children}
    </BrowserRouter>
  );
};
