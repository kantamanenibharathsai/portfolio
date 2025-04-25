import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";

function ExperiencePage() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      <h1 className="project-heading">
          My Professional <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the companies I've worked with recently.
        </p>
        <Row style={{ justifyContent: "center", alignItems: "center", paddingBottom: "10px" }}>
          <Col xs={11.5} md={6} lg={5} className="project-card">
            <ExperienceCard
              title1="Software Engineer"
              title2="Xforge Technologies Pvt Ltd"
              title3="Feb 2025 – April 2025"
              description="Completed onboarding and actively contributed to internal knowledge transfers, company workflows, tech stack orientation, and Agile methodology practices."
            />
          </Col>
          <Col xs={11.5} md={6} lg={5} className="project-card">
            <ExperienceCard
              title1="Junior Software Engineer"
              title2="Extended Web App Tech LLP"
              title3="April 2023 – January 2025"
              demoLink={"https://www.extwebtech.com/"}
              description="Led frontend and backend development for responsive web/mobile apps using React JS, React Native, Node.js, and MongoDB. Optimized performance, implemented lazy loading, reusable components, and robust error handling."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ExperiencePage;
