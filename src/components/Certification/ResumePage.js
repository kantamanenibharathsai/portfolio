import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { FaDownload } from "react-icons/fa";


function ResumePage() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    try {
      setIsDownloading(true);
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

export default ResumePage;