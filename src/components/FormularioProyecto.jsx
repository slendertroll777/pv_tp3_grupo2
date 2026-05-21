function FormularioProyecto({ nuevoProyecto, handleCambio, handleAgregar }) {
    
    const { 
        titulo, 
        categoria, 
        estado, 
        descripcion1, 
        descripcion2, 
        linkGithub, 
        liderNombre 
    } = nuevoProyecto;

    return (
        <div className="formulario-proyecto" style={{ border: "1px solid #ddd", padding: "20px", marginBottom: "20px", borderRadius: "8px", backgroundColor: "#f9f9f9", color: "#333" }}>
            <h2>Agregar Nuevo Proyecto</h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "500px" }}>
                
                <div>
                    <label style={{ display: "block", fontWeight: "bold" }}>Título:</label>
                    <input
                        type="text"
                        name="titulo"
                        placeholder="Ej: Plataforma Web Educativa"
                        value={titulo} 
                        onChange={handleCambio}
                        style={{ width: "100%", padding: "6px", color: "#000", backgroundColor: "#fff" }} // 🎨 Color de letra negro forzado
                    />
                </div>

                <div>
                    <label style={{ display: "block", fontWeight: "bold" }}>Categoría:</label>
                    <input
                        type="text"
                        name="categoria"
                        placeholder="Ej: Desarrollo Web"
                        value={categoria} 
                        onChange={handleCambio}
                        style={{ width: "100%", padding: "6px", color: "#000", backgroundColor: "#fff" }} // 🎨 Color de letra negro forzado
                    />
                </div>

                <div>
                    <label style={{ display: "block", fontWeight: "bold" }}>Estado:</label>
                    <select 
                        name="estado" 
                        value={estado} 
                        onChange={handleCambio}
                        style={{ width: "100%", padding: "6px", color: "#000", backgroundColor: "#fff" }} // 🎨 Color de letra negro forzado
                    >
                        <option value="Pendiente">Pendiente</option>
                        <option value="En progreso">En progreso</option>
                        <option value="Completado">Completado</option>
                    </select>
                </div>

                <div style={{ borderTop: "1px solid #ccc", paddingTop: "10px" }}>
                    <h4 style={{ margin: "5px 0" }}>Descripción Extendida</h4>
                    <input
                        type="text"
                        name="descripcion1"
                        placeholder="Párrafo 1: ¿De qué trata el proyecto?"
                        value={descripcion1}
                        onChange={handleCambio}
                        style={{ width: "100%", padding: "6px", marginBottom: "6px", color: "#000", backgroundColor: "#fff" }} // 🎨 Color de letra negro forzado
                    />
                    <input
                        type="text"
                        name="descripcion2"
                        placeholder="Párrafo 2: ¿Qué tecnologías o impacto tiene?"
                        value={descripcion2}
                        onChange={handleCambio}
                        style={{ width: "100%", padding: "6px", color: "#000", backgroundColor: "#fff" }} // 🎨 Color de letra negro forzado
                    />
                </div>

                <div style={{ borderTop: "1px solid #ccc", paddingTop: "10px" }}>
                    <h4 style={{ margin: "5px 0" }}>Recursos</h4>
                    <label style={{ fontSize: "12px" }}>Enlace de GitHub:</label>
                    <input
                        type="text"
                        name="linkGithub"
                        placeholder="https://github.com/..."
                        value={linkGithub}
                        onChange={handleCambio}
                        style={{ width: "100%", padding: "6px", color: "#000", backgroundColor: "#fff" }} // 🎨 Color de letra negro forzado
                    />
                </div>

                <div style={{ borderTop: "1px solid #ccc", paddingTop: "10px" }}>
                    <h4 style={{ margin: "5px 0" }}>Equipo</h4>
                    <label style={{ fontSize: "12px" }}>Nombre del Líder / Integrante:</label>
                    <input
                        type="text"
                        name="liderNombre"
                        placeholder="Ej: Juan Pérez"
                        value={liderNombre}
                        onChange={handleCambio}
                        style={{ width: "100%", padding: "6px", color: "#000", backgroundColor: "#fff" }} // 🎨 Color de letra negro forzado
                    />
                </div>

                <button 
                    onClick={handleAgregar}
                    style={{ marginTop: "10px", padding: "10px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}
                >
                    Guardar Proyecto
                </button>

            </div>
        </div>
    );
}

export default FormularioProyecto;