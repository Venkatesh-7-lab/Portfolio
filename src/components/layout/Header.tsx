import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Modal, Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const location = useLocation();
  const [showResume, setShowResume] = useState(false);
  const [canDownload, setCanDownload] = useState(false);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname == path;
  const handleResumeDownload = (e: any) => {
    setCanDownload(e.target.checked);
  };
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="shadow-sm py-3"
      style={{
        background: "linear-gradient(90deg,rgb(253, 73, 13),rgb(233, 8, 8))",
      }}>
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-3"
          style={{
            color: "#FFD700", // Gold
            fontFamily: "'Poppins', sans-serif",
            textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
          }}>
          Venkatesh <span style={{ color: "white" }}>Adaka</span>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              as={Link}
              to="/"
              className={`fw-bold fs-4 ${
                isActive("/") ? "text-warning" : "text-white"
              }`}
              style={{ outline: "none", boxShadow: "none" }}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={`fw-bold fs-4 ${
                isActive("/about") ? "text-warning" : "text-white"
              }`}
              style={{ outline: "none", boxShadow: "none" }}>
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              className={`fw-bold fs-4 ${
                isActive("/projects") ? "text-warning" : "text-white"
              }`}
              style={{ outline: "none", boxShadow: "none" }}>
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={`fw-bold fs-4 ${
                isActive("/contact") ? "text-warning" : "text-white"
              }`}
              style={{ outline: "none", boxShadow: "none" }}>
              Contact
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/skills"
              className={`fw-bold fs-4 ${
                isActive("/skills") ? "text-warning" : "text-white"
              }`}
              style={{ outline: "none", boxShadow: "none" }}>
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/education"
              className={`fw-bold fs-4 ${
                isActive("/education") ? "text-warning" : "text-white"
              }`}
              style={{ outline: "none", boxShadow: "none" }}>
              Expericence & Education
            </Nav.Link>

            <Button
              style={{
                backgroundColor: "#FFD700",
                color: "#000",
                fontWeight: "bold",
                border: "none",
                borderRadius: "20px",
                padding: "6px 18px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
              }}
              onClick={() => setShowResume(true)}
              className="ms-3">
              📄 View Resume
            </Button>

            {/* <Button
              variant="link"
              className="ms-3"
              onClick={toggleDarkMode}
              title="Toggle Dark Mode">
              <i className={`bi ${isDark ? "bi-sun" : "bi-moon"}`}></i>
            </Button> */}
          </Nav>
        </Navbar.Collapse>

        {showResume && (
          <Modal
            show={showResume}
            onHide={() => setShowResume(false)}
            size="lg"
            centered
            scrollable>
            <Modal.Header closeButton className="bg-primary text-white">
              <Modal.Title>Resume Preview</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ height: "80vh" }}>
              <embed
                src="/Venkatesh_Adaka.pdf#toolbar=0"
                type="application/pdf"
                width="100%"
                height="100%"
              />
              <Form.Check
                type="checkbox"
                label={"I have reviewed the resume and want to download it"}
                onChange={handleResumeDownload}
                checked={canDownload}
              />
            </Modal.Body>
            <Modal.Footer className="bg-primary">
              {canDownload && (
                <Button
                  href="/Venkatesh_Adaka.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="success">
                  Download Resume
                </Button>
              )}
              <Button variant="danger" onClick={() => setShowResume(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </Navbar>
  );
};
