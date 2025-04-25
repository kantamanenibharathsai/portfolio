import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const location = useLocation();
  console.log(location, "sfvsffvsv");
  const [footerStyle, setFooterStyle] = useState({});

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/resume") {
      setFooterStyle({
        position: "fixed",
        bottom: 0,
        width: "100%"
      });
    } else {
      setFooterStyle({
        position: "relative",
        bottom: 0,
        width: "100%"
      });
    }
  }, [location]);


  return (
    <footer
      style={{
        backgroundColor: "#121212",
        color: "#ffffff",
        padding: "20px 0",
        zIndex: 999,
        ...footerStyle
      }}
    >
      <Container fluid>
        <Row>
          <Col md="4" className="footer-copywright">
          </Col>
          <Col md="4" className="footer-copywright text-center">
            <p style={{ color: "#b0b0b0", marginBottom: "0" }}>
              © {year} Bharath Sai | Passionate about building clean, scalable,
              and user-friendly web & mobile apps.{" "}
              <span style={{ color: "#c084fc", fontWeight: 500 }}>
                Open to exciting opportunities!
              </span>
            </p>
          </Col>
          <Col md="4" className="footer-body text-end">
            <ul
              className="footer-icons"
              style={{
                listStyle: "none",
                paddingLeft: 0,
                display: "flex",
                justifyContent: "flex-end",
                gap: "15px",
                marginBottom: 0,
              }}
            >
              <li className="social-icons">
                <a
                  href="https://github.com/kantamanenibharathsai?tab=repositories"
                  style={{ color: "#ffffff", fontSize: "1.5rem" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href='https://www.linkedin.com/in/bharath-sai-kantamaneni-120a9a189/'
                  style={{ color: "#ffffff", fontSize: "1.5rem" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
