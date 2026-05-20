const ProyectoCard = ({ proyecto }) => {


    const { titulo, categoria, estado, id } = proyecto;

    return (
        <div className="proyecto-card">

            <h2>{titulo}</h2>

            <p>
                <strong>Categoria:</strong> {categoria}
            </p>

            <p>
                <strong>Estado:</strong> {estado}
            </p>

            <div className="botones-card">
                <button>Eliminar</button>
                <button>Ver detalle</button>
            </div>

        </div>
    );
};

export default ProyectoCard;
