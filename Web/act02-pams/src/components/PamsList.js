
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removePam, changeRol, changeName, changeLastName, changeTelephone, changeEmail, changeSex, changePostalCode, changeCountry, changePassword, changeTip, changeBloodType, changeWeight, changeHeight, changeBirthDate } from "../store";
import "./PamsList.css";

function PamsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pams } = useSelector((state) => state.pams);

  const handleRemovePam = (id) => {
    dispatch(removePam(id));
  };

  const handleEditPam = (index) => {
    dispatch(changeRol(pams[index].rol));
    dispatch(changeName(pams[index].name));
    dispatch(changeLastName(pams[index].last_name));
    dispatch(changeTelephone(pams[index].telephone));
    dispatch(changeEmail(pams[index].email));
    dispatch(changeSex(pams[index].sex));
    dispatch(changePostalCode(pams[index].postal_code));
    dispatch(changeCountry(pams[index].country));
    dispatch(changePassword(pams[index].password));
    dispatch(changeTip(pams[index].tip));
    dispatch(changeBloodType(pams[index].blood_type));
    dispatch(changeWeight(pams[index].weight));
    dispatch(changeHeight(pams[index].height));
    dispatch(changeBirthDate(pams[index].birth_date));
    navigate(`/pams/edit/${pams[index].id}`);
  }

  return (
    <>
      <div className="PamsList">
        <h2>Listado de Personas Adultas Mayores</h2>
        <Container>
          <Row>
          <Col>
              <h6>Rol</h6>
            </Col>
            <Col>
              <h6>Nombre</h6>
            </Col>
            <Col>
              <h6>Apellido</h6>
            </Col>
            <Col>
              <h6>Telefono</h6>
            </Col>
            <Col>
              <h6>Correo</h6>
            </Col>
            <Col>
              <h6>Sexo</h6>
            </Col>
            <Col>
              <h6>Codigo Postal</h6>
            </Col>
            <Col>
              <h6>Pais</h6>
            </Col>
            <Col>
              <h6>Contraseña</h6>
            </Col>
            <Col>
              <h6>Tip</h6>
            </Col>
            <Col>
              <h6>Tipo de Sangre</h6>
            </Col>
            <Col>
              <h6>Peso</h6>
            </Col>
            <Col>
              <h6>Altura</h6>
            </Col>
            <Col>
              <h6>Fecha de Nacimiento</h6>
            </Col>
            <Col>
            <Link to="add">
              <Button variant="success">Agregar</Button>
              </Link>
            </Col>
          </Row>
          {pams.map((pam, index) => (
            <Row key={pam.id}>
              <Col>{pam.rol}</Col>
              <Col>{pam.name}</Col>
              <Col>{pam.last_name}</Col>
              <Col>{pam.telephone}</Col>
              <Col>{pam.email}</Col>
              <Col>{pam.sex}</Col>
              <Col>{pam.postal_code}</Col>
              <Col>{pam.country}</Col>
              <Col>{pam.password}</Col>
              <Col>{pam.tip}</Col>
              <Col>{pam.blood_type}</Col>
              <Col>{pam.weight}</Col>
              <Col>{pam.height}</Col>
              <Col>{pam.birth_date}</Col>
              <Col>
                <Button variant="warning" onClick={() => {handleEditPam(index)}}>Editar</Button>
                <Button variant="danger" onClick={() => {handleRemovePam(pam.id)}}>Eliminar</Button>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    </>
  );
}

export default PamsList;
