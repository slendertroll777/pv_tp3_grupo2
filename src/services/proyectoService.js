const proyectoService = (() => {

    let proyectos = [
        {
            id: 1,
            titulo: "Sistema de Inscripciones",
            categoria: "Educación",
            estado: "En progreso"
        },
        {
            id: 2,
            titulo: "Campus Virtual",
            categoria: "Web",
            estado: "Completado"
        },
        {
            id: 3,
            titulo: "Gestión Académica",
            categoria: "Administración",
            estado: "Pendiente"
        },
        {
            id: 4,
            titulo: "Biblioteca Digital",
            categoria: "Educación",
            estado: "En progreso"
        },
        {
            id: 5,
            titulo: "Sistema de Tutorías",
            categoria: "Académico",
            estado: "Completado"
        }
    ];

    const obtenerProyectos = () => {
        return [...proyectos];
    };

    const agregarProyecto = (nuevoProyecto) => {
        proyectos.push(nuevoProyecto);
    };

    const eliminarProyecto = (id) => {
        proyectos = proyectos.filter(
            proyecto => proyecto.id !== id
        );
    };

    const buscarProyecto = (texto) => {
        return proyectos.filter((proyecto) =>
            proyecto.titulo
                .toLowerCase()
                .includes(texto.toLowerCase())
        );
    };

    return {
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto
    };
})();

export default proyectoService;