import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FormularioProyecto({
    nuevoProyecto,
    handleCambio,
    handleAgregar
}) {

    const {
        titulo,
        categoria,
        estado,
        descripcion1,
        descripcion2,
        linkGithub,
        liderNombre
    } = nuevoProyecto;

    return (
        <Card className="mb-4">
            <Card.Body>

                <Card.Title>
                    Agregar Nuevo Proyecto
                </Card.Title>

                <Form>

                    <Form.Group className="mb-3">
                        <Form.Label>Título</Form.Label>

                        <Form.Control
                            type="text"
                            name="titulo"
                            value={titulo}
                            onChange={handleCambio}
                            placeholder="Ej: Plataforma Web Educativa"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Categoría</Form.Label>

                        <Form.Control
                            type="text"
                            name="categoria"
                            value={categoria}
                            onChange={handleCambio}
                            placeholder="Ej: Desarrollo Web"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Estado</Form.Label>

                        <Form.Select
                            name="estado"
                            value={estado}
                            onChange={handleCambio}
                        >
                            <option value="Pendiente">
                                Pendiente
                            </option>

                            <option value="En progreso">
                                En progreso
                            </option>

                            <option value="Completado">
                                Completado
                            </option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>
                            Descripción (Párrafo 1)
                        </Form.Label>

                        <Form.Control
                            type="text"
                            name="descripcion1"
                            value={descripcion1}
                            onChange={handleCambio}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>
                            Descripción (Párrafo 2)
                        </Form.Label>

                        <Form.Control
                            type="text"
                            name="descripcion2"
                            value={descripcion2}
                            onChange={handleCambio}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>
                            Enlace GitHub
                        </Form.Label>

                        <Form.Control
                            type="text"
                            name="linkGithub"
                            value={linkGithub}
                            onChange={handleCambio}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>
                            Líder del Proyecto
                        </Form.Label>

                        <Form.Control
                            type="text"
                            name="liderNombre"
                            value={liderNombre}
                            onChange={handleCambio}
                        />
                    </Form.Group>

                    <Button
                        variant="success"
                        onClick={handleAgregar}
                    >
                        Guardar Proyecto
                    </Button>

                </Form>

            </Card.Body>
        </Card>
    );
}

export default FormularioProyecto;