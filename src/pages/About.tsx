import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import venkatesh_Img2 from "../assets/images/Venkatesh_p1.jpeg";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-5"
      style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg, #faf9f6, #fffbea)", // subtle off-white gradient
      }}>
      <Container>
        {/* Heading with Gold Underline */}
        <div className="text-center mb-5">
          <h2
            className="fw-bold fs-2"
            style={{
              display: "inline-block",
              borderBottom: "4px solid #d4af37", // gold underline
              paddingBottom: "5px",
            }}>
            About Me
          </h2>
        </div>

        <Row className="align-items-center">
          {/* Profile Image */}
          <Col md={5} className="d-flex justify-content-center mb-4 mb-md-0">
            <div
              style={{
                borderRadius: "50%",
                padding: "6px",
                background: "linear-gradient(135deg, #ffd700, #ffb347)", // golden gradient
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              }}>
              <Image
                src={venkatesh_Img2}
                alt="Venkatesh"
                roundedCircle
                fluid
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                  border: "6px solid #fff",
                }}
              />
            </div>
          </Col>

          {/* About Text */}
          <Col md={7}>
            <div
              style={{
                background: "#fff",
                padding: "2rem",
                borderRadius: "15px",
                boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)", // gold shadow
                borderLeft: "10px solid #d4af37", // gold accent bar
              }}>
              <p className="fs-5 mb-4" style={{ textAlign: "justify" }}>
                I'm <strong>Venkatesh</strong>, a Full Stack Developer with{" "}
                <strong>1 year 5 months</strong> of experience in building
                modern, scalable web applications using{" "}
                <strong>React, Redux, TypeScript</strong> on the frontend and{" "}
                <strong>.NET Core, SQL Server</strong> on the backend.
              </p>
              <p className="fs-5 mb-4" style={{ textAlign: "justify" }}>
                I enjoy solving real-world problems, optimizing performance, and
                writing clean, maintainable code. I love collaborating with
                teams and contributing to both UI/UX and API design.
              </p>
              <p className="fs-5 mb-0" style={{ textAlign: "justify" }}>
                In my free time, I explore new web technologies, contribute to
                open-source, or write tech blogs.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
