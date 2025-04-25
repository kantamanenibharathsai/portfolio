import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Salon from "../../Assets/Projects/salonWeb.png";
import busBooking from "../../Assets/Projects/busBooking.png";
import foodDelivery from "../../Assets/Projects/foodDelivery.png";
import hoardingDashoboard from "../../Assets/Projects/hoardingDashoboard.png";
import fipolaMobileAppImage from "../../Assets/Projects/fipolameatstore1.png";

function Projects() {
  return (
    <Container fluid className="project-section p-0 pt-5 m-0">
      <Particle />
      <Container className="project-section p-0 pt-5" style={{ margin: '0 !important', padding: "0 !important", width: "100%", }}>
        <h1 className="project-heading mb-3 mt-3">
          <strong className="purple">In-House Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Below are the in-house projects I have contributed to during my tenure at Extended Web AppTech LLP.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col xs={11.5} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Salon}
              isBlog={false}
              title="Salon Management System"
              description="Developed an admin interface for a salon management system using React.js, Material UI, and TypeScript. Implemented REST API integration for CRUD operations, responsive UI with reusable components, real-time data visualization using Recharts, Google Maps integration for salon locations, and robust error handling with notifications."
            // ghLink="https://github.com/kantamanenibharathsai?tab=repositories"
            />
          </Col>

          <Col xs={11.5} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={busBooking}
              isBlog={false}
              title="Bus Booking System"
              description="Built a responsive bus booking web application using React.js, Redux Toolkit, and Firebase. Implemented dynamic seat selection with real-time updates, booking summary with coupon application, rich text feedback forms, and lazy loading for large datasets to ensure high performance."
            // ghLink="https://github.com/kantamanenibharathsai?tab=repositories"
            />
          </Col>

          <Col xs={11.5} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={hoardingDashoboard}
              isBlog={false}
              title="Hoarding Booking Web App"
              description="Designed a Customer flow responsive hoarding system with React.js and TypeScript. Features include OTP authentication, Firebase push notifications, carousel display, map-based booking, search with debounce, and category filtering. Emphasized component reusability, error handling, and user profile management."
            // ghLink="https://github.com/kantamanenibharathsai?tab=repositories"
            />
          </Col>

          <Col xs={11.5} md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={foodDelivery}
              isBlog={false}
              title="Food Delivery App"
              description="Engineered a full-stack mobile app for food delivery using React Native, Redux Toolkit, Node.js, and MongoDB. Supported role-based login, real-time tracking, itemized billing, order history, search, favorite items, reviews, and secure checkout with location access and notification features."
            // ghLink="https://github.com/kantamanenibharathsai?tab=repositories"
            />       </Col>

            <Col xs={11.5} md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath={fipolaMobileAppImage} // Replace with an actual image path
                isBlog={false}
                title="Fipola Meat Store Web Application"
                description="Developed a comprehensive and user-friendly mobile e-commerce application for Fipola Meat Store using React JS. The app provides a seamless experience for customers to browse, order, and manage their meat purchases. The user journey begins with a smooth onboarding process featuring login/registration with OTP verification. Users can easily set their delivery location via PIN code and explore a well-organized product catalog with high-quality images and detailed descriptions in the single product view. The app supports multiple payment options, including card and UPI, and offers a streamlined checkout process. Key features include a persistent shopping cart, order history tracking with detailed order information, user profile management, and an intuitive side navigation bar for easy access to all sections. The delivery address management allows users to select from existing addresses or add new ones with potential map integration. The application highlights Fipola's commitment to quick 90-minute delivery and the availability of antibiotic-free and hygiene-certified meat products, ensuring a convenient and trustworthy shopping experience."
              // ghLink="YOUR_GITHUB_LINK_HERE"
              // demoLink="YOUR_DEMO_LINK_HERE"
              />
            </Col>
   

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
