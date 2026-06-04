import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../views/Dashboard";
import ListaProyectos from "../components/ListaProyectos";
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
        path: "proyectos", 
        element: <ListaProyectos />,
      },
      {
        path: "proyectos/:id", 
        element: <DetalleProyecto />,
      },
      {
        path: "perfil", 
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