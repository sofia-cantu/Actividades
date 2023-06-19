import "./MiPerfil.css";
import React, { useState } from "react";

const AcercaDe = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the form data to the backend.

    // Clear the form fields.
    setName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
    
    <h1>Mi perfil</h1>
    <div className="miPerfil">
    <p></p>
    <div className="left">
        <div className="profile-container">
            <div className="profile-image">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiles.rcnradio.com%2Fpublic%2F2018-09%2Fabuelos_5_0.jpg&f=1&nofb=1&ipt=f5e166581ba7f4722130f6a8a0cdb5377f4c44bda499acfe5cb2c5ea7c23a4d1&ipo=images" alt="Perfil"></img>
            </div>

            <div className="profile-name">
                <p>Hermenegildo Pérez</p>
            </div>

        </div>
    </div>

    <div className="center">
        <div className="contact-section">

            <h2>Mis datos de contacto</h2>

            <div className="contact-info">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fescuelaparaterapeutas.com%2Fwp-content%2Fuploads%2F2019%2F01%2Ficono-telefono.png&f=1&nofb=1&ipt=06778968248998432a6bcfd2d32fc656a5cf1a0fca419dfc32d2562b3ec84060&ipo=images" alt="Teléfono"></img>
                <div>
                    <p style={{ textAlign: 'left', margin: 0 }}>Telefono</p>
                    <h3>81-123-4566</h3>
                    <p></p>
                </div>
            </div>

            <div className="contact-info">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F910%2FPNG%2F512%2Fmail_icon-icons.com_71147.png&f=1&nofb=1&ipt=f0207d0a60ff745e7dc3e016cf719b0c6d41d012954ecb61827729fc76cff8c5&ipo=images" alt="Correo"></img>
                <div>
                    <p style={{ textAlign: 'left', margin: 0 }}>Correo</p>
                    <h3>foolanito@example.com</h3>
                    <p></p>
                </div>
            </div>
            
            <div className="contact-info">
                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_440180.png&f=1&nofb=1&ipt=cec63536e52bf5afd862eeb423519a838d3ac59435af193e8bbba6a3032f80bb&ipo=images" alt="Domicilio"></img>
                <div>
                    <p style={{ textAlign: 'left', margin: 0 }}>Domicilio</p>
                    <h3>Blvd. Metropolitan Axis 3403</h3>
                </div>
            </div>
        </div>

    </div>

    <div className="right">
        <div className="contact-sectionEm">

            <h2>Mis contactos de emergencia</h2>

            <br></br>
            <h4  style={{ textAlign: 'left'}}>Primer contacto</h4>
            <p style={{ textAlign: 'left', margin: 0 }}>Nombre</p>
            <h3>Sutano Quintilla</h3>
            <p></p>
            <p style={{ textAlign: 'left', margin: 0 }}>Relación</p>
            <h3>Yerno</h3>
            <p></p>
            <p style={{ textAlign: 'left', margin: 0 }}>Correo</p>
            <h3>randomcitizen@example.com</h3>

            <br></br> <br></br>

            <h4  style={{ textAlign: 'left'}}>Segundo contacto</h4>
            <p style={{ textAlign: 'left', margin: 0 }}>Nombre</p>
            <h3>Sutano Quintilla</h3>
            <p></p>
            <p style={{ textAlign: 'left', margin: 0 }}>Relación</p>
            <h3>Yerno</h3>
            <p></p>
            <p style={{ textAlign: 'left', margin: 0 }}>Correo</p>
            <h3>randomcitizen@example.com</h3>
        </div>

    </div>



    </div>
    
    <br></br><br></br><br></br><br></br><br></br>

    <h2 style={{ textAlign: "left" }}>CONTÁCTANOS</h2>
    <div className="paraContactar">
    
      <div className="left">
        <p style={{ textAlign: "left" }}>
          <strong>E-mail:</strong> abuelitosabp@gmail.com
        </p>
        <p style={{ textAlign: "left" }}>
          <strong>Teléfono:</strong> +52 811659 6021
        </p>
        <p style={{ textAlign: "left" }}> Monterrey, Nuevo León, México</p>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>

      <div className="center">
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <p>Introduce tu nombre: (obligatorio)</p>
              <input
                type="text"
                placeholder="Tu Nombre"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div>
              <p>Introduce tu apellido: (obligatorio)</p>
              <input
                type="text"
                placeholder="Tu Apellido"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>

            <div>
              <p>Introduce tu correo: (obligatorio)</p>
              <input
                type="email"
                placeholder="Tu Correo"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>
        </form>
      </div>

      <div className="right">
        <form onSubmit={handleSubmit}>
            <div>
            <p>Escribe tu comentario:</p>
            <textarea
                placeholder="Tu Mensaje"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />
            <p style={{margin: 0}}></p>
            <button type="submit">Enviar</button>
            </div>
        </form>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>

    </div>

    </div>
  );
};

export default AcercaDe;