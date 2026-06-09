import { createContext, useState, useEffect } from "react";
import usuarioService from "../services/usuarioService";

export const UsuarioContext = createContext();

export function UsuarioProvider({ children }) {

    const [usuario, setUsuario] = useState(() => {
        const usuarioGuardado = localStorage.getItem("usuario_global");

        return usuarioGuardado
            ? JSON.parse(usuarioGuardado)
            : null;
    });

    useEffect(() => {

        if (usuario) {
            localStorage.setItem(
                "usuario_global",
                JSON.stringify(usuario)
            );
        }

    }, [usuario]);

    const actualizarPerfil = (nuevoUsuario) => {
        setUsuario(nuevoUsuario);
    };

    return (
        <UsuarioContext.Provider
            value={{
                usuario,
                setUsuario,
                actualizarPerfil
            }}
        >
            {children}
        </UsuarioContext.Provider>
    );
}