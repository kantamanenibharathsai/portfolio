// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   SiVisualstudiocode,
//   SiPostman,
//   SiWindows,
//   SiKaggle,
//   SiLinux,
// } from "react-icons/si";
// import { FaGithub } from "react-icons/fa";

// function Toolstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiLinux />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVisualstudiocode />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostman />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiWindows />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <FaGithub />
//       </Col>
//     </Row>
//   );
// }

// export default Toolstack;
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiWindows,
  SiKaggle,
  SiLinux,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import "../../App.css"; // Assuming you'll create this CSS file

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiLinux className="tech-icon" />
        </div>
        <p className="tech-name">Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiVisualstudiocode className="tech-icon" />
        </div>
        <p className="tech-name">VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiPostman className="tech-icon" />
        </div>
        <p className="tech-name">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiWindows className="tech-icon" />
        </div>
        <p className="tech-name">Windows</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <FaGithub className="tech-icon" />
        </div>
        <p className="tech-name">GitHub</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-container">
          <SiKaggle className="tech-icon" />
        </div>
        <p className="tech-name">Kaggle</p>
      </Col> */}
    </Row>
  );
}

export default Toolstack;