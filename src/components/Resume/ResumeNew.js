import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ExperienceCard";
import Particle from "../Particle";
import extendedweb from "../../Assets/Projects/extendedLogo.png";

function Projects() {
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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={xforge}
              isBlog={false}
              title1="Software Engineer"
              title2="Xforge Technologies Pvt Ltd"
              title3="Feb 2025 – April 2025"
              description="Completed onboarding and actively contributed to internal knowledge transfers, company workflows, tech stack orientation, and Agile methodology practices."
              ghLink="https://www.linkedin.com/in/bharath-sai-kantamaneni-120a9a189/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={extendedweb}
              isBlog={false}
              title1="Junior Software Engineer"
              title2="Extended Web App Tech LLP"
              title3="April 2023 – January 2025"
              description="Led frontend and backend development for responsive web/mobile apps using React JS, React Native, Node.js, and MongoDB. Optimized performance, implemented lazy loading, reusable components, and robust error handling."
              ghLink="https://www.linkedin.com/in/bharath-sai-kantamaneni-120a9a189/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
