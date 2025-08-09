import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { barData, radarData } from "../data/skills";

export const Skills: React.FC = () => {
  return (
    <section className="skills-section py-5 bg-white" id="skills">
      <Container>
        <h2 className="text-center fw-bold mb-5">My Technical Skills</h2>
        <Row className="gy-4">
          {/* Radar Chart: Category Overview */}
          <Col md={6}>
            <Card className="shadow-sm border-0 p-3 h-100">
              <h5 className="mb-3 text-primary">Skill Categories Overview</h5>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart outerRadius={100} data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="category" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    name="Proficiency"
                    dataKey="level"
                    stroke="#007bff"
                    fill="#007bff"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </Card>
          </Col>

          {/* Bar Chart: Individual Technologies */}
          <Col md={6}>
            <Card className="shadow-sm border-0 p-3 h-100">
              <h5 className="mb-3 text-success">Technology-wise Proficiency</h5>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart
                  data={barData}
                  layout="vertical"
                  margin={{ top: 10, left: 20, right: 20, bottom: 10 }}>
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis type="category" dataKey="skill" width={140} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="level" fill="#28a745" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
