import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ActividadCard from "../components/actividadCard";
import ActivosCard from "../components/activosCard";
import ClientesCard from "../components/clientesCard";


function Dashboard() {


    return(
        <Container className="mt-4" >
            <h1>Plataforma de Gestión de Proyectos</h1>

                <p>Bienvenido a la Plataforma de Gestión de Proyectos, en este sitio podrás gestionar todos tus proyectos y usuarios de manera eficiente.</p>
        <Col>
        <ClientesCard />
        </Col>
                
        </Container>
    )
}
export default Dashboard;