import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import photo from "../../Assets/passportSizePhoto.jpg"
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../../App.css"

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m <b className="purple">Bharath Sai Kantamaneni</b>, a passionate and results-driven
              <b className="purple"> React JS / React Native / MERN stack developer</b> with 2 years of
              hands-on experience in building modern, responsive web and mobile applications.
              <br />
              <br />
              I specialize in crafting seamless user experiences using&nbsp;
              <i>
                <b className="purple">React.js, React Native, TypeScript, and Material UI</b>
              </i>, along with state management tools like&nbsp;
              <i>
                <b className="purple">Redux Toolkit</b>
              </i>.
              <br />
              <br />
              I'm also skilled in backend technologies including&nbsp;
              <i>
                <b className="purple">Node.js, Express.js, and MongoDB</b>
              </i>, allowing me to contribute effectively across the full stack.
              <br />
              <br />
              I’ve developed applications such as a&nbsp;
              <b className="purple">Hoarding System, Salon Management, Bus Booking System,</b> and a
              feature-rich <b className="purple">Food Delivery App</b>, all focused on performance,
              scalability, and user-centric design.
              <br />
              <br />
              My goal is to continue building impactful digital solutions while writing clean,
              maintainable, and scalable code using modern tools and technologies like&nbsp;
              <b className="purple">React, Firebase, and RESTful APIs</b>.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <div className="circular-image-container">
                <img src={photo} className="img-fluid circular-image" alt="avatar" />
              </div>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kantamanenibharathsai?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bharath-sai-kantamaneni-120a9a189/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
