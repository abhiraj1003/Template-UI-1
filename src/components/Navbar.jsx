import React from 'react';
import logo from '/src/Logos/Navbar/connecting dot erp logo.png';
import { Navbar, Container, Offcanvas, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

const Header = () => (
  <Navbar expand="lg" className="header">
    <Container fluid className="align-items-center justify-content-between">
      <div className="logo">
        <img src={logo} alt="Connecting Dots ERP" />
      </div>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-center flex-grow-1 pe-3">
            <Nav.Link className="mx-lg-2 active" href="#">Courses</Nav.Link>
            <Nav.Link className="mx-lg-2" href="#">Placements</Nav.Link>
            <Nav.Link className="mx-lg-2" href="#">Blogs</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
      
    </Container>
  </Navbar>
);

export default Header;
