import Title from "../../components/Title";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

import "./AbuelitosABP.css";

function AbuelitosABP() {
  return (
    <div className="AbuelitosABP mt-2">
      <Title />
      <figure class="text-center mt-2">
        <h3>Iniciar Sesion </h3>
        </figure>
      <Form>
      <Form.Group className="mx-auto" style={{ width: '27%' }} controlId="formBasicEmail">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control type="email" placeholder="Ingresa el correo" />
        <Form.Text className="text-muted">
          No compartiremos tu informacion personal a terceros
        </Form.Text>
      </Form.Group>

      <Form.Group className="mx-auto" style={{ width: '27%' }} controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>

      <Stack gap={2} className="col-md-2 mx-auto mt-4">
      <Link to="/pams">
              <Button variant="success">Ingresar</Button>
              </Link>
        <Link to="pams/add">
              <Button variant="success">Registrarte</Button>
              </Link>
        </Stack>
    </Form>

    </div>
  );
}

export default AbuelitosABP;