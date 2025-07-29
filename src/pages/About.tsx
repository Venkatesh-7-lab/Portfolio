import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export const About: React.FC = () => {
  return (
    <section className="about-section py-5 bg-light" id="about">
      <Container>
        <h2 className="text-center mb-5 fw-bold">About Me</h2>
        <Row className="align-items-center">
          <Col md={5}>
            <Image
              src="/profile.jpg"
              alt="Venkatesh"
              roundedCircle
              fluid
              className="shadow"
            />
          </Col>
          <Col md={7}>
            <div className="px-2 px-md-4" style={{ textAlign: "justify" }}>
              <p className="fs-5">
                I'm <strong>Venkatesh</strong>, a Full Stack Developer with 1
                year 5 months of experience in building modern, scalable web
                applications using
                <strong> React, Redux, TypeScript</strong> on the frontend and
                <strong> .NET Core, SQL Server</strong> on the backend.
              </p>
              <p className="fs-5">
                I enjoy solving real-world problems, optimizing performance, and
                writing clean, maintainable code. I love collaborating with
                teams and contributing to both UI/UX and API design.
              </p>
              <p className="fs-5">
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
