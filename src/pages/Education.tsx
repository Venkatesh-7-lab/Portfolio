import React from "react";
import { Container } from "react-bootstrap";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { educationList, experienceList } from "../data/education";

interface ExperienceItemProps {
  title: string;
  duration: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  duration,
  description,
}) => (
  <article className="card experience-card" tabIndex={0}>
    <h3 className="heading experience-title">{title}</h3>
    <time className="duration" dateTime={duration}>
      {duration}
    </time>
    <ul className="description-list">
      {description.map((point, idx) => (
        <li key={idx}>{point}</li>
      ))}
    </ul>
  </article>
);

interface EducationItemProps {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  isLeft: boolean;
}

const EducationItem: React.FC<EducationItemProps> = ({
  degree,
  institution,
  duration,
  description,
  isLeft,
}) => (
  <div className={`degree-card ${isLeft ? "left" : "right"}`}>
    <span className="timeline-dot" />
    <h3 className="heading degree-title">{degree}</h3>
    <p className="subheading">{institution}</p>
    <time className="duration" dateTime={duration}>
      {duration}
    </time>
    <p className="description">{description}</p>
  </div>
);

export const Education: React.FC = () => {
  return (
    <section
      className="experience-education-section"
      id="experience-education"
      style={{ height: "80vh" }}>
      <Container>
        <h2 className="section-title">
          <FaBriefcase className="icon text-success me-2" />
          Experience
        </h2>
        <div className="experience-list">
          {experienceList.map((exp, idx) => (
            <ExperienceItem
              key={idx}
              title={exp.title}
              duration={exp.duration}
              description={exp.description}
            />
          ))}
        </div>

        <h2 className="section-title mt-5">
          <FaGraduationCap className="icon text-primary me-2" />
          Education
        </h2>
        <div className="education-timeline">
          <div className="timeline-line" />
          {educationList.map((edu, idx) => (
            <EducationItem
              key={idx}
              degree={edu.degree}
              institution={edu.institution}
              duration={edu.duration}
              description={edu.description}
              isLeft={idx % 2 === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
