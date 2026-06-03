import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function ProyectoCard({ proyecto, onEliminar, onVerDetalle }) {
    
    const { id, titulo, categoria, estado } = proyecto;

    return (
        <Card className="mb-3">
            <Card.Body>

                <Card.Title>
                    {titulo}
                </Card.Title>

                <Card.Text>
                    <strong>Categoría:</strong> {categoria}
                </Card.Text>

                <Card.Text>
                    <strong>Estado:</strong> {estado}
                </Card.Text>

                <div className="d-flex gap-2">

                    <Button
                        variant="primary"
                        onClick={onVerDetalle}
                    >
                        Ver Detalle
                    </Button>

                    <Button
                        variant="danger"
                        onClick={() => onEliminar(id)}
                    >
                        Eliminar
                    </Button>

                </div>

            </Card.Body>
        </Card>
    );
}

export default ProyectoCard;