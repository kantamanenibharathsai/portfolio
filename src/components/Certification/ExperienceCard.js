import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ExperienceCard(props) {
  return (
    <Card className="project-card-view2">
      <Card.Body card-body2>
        <Card.Title>{props.title1}</Card.Title>
        <Card.Title>{props.title2}</Card.Title>
        <Card.Title>{props.title3}</Card.Title>
        <Card.Title>{props.title4}</Card.Title>
        <Card.Text classNmae="project-description2" style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          &nbsp;
          {props.isBlog ? "Blog" : "Click Here"}
        </Button>
        {"\n"}
        {"\n"}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ExperienceCard;
