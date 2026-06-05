import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

function PerfilUsuario() {

  const { usuario, actualizarPerfil } = useContext(UsuarioContext);

  const usuarios = [
    {
      nombre: "Valentín Angulo",
      rol: "Alumno",
      institucion: "Universidad Nacional de Jujuy",
    },
    {
      nombre: "Gustavo Sosa",
      rol: "Docente",
      institucion: "Universidad Nacional de Jujuy",
    },
    {
      nombre: "María Gómez",
      rol: "Alumno",
      institucion: "Universidad Tecnológica Nacional",
    },
    {
      nombre: "Jose Lopez",
      rol: "Alumno",
      institucion: "Universidad Nacional de Córdoba",
    },
  ];

  return (
    <Container className="mt-4">
      <h2>Perfiles de Usuario</h2>

      <CardGroup>
        {usuarios.map((usuario, index) => (
          <Card key={index}>
            <Card.Body>
              <Card.Title>{usuario.nombre}</Card.Title>

              <Card.Text>
                <strong>Rol:</strong> {usuario.rol}
              </Card.Text>

              <Card.Text>
                <strong>Institución:</strong> {usuario.institucion}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </Container>
  );
}

export default PerfilUsuario;