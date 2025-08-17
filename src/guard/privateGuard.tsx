import { Navigate, Outlet } from "react-router-dom";

export const privateGuard = () => {
  const isLoggedIn = false; 
  // const token = localStorage.getItem("token");
  // isLoggedIn = token !== null;

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

//replace reemplaza la ruta actual en el historial de navegación
//Outlet renderiza los componentes hijos de la ruta actual