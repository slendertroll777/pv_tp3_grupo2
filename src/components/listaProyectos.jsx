import { useState } from "react";
import proyectoService from "../services/proyectoService";
import '../assets/css/nav.css';
import '../assets/css/header.css';
import '../assets/css/lista.css';
 
function ListaProyectos() {
    //obtenerProyectos()
const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );
//busqueda
const [busqueda, setBusqueda] = useState("");
//para el agregar
const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: "",
    categoria: "",
    estado: "Pendiente"
});
 
    //tiempo real
const handleBusqueda = (e) => {
        const texto = e.target.value;
        setBusqueda(texto);
        setProyectos(proyectoService.buscarProyecto(texto));
    };
    // eliminar proyecto y act
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
        alert("Completa el título y la categoria.");
        return;
    }
const proyecto = {
        id: Date.now(),
        titulo: nuevoProyecto.titulo,
        categoria: nuevoProyecto.categoria,
        estado: nuevoProyecto.estado
    };
proyectoService.agregarProyecto(proyecto);
setProyectos(proyectoService.obtenerProyectos());
setNuevoProyecto({ titulo: "", categoria: "", estado: "Pendiente" });
};

    
 
return (
<div>
            <h1>Lista de Proyectos</h1>
            <div>
    <h2>Agregar Proyecto</h2>
<input
        type="text"
        name="titulo"
        placeholder="Título del proyecto"
        value={nuevoProyecto.titulo}
        onChange={handleCambio}
    />
<input
        type="text"
        name="categoria"
        placeholder="Categoría"
        value={nuevoProyecto.categoria}
        onChange={handleCambio}
    />
<select name="estado" value={nuevoProyecto.estado} onChange={handleCambio}>
        <option value="Pendiente">Pendiente</option>
        <option value="En progreso">En progreso</option>
        <option value="Completado">Completado</option>
</select>
    <button onClick={handleAgregar}>Agregar Proyecto</button>
</div>
 
            
    <input
            type="text"
            placeholder="Buscar proyecto..."
            value={busqueda}
            onChange={handleBusqueda}
     />
 
           
{proyectos.length === 0 ? (
        <p>No se encontraron proyectos</p>
            ) : (
        <div>
                {proyectos.map((proyecto) => (
                        <div key={proyecto.id}>
                        <h2>{proyecto.titulo}</h2>
                        <p>{proyecto.categoria} · {proyecto.estado}</p>
 
                           
                <button onClick={() => handleEliminar(proyecto.id)}>
                                Eliminar
                </button>
                </div>
                    ))}
        </div>
            )}
</div>
    );
}
 
export default ListaProyectos;