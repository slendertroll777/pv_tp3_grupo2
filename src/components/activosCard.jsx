import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import usuarioService from '../services/usuarioService';
import '../assets/css/activosCard.css';

function ActivosCard() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        setUsuarios(usuarioService.obtenerUsuarios());
    }, []);

    const obtenerPodio = (usuariosList) => {
        const copia = [...usuariosList];
        copia.sort((a, b) => b.horasTotales - a.horasTotales);
        return copia.slice(0, 3);
    };

    const podio = obtenerPodio(usuarios);

    return (
        <Card style={{ height: '100%' }} className="h-100">
            <Card.Body className="d-flex flex-column h-100">
                <Card.Title>Mejores Usuarios</Card.Title>
                <Card.Text>
                    Usuarios con mayores actividades en la plataforma.
                </Card.Text>
                <Col className="mt-3">
                    <Row className="contenedor-usuario1">
                        <strong>Usuario:</strong> {podio[0]?.nombre || 'N/A'}
                        <p>Horas totales: {podio[0]?.horasTotales ?? 0}</p>
                    </Row>
                    <Row className="contenedor-usuario2">
                        <strong>Usuario:</strong> {podio[1]?.nombre || 'N/A'}
                        <p>Horas totales: {podio[1]?.horasTotales ?? 0}</p>
                    </Row>
                    <Row className="contenedor-usuario3">
                        <strong>Usuario:</strong> {podio[2]?.nombre || 'N/A'}
                        <p>Horas totales: {podio[2]?.horasTotales ?? 0}</p>
                    </Row>
                </Col>
            </Card.Body>
        </Card>
    );
}

export default ActivosCard;