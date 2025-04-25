import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bharath Sai Kantamaneni</span> from{" "}
            <span className="purple">Vijayawada, AP, India</span>.
            <br />
            I am a passionate <strong className="purple">React JS / React Native / MERN Stack Developer</strong> with 2 years of industry experience.
            <br />
            I’ve worked at <strong className="purple">Xforge Technologies</strong> and{" "}
            <strong className="purple">Extended Web App Tech LLP</strong>, where I built responsive and scalable apps using modern web technologies.
            <br />
            <br />
            I love working on full-stack projects that involve both frontend and backend using tools like{" "}
            <strong className="purple">React.js, Node.js, MongoDB, Firebase, SQL, TypeScript</strong>, and more.
            <br />
            I aim to craft user-centric solutions and visually stunning UIs that enhance functionality and user engagement.
            <br />
            <br />
            Apart from coding, some other activities that I enjoy include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new web technologies & trends
            </li>
            <li className="about-activity">
              <ImPointRight /> Debugging and optimizing code for performance
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing user interfaces and mobile-first layouts
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
