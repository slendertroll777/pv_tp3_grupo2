import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../assets/css/activosCard.css';

function activosCard() {

    return(
        <Card style={{height: '100%'}} className="h-100">
            <Card.Body className="d-flex flex-column h-100">
                <Card.Title>Mejores Usuarios</Card.Title>
                <Card.Text>
                    Usuarios con mayores actividades en la plataforma.
                </Card.Text>
            <Col className="mt-3">
                <Row className="contenedor-usuario1">
                    <strong>Usuario:</strong><p>Emiliano Ruiz</p>
                    <p>Horas totales: 102</p>
                </Row>
                <Row className="contenedor-usuario2">
                    <strong>Usuario:</strong><p>Viviana Gomez</p>
                    <p>Horas totales: 97</p>
                </Row>
                <Row className="contenedor-usuario3">
                    <strong>Usuario:</strong><p>Carlos Sanchez</p>
                    <p>Horas totales: 82</p>
                </Row>
            </Col>
            </Card.Body>
        </Card>
    )
}

export default activosCard;