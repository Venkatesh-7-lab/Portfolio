import React from "react";
import { Card, Button } from "react-bootstrap";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  onViewDetails: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  onViewDetails,
}) => {
  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Body>
        <Card.Title className="fs-5 fw-bold mb-2">{title}</Card.Title>
        <Card.Text className="text-muted mb-2">
          {description.slice(0, 100)}...
        </Card.Text>
        <div className="mb-3 d-flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <span key={i} className="badge bg-dark">
              {tech}
            </span>
          ))}
        </div>
        <Button variant="outline-primary" size="sm" onClick={onViewDetails}>
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};
