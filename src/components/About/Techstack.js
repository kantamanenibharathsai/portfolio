import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiBootstrap,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiMui } from "react-icons/si";
import { DiSqllite } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import {
  SiFirebase,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import "../../App.css";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <DiJavascript1 className="tech-icon" />
        </div>
        <p className="tech-name">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <DiReact className="tech-icon" />
        </div>
        <p className="tech-name">React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <DiHtml5 className="tech-icon" />
        </div>
        <p className="tech-name">HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <DiCss3 className="tech-icon" />
        </div>
        <p className="tech-name">CSS3</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiRedux className="tech-icon" />
        </div>
        <p className="tech-name">Redux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <DiBootstrap className="tech-icon" />
        </div>
        <p className="tech-name">Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiMui className="tech-icon" />
        </div>
        <p className="tech-name">Material UI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiTailwindcss className="tech-icon" />
        </div>
        <p className="tech-name">Tailwind CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <TbBrandReactNative className="tech-icon" />
        </div>
        <p className="tech-name">React Native</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <DiNodejs className="tech-icon" />
        </div>
        <p className="tech-name">Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiExpress className="tech-icon" />
        </div>
        <p className="tech-name">Express</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <DiPython className="tech-icon" />
        </div>
        <p className="tech-name">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <DiMongodb className="tech-icon" />
        </div>
        <p className="tech-name">MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <DiSqllite className="tech-icon" />
        </div>
        <p className="tech-name">SQLite</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiFirebase className="tech-icon" />
        </div>
        <p className="tech-name">Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <DiGit className="tech-icon" />
        </div>
        <p className="tech-name">Git</p>
      </Col>
    </Row>
  );
}

export default Techstack;