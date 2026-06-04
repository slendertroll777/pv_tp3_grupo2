import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ActividadCard from "../components/actividadCard";
import ActivosCard from "../components/activosCard";
import ClientesCard from "../components/clientesCard";


function Dashboard() {


    return(
        <Container className="mt-4" >
            <h1 style={{ color: ' #000000' }}>Plataforma de Gestión de Proyectos</h1>

                <p>Bienvenido a la Plataforma de Gestión de Proyectos, en este sitio podrás gestionar todos tus proyectos y usuarios de manera eficiente.</p>
            <Row className="align-items-stretch gx-3">
                <Col className="d-flex">
                    <ActividadCard />
                </Col>
                <Col className="d-flex">
                    <ActivosCard />
                </Col>
                <Col className="d-flex">
                    <ClientesCard />
                </Col>
            </Row>
        </Container>
    )
}
export default Dashboard;