import { useState, useRef, useEffect } from "react"; 
import proyectoService from "../services/proyectoService";
import ProyectoCard from "./ProyectoCard"; 
import FormularioProyecto from "./FormularioProyecto"; 
import '../assets/css/nav.css';
import '../assets/css/header.css';
import '../assets/css/lista.css';
import RegistroActividad from "./RegistroActividad"; 

function ListaProyectos() {
    
    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );

    const [busqueda, setBusqueda] = useState("");
    const [ultimaFecha, setUltimaFecha] = useState(null);

    const [nuevoProyecto, setNuevoProyecto] = useState({
        titulo: "",
        categoria: "",
        estado: "Pendiente",
        descripcion1: "", 
        descripcion2: "",
        linkGithub: "",   
        liderNombre: ""   
    });

    const esCargaInicial = useRef(true);

    useEffect(() => {
        if (esCargaInicial.current) {
            esCargaInicial.current = false;
            return; 
        }
        setUltimaFecha(new Date());
    }, [proyectos]); 

    const handleBusqueda = (e) => {
        const texto = e.target.value;
        setBusqueda(texto);
        setProyectos(proyectoService.buscarProyecto(texto)); 
    };

    const handleEliminar = (id) => {
        proyectoService.eliminarProyecto(id); 
        setProyectos(proyectoService.obtenerProyectos());
    };

    const handleCambio = (e) => {
        const { name, value } = e.target;
        setNuevoProyecto({
            ...nuevoProyecto,
            [name]: value
        });
    };

    const handleAgregar = () => {
        if (nuevoProyecto.titulo.trim() === "" || nuevoProyecto.categoria.trim() === "") {
            alert("Completa el título y la categoría.");
            return;
        }
        
        const proyecto = {
            id: Date.now(),
            titulo: nuevoProyecto.titulo,
            categoria: nuevoProyecto.categoria,
            estado: nuevoProyecto.estado,
            descripcionExtendida: [
                nuevoProyecto.descripcion1 || "Sin descripción (Párrafo 1).",
                nuevoProyecto.descripcion2 || "Sin descripción (Párrafo 2)."
            ],
            recursos: [
                { tipo: "GitHub", url: nuevoProyecto.linkGithub || "https://github.com" },
                { tipo: "PDF", url: "" },
                { tipo: "Drive", url: "" }
            ],
            equipo: [
                { nombre: nuevoProyecto.liderNombre || "Integrante sin nombre", rol: "Líder de Proyecto" }
            ]
        };

        proyectoService.agregarProyecto(proyecto);
        setProyectos(proyectoService.obtenerProyectos());
        
        setNuevoProyecto({ 
            titulo: "", 
            categoria: "", 
            estado: "Pendiente", 
            descripcion1: "", 
            descripcion2: "", 
            linkGithub: "", 
            liderNombre: "" 
        });
    };

    return (
        <div className="cuerpo" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h1>Lista de Proyectos</h1>
            
            <FormularioProyecto 
                nuevoProyecto={nuevoProyecto}
                handleCambio={handleCambio}
                handleAgregar={handleAgregar}
            />
            
            <input
                type="text"
                placeholder="Buscar proyecto..."
                value={busqueda}
                onChange={handleBusqueda}
            />

            <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ flex: 1 }}>
                    {proyectos.length === 0 ? (
                        <p>No se encontraron proyectos</p>
                    ) : (
                        <div className="contenedor-tarjetas">
                           {proyectos.map((proyecto) => (
                                <ProyectoCard 
                                    key={proyecto.id}
                                    proyecto={proyecto} 
                                    onEliminar={handleEliminar} 
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        
            {ultimaFecha && (
                <RegistroActividad fecha={ultimaFecha} />
            )}

        </div>
    );
}

export default ListaProyectos;