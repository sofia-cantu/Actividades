import { Form, Button, Stack } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeRol, changeName, changeLastName, changeTelephone, changeEmail, changeSex, changePostalCode, changeCountry, changePassword, changeTip, changeBloodType, changeWeight, changeHeight, changeBirthDate, addPam, editPam } from '../../store'; 
import "./ManagePam.css";
import { useNavigate, useParams } from "react-router-dom";

function ManagePam() {
  const params = useParams();
  console.log(params);
  const [mode, setMode] = useState('add');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { rol, name, last_name, telephone, email, sex, postal_code, country, password, tip, blood_type, weight, height, birth_date  } = useSelector((state) => state.pam);

  useEffect(() => {
    if (params.pam_id) {
      setMode('edit');
    } else {
      setMode('add');
    }
  }, [params]);

  const handleChangeRol = (event) => {
    // console.log(event.target.value);
    dispatch(changeRol(event.target.value));
  };

  const handleChangeName = (event) => {
    // console.log(event.target.value);
    dispatch(changeName(event.target.value));
  };

  const handleChangeLastName = (event) => {
    // console.log(event.target.value);
    dispatch(changeLastName(event.target.value));
  };

  const handleChangeTelephone = (event) => {
    // console.log(event.target.value);
    dispatch(changeTelephone(event.target.value));
  };

  const handleChangeEmail = (event) => {
    // console.log(event.target.value);
    dispatch(changeEmail(event.target.value));
  };

  const handleChangeSex = (event) => {
    // console.log(event.target.value);
    dispatch(changeSex(event.target.value));
  };

  const handleChangePostalCode = (event) => {
    // console.log(event.target.value);
    dispatch(changePostalCode(event.target.value));
  };

  const handleChangeCountry = (event) => {
    // console.log(event.target.value);
    dispatch(changeCountry(event.target.value));
  };

  const handleChangePassword = (event) => {
    // console.log(event.target.value);
    dispatch(changePassword(event.target.value));
  };

  const handleChangeTip = (event) => {
    // console.log(event.target.value);
    dispatch(changeTip(event.target.value));
  };

  const handleChangeBloodType = (event) => {
    // console.log(event.target.value);
    dispatch(changeBloodType(event.target.value));
  };

  const handleChangeWeight = (event) => {
    // console.log(event.target.value);
    dispatch(changeWeight(event.target.value));
  };

  const handleChangeHeight = (event) => {
    // console.log(event.target.value);
    dispatch(changeHeight(event.target.value));
  };

  const handleChangeBirthDate = (event) => {
    // console.log(event.target.value);
    dispatch(changeBirthDate(event.target.value));
  };

  // Si el boton "add" hacer "addPam"
  const handleSubmit = (event) => {
    event.preventDefault();
    if (mode === 'add') {
      dispatch(addPam(
        { 
          rol: rol,
          name: name, 
          last_name: last_name,
          telephone: telephone, 
          email: email, 
          sex: sex,
          postal_code: postal_code,
          country: country,
          password: password,
          tip: tip,
          blood_type: blood_type,
          weight: weight,
          height: height,
          birth_date: birth_date 
        }
      ));
    } else {
      dispatch(editPam(
        {
          id: params.pam_id,
          rol: rol,
          name: name, 
          last_name: last_name,
          telephone: telephone, 
          email: email, 
          sex: sex,
          postal_code: postal_code,
          country: country,
          password: password,
          tip: tip,
          blood_type: blood_type,
          weight: weight,
          height: height,
          birth_date: birth_date 
        }
      ));
    }
    navigate('/pams');
  };

  return (
    <div className="AddPam">
      <Form onSubmit={handleSubmit}>
      <figure class="text-center mt-2">
        <h2>Información Personal</h2>
        </figure>
        <Stack direction="horizontal" gap={0} > 
        <figure class="ms-5">
        <h2>    </h2>
        </figure>
        <figure class="ms-4">
        <h2>    </h2>
        </figure>          
        <Form.Group className="ms-5 me-2 mt-1" style={{ width: '27%' }} controlId="rol">
          <Form.Label>Rol</Form.Label>
          <Form.Control
            type="text"
            placeholder="Teclea el Rol- "
            value={rol}
            onChange={handleChangeRol}
          />
        </Form.Group>
        <Form.Group className="ms-3 me-2 mt-1" style={{ width: '27%' }} controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Teclea el nombre"
            value={name}
            onChange={handleChangeName}
          />
        </Form.Group>
        <Form.Group className="ms-3 mt-1" style={{ width: '27%' }} controlId="last_name">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            type="text"
            placeholder="Teclea tus apellidos"
            value={last_name}
            onChange={handleChangeLastName}
          />
        </Form.Group>
        </Stack>
       <Stack direction="horizontal">
       <figure class="ms-5">
        <h2>    </h2>
        </figure>
        <figure class="ms-4">
        <h2>    </h2>
        </figure>
       <Form.Group className="ms-5 me-2 mt-1" style={{ width: '27%' }} controlId="sex">
          <Form.Label>Sexo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Fem o mas"
            value={sex}
            onChange={handleChangeSex}
          />
        </Form.Group>
        <Form.Group className="ms-3 me-2 mt-1" style={{ width: '27%' }} controlId="postal_code">
          <Form.Label>Codigo Postal</Form.Label>
          <Form.Control
            type="number"
            placeholder="Teclea el codigo postal"
            value={postal_code}
            onChange={handleChangePostalCode}
          />
        </Form.Group>
        <Form.Group className="ms-3 mt-1" style={{ width: '27%' }} controlId="country">
          <Form.Label>Pais</Form.Label>
          <Form.Control
            type="text"
            placeholder="Teclea el pais"
            value={country}
            onChange={handleChangeCountry}
          />
        </Form.Group>
        </Stack>
        <Stack direction="horizontal">
        <figure class="ms-5">
        <h2>    </h2>
        </figure>
        <figure class="ms-4">
        <h2>    </h2>
        </figure>
       <Form.Group className="ms-5 me-2 mt-2" style={{ width: '41.4%' }} controlId="telephone">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Teclea el telefono, usando el siguiente patron xxx-xxx-xxxx"
            value={telephone}
            onChange={handleChangeTelephone}
          />
        </Form.Group>
        <Form.Group className="ms-3 mt-2" style={{ width: '41.4%' }} controlId="email">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            placeholder="Teclea tu correo"
            value={email}
            onChange={handleChangeEmail}
          />
        </Form.Group>
       </Stack>
        <Stack direction="horizontal">
        <figure class="ms-5">
        <h2>    </h2>
        </figure>
        <figure class="ms-4">
        <h2>    </h2>
        </figure>
        <Form.Group className="ms-5 me-2 mt-2" style={{ width: '41.4%' }} controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Teclea la contraseña"
            value={password}
            onChange={handleChangePassword}
          />
        </Form.Group>
        <Form.Group className="ms-3 mt-2" style={{ width: '41.4%' }} controlId="tip">
          <Form.Label>Tip</Form.Label>
          <Form.Control
            type="text"
            placeholder="¿Cual es el nombre de tu mascota de la infancia?"
            value={tip}
            onChange={handleChangeTip}
          />
        </Form.Group>
        </Stack>
        <figure class="text-center mt-5">
        <h2>Información Medica</h2>
        </figure>
        <Stack direction="horizontal">
        <figure class="ms-5">
        <h2>    </h2>
        </figure>
        <figure class="ms-4">
        <h2>    </h2>
        </figure>
        <Form.Group className="ms-5 me-2 mt-2" style={{ width: '41.4%' }} ccontrolId="height">
          <Form.Label>Altura</Form.Label>
          <Form.Control
            type="number"
            placeholder="Teclea tu altura"
            value={height}
            onChange={handleChangeHeight}
          />
        </Form.Group>
        <Form.Group className="ms-3 mt-2" style={{ width: '41.4%' }} ccontrolId="weight">
          <Form.Label>Peso</Form.Label>
          <Form.Control
            type="number"
            placeholder="Teclea tu peso"
            value={weight}
            onChange={handleChangeWeight}
          />
        </Form.Group>
        </Stack>
        <Stack direction="horizontal">
        <figure class="ms-5">
        <h2>    </h2>
        </figure>
        <figure class="ms-4">
        <h2>    </h2>
        </figure>
        <Form.Group className="ms-5 me-2 mt-2 mb-4" style={{ width: '41.4%' }} controlId="blood_type">
          <Form.Label>Tipo de Sangre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Teclea el tipo de sangre"
            value={blood_type}
            onChange={handleChangeBloodType}
          />
        </Form.Group>
        <Form.Group className="ms-3 mt-2 mb-4" style={{ width: '41.4%' }} controlId="birth_date">
          <Form.Label>Fecha de Nacimiento</Form.Label>
          <Form.Control
            type="date"
            placeholder="Teclea tu fecha de nacimiento"
            value={birth_date}
            onChange={handleChangeBirthDate}
          />
        </Form.Group>
        </Stack>
        <div>
          <Button variant="success" type="submit">
            {mode === "add" ? 'Agregar' : 'Actualizar'}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ManagePam;
