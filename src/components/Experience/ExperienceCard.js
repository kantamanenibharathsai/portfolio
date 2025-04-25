import React from "react";
import Card from "react-bootstrap/Card";
import "../../App.css";

function ExperienceCard(props) {
  return (
    <Card className="project-card-view pt-2 pb-2">
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
    </Card.Body>
  </Card>
  );
}
export default ExperienceCard;