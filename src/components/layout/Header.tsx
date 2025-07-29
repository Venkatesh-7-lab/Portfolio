import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../hooks/useDarkMode";

export const Header: React.FC = () => {
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`shadow-sm py-3 ${
        isDark ? "navbar-dark bg-dark" : "navbar-light bg-white"
      }`}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-primary">
          Venkatesh Adaka
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/skills">
              Skills
            </Nav.Link>

            <Button
              variant={isDark ? "outline-light" : "outline-primary"}
              size="sm"
              href="/Venkatesh_Adaka.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ms-3">
              Resume
            </Button>

            <Button
              variant="link"
              className="ms-3"
              onClick={toggleDarkMode}
              title="Toggle Dark Mode">
              <i className={`bi ${isDark ? "bi-sun" : "bi-moon"}`}></i>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
