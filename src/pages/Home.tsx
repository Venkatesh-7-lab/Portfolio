import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import venkatesh_Img1 from "../assets/images/Venkatesh_p1.jpeg";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      className="text-center py-5 d-flex align-items-center"
      style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg, #1a1a1a 0%, #121212 100%)",
      }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={6} className="mb-4 mb-md-0">
            <h1 className="display-3 fw-bold mb-3">
              Hi, I'm <span className="text-warning">Venkatesh</span> 👋
            </h1>
            <p className="lead text-warning">
              Full Stack Developer • React | TypeScript | .NET Core
            </p>
            <p className="text-light opacity-75 fs-5">
              I build scalable, real-world solutions with clean code, strong
              architecture, and delightful UX.
            </p>
            <div className="d-flex justify-content-center gap-3 mt-4">
              <Button
                size="lg"
                variant="warning"
                className="fw-semibold text-dark shadow"
                onClick={() => navigate("/projects")}>
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline-light"
                className="fw-semibold shadow"
                onClick={() => navigate("/contact")}>
                Hire Me
              </Button>
            </div>
          </Col>

          {/* Profile Image */}
          <Col
            md={6}
            className="d-flex justify-content-md-end justify-content-center">
            <Image
              src={venkatesh_Img1}
              alt="Venkatesh"
              roundedCircle
              fluid
              className="shadow"
              style={{
                width: "380px", // control size
                height: "380px", // keep height equal to width for circle
                objectFit: "cover", // prevents distortion
                border: "4px solid var(--bs-warning)",
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
