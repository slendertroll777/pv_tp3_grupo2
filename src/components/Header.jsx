import "/src/assets/css/header.css";
import Nav from "./Nav";
import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

const Header = () => {

    const { usuario } =
        useContext(UsuarioContext);

    return (
        <header>

            <h1>
                Gestión de Proyectos Educativos
            </h1>

            {usuario && (
                <>
                    <div>
                        {usuario.nombre}
                        {" - "}
                        {usuario.rol}
                    </div>

                    <Nav />
                </>
            )}

        </header>
    );
};

export default Header;