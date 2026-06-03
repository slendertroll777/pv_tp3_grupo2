import { Link, Outlet } from "react-router-dom";
import routes from "./routes/routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListaProyectos from "./components/ListaProyectos";
import Dashboard from "./views/Dahsboard";
import DetalleProyecto from "./views/DetalleProyecto";
import perfilusuario from "./views/PerfilUsuario";

function App() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;