import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ActividadCard() {

    return (
        <Card className="tarjeta-actividad" border="success" style={{ height: "100%" }}>
            <Card.Header>Actividad Reciente</Card.Header>
            <Card.Body>
                <Card.Text>
                        Estas son las últimas actividades registradas en la plataforma:
                    <ul>
                        <li>
                            <strong>Usuarios activos: </strong> 2.
                        </li>
                        <li>
                            <strong>Proyectos activos: </strong> 3.
                        </li>
                        <li>
                            <strong>Última actividad: </strong> 10 minutos atrás.
                        </li>
                        <li>
                            <strong>Tiempo total de actividad: </strong> 22 horas.
                        </li>
                    </ul>
                </Card.Text>
            </Card.Body>

        </Card>
    )
}

export default ActividadCard;