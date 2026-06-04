import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../views/Dashboard";
import DetalleProyecto from "../views/DetalleProyecto";
import PerfilUsuario from "../views/PerfilUsuario";
import ErrorPage from "../views/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        element: <Dashboard />, 
      },
      {
        path: "detalle-proyecto", 
        element: <DetalleProyecto />,
      },
      {
        path: "perfil-usuario", 
        element: <PerfilUsuario />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default routes;