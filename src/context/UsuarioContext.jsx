import { createContext, useState } from "react";
import usuarioService from "../services/usuarioService";

export const UsuarioContext = createContext();

export function UsuarioProvider({ children }) {

    const [usuario, setUsuario] = useState(
        usuarioService.obtenerUsuarios()[0]
    );

    const actualizarPerfil = (nuevoUsuario) => {
        setUsuario(nuevoUsuario);
    };

    return (
        <UsuarioContext.Provider
            value={{
                usuario,
                actualizarPerfil
            }}
        >
            {children}
        </UsuarioContext.Provider>
    );
}