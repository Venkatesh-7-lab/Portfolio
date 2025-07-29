import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent default to control it manually
    setFormSubmitted(true);

    // Submit the form manually
    if (formRef.current) {
      formRef.current.submit();
    }

    // Reset the fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact-section py-5 bg-light" id="contact">
      <Container>
        <h2 className="text-center mb-5 fw-bold">Contact Me</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            {formSubmitted && (
              <Alert
                variant="success"
                onClose={() => setFormSubmitted(false)}
                dismissible>
                ✅ Your message has been sent!
              </Alert>
            )}

            <Form
              ref={formRef}
              action="https://formsubmit.co/adakavenkatesh7@gmail.com"
              method="POST"
              onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />

              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="message" className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  placeholder="Write your message..."
                  required
                />
              </Form.Group>

              <div className="text-center">
                <Button type="submit" variant="dark" size="lg">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
