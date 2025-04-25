import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./EducationCard";
import Particle from "../Particle";
import aksharaLogo from "../../Assets/aksharaSchoolLogo.png";
import sriChaitanyaLogo from "../../Assets/sriChaitanyaLogo.png";
import vignanLogo from "../../Assets/vigananLogo.png";

function EducationPage() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My <strong className="purple">Education</strong>
                </h1>
                <Row style={{ justifyContent: "center", alignItems: "center", paddingBottom: "10px" }}>
                    <Col xs={11.5} md={6} lg={5} className="project-card">
                        <EducationCard
                            title1="B.Tech in Mechanical Engineering"
                            title2="Vignan's Deemed to be University"
                            title3="2016-20"
                            description={
                                <>
                                    CGPA: 8.75
                                    <br />
                                    <br />
                                    Bachelor's degree program focused on the principles and applications of mechanical engineering.
                                    Studies included thermodynamics, fluid mechanics, design, manufacturing, and materials science.
                                </>
                            }
                            imgPath={vignanLogo}
                        />
                    </Col>
                    <Col xs={11.5} md={6} lg={5} className="project-card">
                        <EducationCard
                            title1="Intermediate (MPC)"
                            title2="Sri Chaitanya IIT JEE Academy, Vijayawada"
                            title3="2014-16"
                            description={
                                <>
                                    <span style={{ textAlign: "center", fontSize: "20px" }}>Percentage: 75.9%</span>
                                    <br />
                                    <br />
                                    Secondary education with a focus on Mathematics, Physics, and Chemistry, preparing for engineering entrance examinations.
                                    Coursework emphasized a strong foundation in science and mathematics.
                                </>
                            }
                            imgPath={sriChaitanyaLogo}

                        />
                    </Col>
                    <Col xs={11.5} md={6} lg={5} className="project-card">
                        <EducationCard
                            title1="Secondary School Certificate (SSC)"
                            title2="Akshara School, Vijayawada"
                            title3="2013-14"
                            description={
                                <>
                                    <span style={{ textAlign: "center" }}>CGPA: 9.0 / 10</span>
                                    <br />
                                    <br />
                                    Completed secondary school education, covering a broad range of subjects including mathematics, sciences, social studies, and languages.
                                    Foundational education in core academic subjects.
                                </>
                            }
                            imgPath={aksharaLogo}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default EducationPage;