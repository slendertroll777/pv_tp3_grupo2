import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ProyectoCard({ proyecto, onEliminar }) {
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
                    <Link to={`/proyectos/${id}`} className="btn btn-primary">
                        Ver Detalle
                    </Link>
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