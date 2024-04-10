import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarComponet = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-dark ">
        <Container className="justify-content-center">
          <Navbar.Brand className="text-light text-center">
            Pokemon Gallary
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-light">
                <Link to={"/"}>Gallary</Link>
              </Nav.Link>
              <Nav.Link className="text-light">
                <Link to={"/about"}>About</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponet;
