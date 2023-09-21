import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function DefaultNavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand to="/" as={Link}>
          Gadgets Hub
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/" as={Link}>
            Home
          </Nav.Link>
          <Nav.Link to="/login" as={Link}>
            Login
          </Nav.Link>
          <Nav.Link to="/my-account" as={Link}>
            My Account
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default DefaultNavbar;
