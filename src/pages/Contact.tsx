import React, { useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Card,
} from "react-bootstrap";

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (formRef.current) {
      formRef.current.submit();
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      className="contact-section py-5"
      id="contact"
      style={{
        background:
          "linear-gradient(90deg,rgb(39, 219, 108),rgb(238, 146, 146))",
      }}>
      <Container>
        <h2
          className="text-center mb-5 fw-bold"
          style={{
            fontSize: "2.5rem",
            color: "#212529",
            letterSpacing: "1px",
          }}>
          Contact Me
        </h2>

        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            {formSubmitted && (
              <Alert
                variant="success"
                onClose={() => setFormSubmitted(false)}
                dismissible
                className="shadow-sm">
                ✅ Your message has been sent!
              </Alert>
            )}

            <Card
              className="p-4 shadow-sm border-0 rounded-4"
              style={{ backgroundColor: "white" }}>
              <Form
                ref={formRef}
                action="https://formsubmit.co/adakavenkatesh7@gmail.com"
                method="POST"
                onSubmit={handleSubmit}>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />

                <Form.Group controlId="name" className="mb-4">
                  <Form.Label className="fw-semibold">Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    style={{
                      borderRadius: "8px",
                      borderColor: "#ced4da",
                      transition: "border-color 0.3s ease",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#ffc107")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "#ced4da")
                    }
                  />
                </Form.Group>

                <Form.Group controlId="email" className="mb-4">
                  <Form.Label className="fw-semibold">Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    style={{
                      borderRadius: "8px",
                      borderColor: "#ced4da",
                      transition: "border-color 0.3s ease",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#ffc107")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "#ced4da")
                    }
                  />
                </Form.Group>

                <Form.Group controlId="message" className="mb-4">
                  <Form.Label className="fw-semibold">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder="Write your message..."
                    required
                    style={{
                      borderRadius: "8px",
                      borderColor: "#ced4da",
                      transition: "border-color 0.3s ease",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#ffc107")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "#ced4da")
                    }
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button
                    type="submit"
                    variant="warning"
                    size="lg"
                    className="fw-semibold text-dark"
                    style={{
                      borderRadius: "50px",
                      boxShadow: "0 4px 12px rgba(255, 193, 7, 0.5)",
                      transition: "transform 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }>
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
