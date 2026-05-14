import Header from "./components/Header";
import Footer from "./components/Footer";
import ListaProyectos from "./components/ListaProyectos";

function App() {
  return (
    <>
      <Header />

      <main>
        <ListaProyectos />
      </main>

      <Footer />
    </>
  );
}

export default App;