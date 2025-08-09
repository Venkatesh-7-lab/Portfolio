import { Container, Row, Col } from "react-bootstrap";

export const Footer: React.FC = () => {
  return (
    <footer
      className="text-white py-4 mt-auto"
      style={{
        background: "linear-gradient(90deg,rgb(253, 73, 13),rgb(233, 8, 8))",
      }}>
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={6}>
            <p className="mb-0 fw-bold fs-6">
              © {new Date().getFullYear()} Venkatesh Adaka. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end mt-3 mt-md-0">
            <a
              href="https://github.com/Venkatesh-7-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3 text-decoration-none">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/venkatesh-adaka/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3 text-decoration-none">
              LinkedIn
            </a>
            <a
              href="mailto:venkatesh@example.com"
              className="text-white text-decoration-none">
              Email
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
