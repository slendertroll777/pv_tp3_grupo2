import { useState } from "react";
import proyectoService from "../services/proyectoService";
 
function ListaProyectos() {
    //obtenerProyectos()
const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );
    //busqueda
const [busqueda, setBusqueda] = useState("");
 
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


    
 
return (
<div>
            <h1>Lista de Proyectos</h1>
 
            
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