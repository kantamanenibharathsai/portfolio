import React from "react";
import Card from "react-bootstrap/Card";
import "../../App.css";
import { Button } from "react-bootstrap";

function ExperienceCard(props) {
  return (
    <Card className="project-card-view pt-4 pb-4">
    <Card.Body className="d-flex flex-column">
      <h1 class="card-title-two">
          {props.title1}
        </h1>
        <h2 class="card-title-two">
          {props.title2}
        </h2>
        <h2 class="card-title-two">
          {props.title3}
        </h2>
        <h2 class="project-description-two">
          {props.description}
        </h2>
        {props.title2 === "Extended Web App Tech LLP" && (
          <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ width: "90px", position: "relative", bottom: "-20px" }}
          >
         Click Me
          </Button>
          </div>
          )}
    </Card.Body>
  </Card>
  );
}
export default ExperienceCard;