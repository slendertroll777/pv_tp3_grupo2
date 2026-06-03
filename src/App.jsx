import { Routes, Route } from "react-router-dom";

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
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/proyectos" element={<ListaProyectos />} />

          <Route
            path="/proyectos/:id"
            element={<DetalleProyecto />}
          />

          <Route
            path="/perfil"
            element={<PerfilUsuario />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;