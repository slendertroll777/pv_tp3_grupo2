import { useContext, useState, useEffect } from "react"; 
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { UsuarioContext } from "../context/UsuarioContext";


function PerfilUsuario() {
  const { usuario, actualizarPerfil } = useContext(UsuarioContext);

  const [editando, setEditando] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    dni: "",
    rol: "Alumno",
    institucion: "",
  });

  useEffect(() => {
    if (usuario) {
      setFormData({
        nombre: usuario.nombre || "",
        dni: usuario.dni || "",
        rol: usuario.rol || "Alumno",
        institucion: usuario.institucion || "",
      });
    }
  }, [usuario]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actualizarPerfil(formData);  
    setEditando(false); 
  };

  if (!usuario) {
    return (
      <Container className="mt-4 text-center">
        <p>Cargando datos del perfil...</p>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white text-center py-3">
              <h3>Mi Perfil de Usuario</h3>
            </Card.Header>
            <Card.Body className="p-4">
              
              {!editando ? (
                <div>
                  <Card.Text><strong>Nombre:</strong> {usuario.nombre}</Card.Text>
                  <Card.Text><strong>DNI:</strong> {usuario.dni}</Card.Text>
                  <Card.Text><strong>Rol:</strong> {usuario.rol}</Card.Text>
                  <Card.Text><strong>Institución:</strong> {usuario.institucion}</Card.Text>
                  
                  <div className="d-grid mt-4">
                    {}
                    <Button variant="outline-primary" onClick={() => setEditando(true)}>
                      Editar Perfil
                    </Button>
                  </div>
                </div>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formDni">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control
                      type="text"
                      name="dni"
                      value={formData.dni}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formRol">
                    <Form.Label>Rol</Form.Label>
                    <Form.Select 
                      name="rol" 
                      value={formData.rol} 
                      onChange={handleChange}
                    >
                      <option value="Alumno">Alumno</option>
                      <option value="Docente">Docente</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formInstitucion">
                    <Form.Label>Institución</Form.Label>
                    <Form.Control
                      type="text"
                      name="institucion"
                      value={formData.institucion}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-end gap-2 mt-4">
                    <Button variant="secondary" onClick={() => setEditando(false)}>
                      Cancelar
                    </Button>
                    <Button variant="success" type="submit">
                      Guardar Cambios
                    </Button>
                  </div>
                </Form>
              )}

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PerfilUsuario;