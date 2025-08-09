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
        <Card.Title className="fs-4 fw-bold mb-3">{title}</Card.Title>
        <Card.Text className="text-secondary mb-4 fs-5">
          {description.length > 50
            ? `${description.slice(0, 50)}...`
            : description}
        </Card.Text>
        <div className="mb-3 d-flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <span key={i} className="badge fs-6 text-white bg-dark">
              {tech}
            </span>
          ))}
        </div>
        <Button variant="warning" size="sm" onClick={onViewDetails}>
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};
