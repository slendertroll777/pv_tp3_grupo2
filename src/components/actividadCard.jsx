import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import usuarioService from '../services/usuarioService';
import proyectoService from '../services/proyectoService';

function ActividadCard() {
    const [usuarios, setUsuarios] = useState([]);
    const [proyectos, setProyectos] = useState([]);
    const [ultimaFecha, setUltimaFecha] = useState(new Date());

    useEffect(() => {
        setUsuarios(usuarioService.obtenerUsuarios());
    }, []);

    useEffect(() => {
        setProyectos(proyectoService.obtenerProyectos());
    }, []);

    const sumaUsuarios = usuarios.reduce((total, usuario) => total + usuario.horasTotales, 0);
    const sumaProgreso = proyectos.reduce((total, proyecto) => {
        if (proyecto.estado === "En progreso") {
            return total + 1;
        }
        return total;
    }, 0);
    const sumaActividad = usuarios.reduce((total, usuario) => total + usuario.horasTotales, 0);

    const fecha = ultimaFecha.toLocaleDateString();
    const hora = ultimaFecha.toLocaleTimeString();

    return (
        <Card className="tarjeta-actividad" border="success" style={{ height: "100%" }}>
            <Card.Header>Actividad Reciente</Card.Header>
            <Card.Body>
                <Card.Text>
                    Estas son las últimas actividades registradas en la plataforma:
                </Card.Text>
                <ul>
                    <li>
                        <strong>Usuarios totales: </strong> {usuarios.length}.
                    </li>
                    <li>
                        <strong>Proyectos en progreso: </strong> {sumaProgreso}.
                    </li>
                    <li>
                        <strong>Última actividad: </strong> {fecha} a las {hora}.
                    </li>
                    <li>
                        <strong>Tiempo total de actividad: </strong> {sumaActividad} horas.
                    </li>
                </ul>
            </Card.Body>

        </Card>
    )
}

export default ActividadCard;