import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavBar.css';
import React from 'react'


function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>
          <img
              alt=""
              src="/favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Tec Mty
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Perfil</Nav.Link>
            <Nav.Link as={Link} to="/clases">Clases</Nav.Link>
            <Nav.Link as={Link} to="/counter">Contador</Nav.Link>
            <Nav.Link as={Link} to="/books">Books</Nav.Link>
            <Nav.Link as={Link} to="/cv">Mi CV</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default NavBar;
