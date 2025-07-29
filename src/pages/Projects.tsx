import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Tab,
  Tabs,
} from "react-bootstrap";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  screenshots?: string[]; // Optional if you want later
}

const projectList: Project[] = [
  {
    title: "Volunteer Management System (VMS)",
    description:
      "A system to manage volunteers from registration to study completion. It supports different user roles like admins and coordinators, allows screening and scheduling of volunteers, and tracks their progress. The system includes role-based dashboards, approval workflows, and secure data storage.",
    techStack: ["React", "Redux", "TypeScript", ".NET Core", "SQL Server"],
  },
  {
    title: "Annual Product Quality Review (APQR)",
    description:
      "A system designed to automate and manage Annual Product Quality Review (APQR) schedules and clinical task planning. It supports frequency-based execution, ensures regulatory compliance, and streamlines tracking of recurring quality activities using optimized SQL procedures and dynamic JSON data handling.",
    techStack: ["React", "Bootstrap", "SQL Server", ".NET Core Web API"],
  },
];
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
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fs-5 fw-bold mb-2">
                    {project.title}
                  </Card.Title>
                  <Card.Text className="text-muted mb-2">
                    {project.description.slice(0, 100)}...
                  </Card.Text>
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="badge bg-dark">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => handleOpenModal(project)}>
                    View Details
                  </Button>
                </Card.Body>
              </Card>
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
