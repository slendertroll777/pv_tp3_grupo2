
function ProyectoCard({ proyecto, onEliminar, onVerDetalle }) {
    
    const { id, titulo, categoria, estado } = proyecto;

    return (
        <div className="tarjeta-proyecto" style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", margin: "10px 0", backgroundColor: "#fff", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <h3 style={{ color: "#000", margin: "0 0 8px 0" }}>{titulo}</h3>
            <p style={{ color: "#333", margin: "4px 0" }}><strong>Categoría:</strong> {categoria}</p>
            <p style={{ color: "#333", margin: "4px 0" }}><strong>Estado:</strong> {estado}</p>
            
            <div style={{ marginTop: "12px", display: "flex", gap: "10px" }}>
                
                <button 
                    onClick={onVerDetalle} 
                    style={{ padding: "6px 12px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}
                >
                    Ver Detalle
                </button>

                <button 
                    onClick={() => onEliminar(id)} 
                    style={{ padding: "6px 12px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}
                >
                    Eliminar
                </button>
                
            </div>
        </div>
    );
}

export default ProyectoCard;