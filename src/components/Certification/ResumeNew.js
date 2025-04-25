// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ExperienceCard";
// import Particle from "../Particle";
// import leaf from "../../Assets/Projects/40.png";
// import emotion from "../../Assets/Projects/5.png";
// import editor from "../../Assets/Projects/3.png";
// import chatify from "../../Assets/Projects/1.png";
// import suicide from "../../Assets/Projects/4.png";
// import bitsOfCode from "../../Assets/Projects/2.png";

// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My <strong className="purple">Certifications </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are some of my certifications.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={chatify}
//               isBlog={false}
//               title1="Generative AI: Prompt Engineering Basics"
//               title2="IBM"
//               title3="Feb 2024"
//               ghLink="https://www.coursera.org/account/accomplishments/verify/DEHS546345ZD?trk=public_profile_see-credential"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={bitsOfCode}
//               isBlog={false}
//               title1="Introduction to Microsoft Azure Cloud Services"
//               title2="Microsoft"
//               title3="Feb 2024"
//               ghLink="https://www.coursera.org/account/accomplishments/verify/WCYPQ4WQSH26?trk=public_profile_see-credential"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={bitsOfCode}
//               isBlog={false}
//               title1="Cybersecurity for Everyone"
//               title2="University of Maryland"
//               title3="Jan 2024"
//               ghLink="https://www.coursera.org/account/accomplishments/verify/VP579D9KDDT9?trk=public_profile_see-credential"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={bitsOfCode}
//               isBlog={false}
//               title1="Data Science Professional Certificate"
//               title2="IBM"
//               title3="Sep 2023"
//               ghLink="https://www.coursera.org/account/accomplishments/professional-cert/6VAEYF9TXPYA?trk=public_profile_see-credential"
//             />
//           </Col>

//           {/* Render the last two certificates without buttons */}
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={bitsOfCode}
//               isBlog={false}
//               title1="Oracle Cloud Infrastructure 2023"
//               title2="Oracle"
//               title3="Dec 2023"
//               ghLink="https://drive.google.com/file/d/1LXezi7rytcU-y0UeGREypn4indwDSZsE/view"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={bitsOfCode}
//               isBlog={false}
//               title1="Azure AI Fundamentals"
//               title2="Microsoft"
//               title3="Jul 2023"
//               ghLink="https://drive.google.com/file/d/1R6iG57otXRtZPehoKR5OCqSsjSxBjwIu/view"
//             />
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;
// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import Particle from "../Particle";
// // import resumeIcon from "../../Assets/Projects/resume.png"; // Replace with your actual icon/image
// import { FaDownload } from "react-icons/fa";
// import { GoDownload } from "react-icons/go";
// import { saveAs } from 'file-saver';
// import "../../App.css"


// function Projects() {

//   const handleDownload = () => {
//     saveAs('/BharathSaiResumeLatest2025.pdf', 'BharathSai_Resume.pdf');
//   };

//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My <strong className="purple">Resume</strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Click the button below to download my latest resume.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
//           <Col md={6} className="text-center">
//             <br />
//             {/* <a 
//               href="/BharathSaiResumeLatest2025.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="download-btn"
//             >
//               <FaDownload className="download-icon" />
//               <span>Download Resume (PDF)</span>
//             </a> */}
//             <button
//               onClick={handleDownload}
//               className="download-btn"
//             >
//               <FaDownload className="download-icon" />
//               <span>Download Resume (PDF)</span>
//             </button>
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;


import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { FaDownload } from "react-icons/fa";


function Projects() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    try {
      setIsDownloading(true);

      // Create a link to the PDF file in the public folder
      const link = document.createElement("a");
      link.href = process.env.PUBLIC_URL + "/resume.pdf";
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
    } catch (error) {
      console.error("Download failed:", error);
      setIsDownloading(false);
      alert("Download failed. Please try again later.");
    }
  };


  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Resume</strong>
        </h1>
        <p style={{ color: "white" }}>
          Click the button below to download my latest resume.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "30px", }}>
          <Col md={6} className="text-center">
            <br />
              <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="btn btn-primary download-button"
              style={{
                padding: "12px 24px",
                fontSize: "18px",
                backgroundColor: "#623686",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer !important",
                margin: "0 auto",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                position: "relative"
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#7d43b5"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#623686"}
            >
              <FaDownload style={{ marginRight: "10px" }} />
              {isDownloading ? "Downloading..." : "Download My Resume"}
            </button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;