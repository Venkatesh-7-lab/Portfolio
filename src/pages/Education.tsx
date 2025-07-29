import React from "react";
import { Container } from "react-bootstrap";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const experienceList = [
  {
    title: "Full-Stack Developer",
    company: "Aizen Algo Private Limited",
    duration: "2024 – Present",
    description: [
      "Developed dynamic web apps using React, Redux Toolkit, .NET Core API, and SQL Server.",
      "Worked on state management, secure authentication, PDF generation, and reusable UI.",
    ],
  },
];

const educationList = [
  {
    degree: "B.Tech – Computer Science",
    institution: "PACE INSTITUTE OF TECHNOLOGY AND SCIENCES",
    duration: "2019 – 2023",
    description:
      "Focused on software engineering, data structures, DBMS, and web development.",
  },
  {
    degree: "Intermediate – MPC",
    institution: "Sri Saraswathi Jr College",
    duration: "2017 – 2019",
    description:
      "Maths, Physics, and Chemistry major with strong logical foundation.",
  },
];

export const Education: React.FC = () => {
  const styles = {
    section: {
      padding: "60px 0",
      backgroundColor: "#f8f9fa",
    },
    title: {
      textAlign: "center" as const,
      fontWeight: 700,
      fontSize: "2rem",
      marginBottom: "40px",
    },
    card: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 0 12px rgba(0,0,0,0.06)",
      marginBottom: "25px",
    },
    degreeCard: (isLeft: boolean) => ({
      ...styles.card,
      width: "45%",
      position: "relative" as const,
      left: isLeft ? "0" : "55%",
      textAlign: "left" as const,
    }),
    wrapper: {
      position: "relative" as const,
      paddingLeft: "20px",
      paddingRight: "20px",
      maxWidth: "900px",
      margin: "0 auto",
    },
    timelineLine: {
      position: "absolute" as const,
      left: "50%",
      top: 0,
      bottom: 0,
      width: "4px",
      backgroundColor: "#0d6efd",
      transform: "translateX(-50%)",
    },
    dot: {
      position: "absolute" as const,
      top: "22px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "16px",
      height: "16px",
      backgroundColor: "#fff",
      border: "4px solid #0d6efd",
      borderRadius: "50%",
      zIndex: 2,
    },
    heading: {
      fontWeight: 600,
      fontSize: "1.1rem",
      marginBottom: "5px",
      color: "#0d6efd",
    },
    sub: {
      fontSize: "0.95rem",
      fontWeight: 500,
    },
    duration: {
      fontSize: "0.85rem",
      color: "#6c757d",
    },
    desc: {
      fontSize: "0.9rem",
      color: "#333",
      marginTop: "8px",
    },
  };

  return (
    <section style={styles.section} id="experience-education">
      <Container>
        {/* Experience Section */}
        <h2 style={styles.title}>
          <FaBriefcase className="me-2 text-success" />
          Experience
        </h2>
        {experienceList.map((exp, idx) => (
          <div key={idx} style={styles.card}>
            <div style={styles.heading}>{exp.title}</div>
            <div style={styles.duration}>{exp.duration}</div>
            <ul style={styles.desc}>
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Education Timeline */}
        <h2 style={{ ...styles.title, marginTop: "60px" }}>
          <FaGraduationCap className="me-2 text-primary" />
          Education
        </h2>
        <div style={styles.wrapper}>
          <div style={styles.timelineLine}></div>
          {educationList.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} style={styles.degreeCard(isLeft)}>
                <div style={styles.dot}></div>
                <div style={styles.heading}>{item.degree}</div>
                <div style={styles.sub}>{item.institution}</div>
                <div style={styles.duration}>{item.duration}</div>
                <div style={styles.desc}>{item.description}</div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
