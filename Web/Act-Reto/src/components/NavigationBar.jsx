import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <Navbar className="NavBar" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>
          <img
              alt=""
              src="/logo.png"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="Link abuelitos-link" to="/">Abuelitos</Link>
          <NavDropdown title="Áreas" id="nav-dropdown" className="black-link">
          <NavDropdown.Item as={Link} to="/funcional">
              Funcional
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/social">
              Social
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/cognitiva">
              Cognitiva
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/fisica">
              Física
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/afectiva">
              Afectiva
            </NavDropdown.Item>
          </NavDropdown>
          <Link className="Link abuelitos-link" to="/videojuegos">Videojuegos</Link>
          </Nav>
          <Nav className="ms-auto">
          <Link className="Link ingresa-link" to="/signin">Ingresa</Link>
           </Nav>
        </Container>
      </Navbar>
    );
}

export default NavigationBar;