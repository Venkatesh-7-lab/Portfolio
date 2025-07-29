import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// optional placeholder

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      className="text-center py-5 d-flex align-items-center"
      style={{ minHeight: "80vh" }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h1 className="display-4 fw-bold">Hi, I'm Venkatesh 👋</h1>
            <p className="lead">
              Full Stack Developer • React | TypeScript | .NET Core
            </p>
            <p className="text-muted">
              I build scalable, real-world solutions with clean code, strong
              architecture, and delightful UX.
            </p>
            <div className="d-flex justify-content-center gap-3 mt-4">
              <Button variant="primary" onClick={() => navigate("/projects")}>
                View Projects
              </Button>
              <Button
                variant="outline-light"
                onClick={() => navigate("/contact")}>
                Contact Me
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <img
              src={""}
              alt="Venkatesh Adaka profile"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: "300px" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
