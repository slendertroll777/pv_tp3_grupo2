import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import clienteImg from '../assets/images/cliente.png';
import '../assets/css/clientesCard.css';
import { useState } from 'react';


function ClientesCard() {
    const [mostrarMas, setMostrarMas] = useState(false);
    return (
        <Card className="tarjeta-clientes">
      <Card.Img variant="top" src={clienteImg} className="imagen-cliente" />
      <Card.Body>
        <Card.Title>Clientes</Card.Title>
        <Card.Text>
          Estos son algunas reseñas de nuestros clientes, a los que hemos ayudado a gestionar sus proyectos de manera eficiente.
        </Card.Text>
        {mostrarMas && (
            <Card.Text className="desplegable-clientes">
    <ul>
      <li>
        <strong>Hnos Juarez S.A.:</strong> "Gracias a esta plataforma,
        hemos podido organizar nuestros proyectos de manera más eficiente."
      </li>

      <li>
        <strong>Tech Solutions:</strong> "La plataforma de gestión de
        proyectos ha sido una herramienta invaluable para nuestro equipo."
      </li>

      <li>
        <strong>Innovatech:</strong> "Estamos encantados con la plataforma
        de gestión de proyectos."
      </li>
    </ul>
  </Card.Text>
        )}
        <Button variant="primary" onClick={() => setMostrarMas(!mostrarMas)}>
            {mostrarMas ? 'Ver Menos' : 'Ver Más'}
        </Button>
      </Card.Body>
    </Card>
    );
}

export default ClientesCard;