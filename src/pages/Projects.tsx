import React, { useState } from "react";
import { Container, Row, Col, Modal, Tab, Tabs } from "react-bootstrap";
import { projectList, type Project } from "../data/projects";
import { ProjectCard } from "../components/ui";

export const Projects: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [tabAnimationKey, setTabAnimationKey] = useState<number>(0);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  const handleTabSelect = (tabKey: string | null) => {
    if (tabKey) {
      setActiveTab(tabKey);
      setTabAnimationKey((prev) => prev + 1);
    }
  };

  return (
    <section className="projects-section py-5 bg-light" id="projects">
      <Container>
        <h2 className="text-center fw-bold mb-5">Projects</h2>
        <Row className="g-4">
          {projectList.map((project, index) => (
            <Col key={index} md={6}>
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description.slice(0, 100)}
                techStack={project.techStack}
                onViewDetails={() => handleOpenModal(project)}
              />
            </Col>
          ))}
        </Row>

        <>
          <style>
            {`
            @keyframes rotateIn {
      0% {
        opacity: 0;
        transform: rotateX(-90deg) scale(0.9);
      }
      100% {
        opacity: 1;
        transform: rotateX(0deg) scale(1);
      }
    }

    .twist-animated {
      animation: rotateIn 0.6s ease-out;
      transform-origin: top center;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .tab-fade {
      animation: fadeIn 0.4s ease-in-out;
    }
      @keyframes rotateIn {
        0% {
          opacity: 0;
          transform: rotateX(-90deg) scale(0.9);
        }
        100% {
          opacity: 1;
          transform: rotateX(0deg) scale(1);
        }
      }

      .twist-animated {
        animation: rotateIn 0.6s ease-out;
        transform-origin: top center;
      }
    `}
          </style>
          {showModal && (
            <Modal
              show={showModal}
              onHide={handleCloseModal}
              centered
              size="xl"
              backdrop={true}>
              <div className="modal-content twist-animated">
                <Modal.Header className="bg-primary text-white">
                  <Modal.Title className="fw-semibold fs-4">
                    {selectedProject?.title}
                  </Modal.Title>
                </Modal.Header>

                <Modal.Body className="bg-light">
                  <Tabs
                    activeKey={activeTab}
                    onSelect={handleTabSelect}
                    className="mb-4 nav-pills justify-content-center"
                    variant="pills">
                    <Tab eventKey="overview" title="Overview">
                      <div
                        key={`overview-${tabAnimationKey}`}
                        className="tab-fade p-3 bg-white rounded shadow-sm">
                        <p className="fs-6 text-muted mb-0">
                          {selectedProject?.description}
                        </p>
                      </div>
                    </Tab>

                    <Tab eventKey="tech" title="Tech Stack">
                      <div
                        key={`tech-${tabAnimationKey}`}
                        className="tab-fade p-3 bg-white rounded shadow-sm">
                        <div className="d-flex flex-wrap gap-2">
                          {selectedProject?.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="badge bg-secondary px-3 py-2 fs-6 rounded-pill">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </Modal.Body>
              </div>
            </Modal>
          )}
        </>
      </Container>
    </section>
  );
};
