import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Signin.css";
import Button from "react-bootstrap/Button";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    setPassword("");
    setEmail("");
  };

  const gotoSignUpPage = () => navigate("/RegistroPersona");
  const gotoAdmin = () => navigate("/Busqueda");
  const gotoMiPerfil = () => navigate("/MiPerfil");

  return (
    <div> {/* Wrap the entire component in a valid root element, such as a div */}
      <h1>Iniciar Sesión</h1>
      <div className="container">
        <div className="login__container">
          <form className="login__form" onSubmit={handleSubmit}>
            <label htmlFor="email" className="emailClass">
              Correo electrónico
            </label>
            <input
              type="text"
              style={{ backgroundColor: "white" }}
              id="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              minLength={8}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button variant="outline-success" className="BotonLogin">
              Ingresa
            </Button>{" "}
            <p>
              ¿No tiene cuenta?{" "}
              <span className="link" onClick={gotoSignUpPage}>
                Regístrate
              </span>{" "}
              <br />
              <span className="link" onClick={gotoAdmin}>
                Soy un Administrador(a)
              </span>
              <br />
              <span className="link" onClick={gotoMiPerfil}>
                Soy un Pam registrado(a)
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
