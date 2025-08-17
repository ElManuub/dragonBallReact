import { Navigate, Route } from "react-router-dom";
import { Dashboard } from "./dashboard";
import { RoutesWithNotFound } from "../../components/boton/routesWithNotFound/routesWithNotFound";

export const PrivateRouter = () => {
  return (
    <RoutesWithNotFound>
        {/* /private/ */}
        <Route path="/" element={<Navigate to="/dashboard"/>} />
        <Route path="/dashboard" element={<Dashboard />} />
    </RoutesWithNotFound>
  );
};
