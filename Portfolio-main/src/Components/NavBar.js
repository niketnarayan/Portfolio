import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <div>

<Navbar className="bg-light shadow" expand="lg" fixed="top">
<Container>
<Navbar.Brand href="#home">Portfolio</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="ms-auto">
<Nav.Link href="#home" className="me-3 fw-bold">Home</Nav.Link>
<Nav.Link href="#features" className="me-3 fw-bold">About</Nav.Link>
<Nav.Link href="#service" className="me-3 fw-bold">Service</Nav.Link>
<Nav.Link href="#portfolio" className="me-3 fw-bold">Skills</Nav.Link>
<Nav.Link href="#portfolio" className="me-3 fw-bold">Portfolio</Nav.Link>
<Nav.Link href="#testmonial" className="me-3 fw-bold">Testimonial</Nav.Link>
<Nav.Link href="#blog" className="me-3 fw-bold">Blog</Nav.Link>
<Nav.Link href="#contact" className="me-3 fw-bold">Contact</Nav.Link>
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>  


    </div>
  )
}

export default NavBar