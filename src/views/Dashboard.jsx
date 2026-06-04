import Container from "react-bootstrap/Container";
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ActividadCard from "../components/actividadCard";
import ActivosCard from "../components/activosCard";
import ClientesCard from "../components/clientesCard";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Dashboard() {


    return (
        <Container className="mt-4" >
            <h1 style={{ color: ' #000000' }}>Plataforma de Gestión de Proyectos</h1>

            <p>Bienvenido a la Plataforma de Gestión de Proyectos, en este sitio podrás gestionar todos tus proyectos y usuarios de manera eficiente.</p>
            <Row className="mb-4">
                <Col>
                    <CardGroup className="d-flex align-items-stretch gap-3" width="50%">
                        <ActividadCard />
                        <ActivosCard />
                        <ClientesCard />
                    </CardGroup>
                </Col>
                <Col className="login-form">
                    <br></br>
                    <br></br>
                    

                    <Form>
                        <h2>Iniciar Sesión</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese su email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Ingresar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Dashboard;