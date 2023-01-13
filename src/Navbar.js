import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './NavBar.css';

function NavBar() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return (
        <Navbar className="navbar" fixed="top" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img width='120px' src='http://celbits.org.in/assets/images/cel2.png' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#top">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBar;