import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { FaSyncAlt } from "react-icons/fa"; // React Icons rotate icon
import { projectList, type Project } from "../data/projects";
import { ProjectCard } from "../components/ui";

export const Projects: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showOverview, setShowOverview] = useState(true);
  const [rotate, setRotate] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setShowOverview(true); // reset to overview when opening modal
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  const toggleContent = () => {
    setRotate(true);
    setTimeout(() => {
      setShowOverview((prev) => !prev);
      setRotate(false);
    }, 300); // sync with animation duration
  };

  return (
    <section
      className="projects-section py-5 bg-light"
      id="projects"
      style={{ height: "80vh" }}>
      <Container>
        <h2 className="text-center fw-bold mb-5">Projects</h2>
        <Row className="g-4">
          {projectList.map((project, index) => (
            <Col key={index} md={6}>
              <ProjectCard
                title={project.title}
                description={project.description.slice(0, 100)}
                techStack={project.techStack}
                onViewDetails={() => handleOpenModal(project)}
              />
            </Col>
          ))}
        </Row>

        {showModal && selectedProject && (
          <Modal
            show={showModal}
            onHide={handleCloseModal}
            centered
            size="xl"
            backdrop={true}>
            <Modal.Header className="d-flex justify-content-between align-items-center bg-primary text-white">
              <Modal.Title className="fw-semibold fs-4">
                {selectedProject.title}
              </Modal.Title>
              <Button
                variant="link"
                onClick={toggleContent}
                style={{
                  transition: "transform 0.3s ease",
                  transform: rotate ? "rotate(360deg)" : "rotate(0deg)",
                  fontSize: "1.5rem",
                  color: "white",
                }}
                aria-label="Toggle project details">
                <FaSyncAlt />
              </Button>
            </Modal.Header>

            <Modal.Body className="bg-light">
              {showOverview ? (
                <div className="p-3 bg-white rounded shadow-sm">
                  <h5>Overview</h5>
                  <p className="fs-6 text-muted mb-0">
                    {selectedProject.description}
                  </p>
                </div>
              ) : (
                <div className="p-3 bg-white rounded shadow-sm">
                  <h5>Tech Stack</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="badge bg-secondary px-3 py-2 fs-6 rounded-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </Modal.Body>
          </Modal>
        )}
      </Container>
    </section>
  );
};
